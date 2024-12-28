const Projects = ({ projects, handleInputChange, addItem }) => (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800">Projects</h2>
      
      {projects.map((project, index) => (
        <div key={index} className="space-y-4">
          {/* Project Name */}
          <input
            type="text"
            className="block w-full p-2 border rounded"
            placeholder="Project Name"
            value={project.name || ""}
            onChange={(e) =>
              handleInputChange("projects", `${index}.name`, e.target.value)
            }
          />
  
          {/* Client/Organization */}
          <input
            type="text"
            className="block w-full p-2 border rounded"
            placeholder="Client/Organization"
            value={project.client || ""}
            onChange={(e) =>
              handleInputChange("projects", `${index}.client`, e.target.value)
            }
          />
  
          {/* Start Date */}
          <input
            type="date"
            className="block w-full p-2 border rounded"
            value={project.startDate || ""}
            onChange={(e) =>
              handleInputChange("projects", `${index}.startDate`, e.target.value)
            }
          />
  
          {/* End Date */}
          <input
            type="date"
            className="block w-full p-2 border rounded"
            value={project.endDate || ""}
            onChange={(e) =>
              handleInputChange("projects", `${index}.endDate`, e.target.value)
            }
          />
  
          {/* Project Link */}
          <input
            type="url"
            className="block w-full p-2 border rounded"
            placeholder="Project Link"
            value={project.projectLink || ""}
            onChange={(e) =>
              handleInputChange("projects", `${index}.projectLink`, e.target.value)
            }
          />
  
          {/* Attachments */}
          <input
            type="file"
            className="block w-full p-2 border rounded"
            onChange={(e) =>
              handleInputChange("projects", `${index}.attachments`, e.target.files)
            }
          />
        </div>
      ))}
  
      {/* Button to add a new project */}
      <button
        onClick={() =>
          addItem("projects", { name: "", client: "", startDate: "", endDate: "", projectLink: "", attachments: [] })
        }
        className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 mt-4"
      >
        Add Project
      </button>
    </div>
  );
  
  export default Projects;
  