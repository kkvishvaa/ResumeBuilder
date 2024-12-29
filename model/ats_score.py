import requests
from pymongo import MongoClient
import urllib.parse
import time
import json
# MongoDB connection setup
username = urllib.parse.quote_plus("osama131221")
password = urllib.parse.quote_plus("sainath2005")
connection_string = f"mongodb+srv://{username}:{password}@cluster0.e2ck1.mongodb.net/backend?retryWrites=true&w=majority"
client = MongoClient(connection_string)
db = client['backend']  # Your actual database name
collection = db['formdatas']  # Collection containing parsed PDF content
ats_results_collection = db['ats_analysis_results']  # Collection to store analysis results
job_description1=db['jobdescriptions']
API_KEY = "put gemini api key"


def convert_to_paragraph(obj, indent=0):
    result = ""
    indent_space = " " * indent
    if isinstance(obj, dict):
        for key, value in obj.items():
            result += f"{indent_space}{key}: "
            if isinstance(value, (dict, list)):
                result += "\n" + convert_to_paragraph(value, indent + 4)
            else:
                result += f"{value}\n"
    elif isinstance(obj, list):
        for item in obj:
            result += convert_to_paragraph(item, indent)
    else:
        result += f"{indent_space}{obj}\n"
    return result

def analyze_documents(resume_text, job_description):
    custom_prompt = f"""
    Please analyze the following resume in the context of the job description provided. Strictly check every single line in job description and analyze my resume whether there is a match exactly. Strictly maintain high ATS standards and give scores only to the correct ones. Focus on hard skills which are missing and also soft skills which are missing. Provide the following details.:
    1. The match percentage of the resume to the job description. Display this.
    2. A list of missing keywords accurate ones.
    3. Final thoughts on the resume's overall match with the job description in 3 lines.
    4. Recommendations on how to add the missing keywords and improve the resume in 3-4 points with examples.
    Please display in the above order don't mention the numbers like 1. 2. etc and strictly follow ATS standards so that analysis will be accurate. Strictly follow the above templates omg. don't keep changing every time.
    Job Description: {job_description}

    Resume: {resume_text}
    """

    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key={API_KEY}"
    headers = {'Content-Type': 'application/json'}
    data = {
        "contents": [
            {"role": "user", "parts": [{"text": custom_prompt}]}
        ]
    }
    response = requests.post(url, headers=headers, json=data)
    return response.json()


# Main processing loop
while True:
    try:
        # Fetch unprocessed documents
        documents = list(collection.find({"processed": False }))
        job_description = collection.find_one(sort=[("createdAt", -1)])

        if documents:
            print("Processing new submissions...")

            for document in documents:
                document_id = document['_id']
                # job_description = document.get('job_description', "")

                # Process each document and store in a single variable
                resume_text = ""
                for doc in documents:
                    resume_text += convert_to_paragraph(doc) + "\n"

                # Output the result
                print(resume_text)


                if job_description and resume_text:
                    # Perform analysis
                    print(f"Analyzing document ID: {document_id}")
                    analysis_results = analyze_documents(resume_text, job_description)

                    # Extract analysis content
                    analysis_text = ""
                    match_percentage = 0

                    if "candidates" in analysis_results:
                        for candidate in analysis_results["candidates"]:
                            if "content" in candidate and "parts" in candidate["content"]:
                                for part in candidate["content"]["parts"]:
                                    response_text = part["text"]
                                    analysis_text += response_text + "\n"

                                    # Attempt to extract match percentage
                                    lines = response_text.split("\n")
                                    for line in lines:
                                        if "match percentage" in line.lower():
                                            percentage_str = ''.join(filter(str.isdigit, line.split(":")[-1]))
                                            if percentage_str:
                                                match_percentage = int(percentage_str)
                                            break

                    # Prepare results for storage
                    result_data = {
                        "match_percentage": match_percentage,
                        "analysis": analysis_text,
                    }

                    # Store results in ats_results_collection
                    ats_results_collection.insert_one(result_data)

                    # Mark document as processed
                    collection.update_one(
                        {"_id": document_id},
                        {"$set": {"processed": True, "processedAt": time.strftime("%Y-%m-%d %H:%M:%S")}}
                    )

                    print(f"Analysis complete for document ID: {document_id}")

        else:
            print("No new submissions found. Waiting...")

    except Exception as e:
        print(f"An error occurred: {e}")

    # Wait before checking the database again
    time.sleep(1)
