import React from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Template1 from '../temps/Template1';
import Template2 from '../temps/Template2';
import Template3 from '../temps/Template3';

const LivePreview = ({ template, userData }) => {
  const navigate = useNavigate();

  const renderTemplate = () => {
    switch (template) {
      case 'Template1':
        return <Template1 data={userData} />;
      case 'Template2':
        return <Template2 data={userData} />;
      case 'Template3':
        return <Template3 data={userData} />;
      default:
        return <p>Please select a valid template to preview.</p>;
    }
  };

  const goToResScore = () => {
    navigate('/score');
  };

  const downloadPDF = async () => {
    const element = document.getElementById('pdf-content');
    const canvas = await html2canvas(element, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Calculate the ratio to scale the canvas to fit the PDF width
    const scale = pdfWidth / canvasWidth;
    const scaledCanvasHeight = canvasHeight * scale;

    let position = 0;

    while (position < scaledCanvasHeight) {
        const cropCanvas = document.createElement('canvas');
        cropCanvas.width = canvas.width;
        cropCanvas.height = (pdfHeight / scale);

        const cropCtx = cropCanvas.getContext('2d');
        cropCtx.drawImage(
            canvas,
            0,
            position / scale,
            canvas.width,
            pdfHeight / scale,
            0,
            0,
            cropCanvas.width,
            cropCanvas.height
        );

        const cropImgData = cropCanvas.toDataURL('image/png');
        pdf.addImage(cropImgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

        position += pdfHeight;

        if (position < scaledCanvasHeight) {
            pdf.addPage(); // Add a new page for the next portion
        }
    }

    pdf.save('template.pdf');
};


  return (
    <div className="live-preview p-4 border rounded shadow-lg h-full max-h-screen overflow-auto">
      <h2 className="text-xl font-bold mb-4">Live Preview</h2>
      <div id="pdf-content">
        {userData ? renderTemplate() : <p className="text-gray-500">No data available for preview.</p>}
      </div>
      <button
        type="button"
        onClick={goToResScore}
        className="bg-blue-600 text-white py-3 px-8 ml-2 mt-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Next
      </button>
      <button
        type="button"
        onClick={downloadPDF}
        className="bg-green-600 text-white py-3 px-8 ml-2 mt-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default LivePreview;