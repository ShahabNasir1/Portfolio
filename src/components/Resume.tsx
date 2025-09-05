"use client";

import { useState } from "react";

export default function ResumeViewer() {
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
    } else {
      alert("Please upload a PDF file only.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto text-center" id="resume">
      <h2 className="text-2xl font-semibold mb-4">Upload & View Resume</h2>
      
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileUpload}
        className="mb-6"
      />

      {pdfUrl && (
        <iframe
          src={pdfUrl}
          className="w-full h-[600px] border mt-4"
          title="Resume Viewer"
        />
      )}
    </div>
  );
}
