"use client";

import { useState, useEffect } from "react";

export default function ResumeViewer() {
  // Type the state as string | null
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  // Type the event parameter
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
    } else {
      alert("Please upload a PDF file only.");
    }
  };

  // Cleanup object URL to prevent memory leaks
  useEffect(() => {
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [pdfUrl]);

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
