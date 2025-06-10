import React, { useState, useEffect } from 'react';
import "./App.css";

// We'll use a simpler approach without external dependencies for now
const ResumeUploader = () => {
  const [resumeText, setResumeText] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileContent, setFileContent] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();

    if (file.type === 'application/pdf' || 
        file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
        file.type === 'application/msword') {
      
      // For simplicity, we'll just read the file as text or binary
      reader.onload = (event) => {
        // For demonstration purposes, we'll just show a placeholder text
        setResumeText(`Resume content from ${file.name} would be processed here.
        
In a production environment, we would use libraries like pdfjs-dist for PDF files
and mammoth for DOCX files to extract the actual text content.

File size: ${(file.size / 1024).toFixed(2)} KB
File type: ${file.type}`);
        
        setFileContent(event.target.result);
      };
      
      if (file.type === 'application/pdf') {
        reader.readAsArrayBuffer(file);
      } else {
        reader.readAsText(file);
      }
    } else {
      alert('Only PDF and DOCX files are supported');
    }
  };

  return (
    <div className="airesume">
      <h3>Upload Your Resume</h3>
      <p>Upload your resume to enhance your interview experience</p>
      <input 
        type="file" 
        onChange={handleFileUpload} 
        accept=".pdf,.docx,.doc" 
        className="file-input"
      />
      <br /><br />
      {fileName && <p><strong>Uploaded Resume:</strong> {fileName}</p>}
      {resumeText && (
        <>
          <h3>Resume Content</h3>
          <textarea
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            rows={10}
            style={{ 
              width: '100%', 
              padding: '10px', 
              fontFamily: 'monospace',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          <button 
            style={{
              marginTop: '10px',
              padding: '8px 16px',
              backgroundColor: '#4285F4',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Save Resume
          </button>
        </>
      )}
    </div>
  );
};

export default ResumeUploader;
