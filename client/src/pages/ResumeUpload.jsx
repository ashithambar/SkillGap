
import { useState } from 'react'
function formatFileSize(bytes) {
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}
function ResumeUpload() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [error, setError] = useState('')
  const [isDragging, setIsDragging] = useState(false)
  const [notice, setNotice] = useState('')
function handleFile(file) {
  if (!file) return

  const isPDF =
    file.type === 'application/pdf' ||
    file.name.toLowerCase().endsWith('.pdf')

  if (!isPDF) {
    setError('Please select a PDF file.')
    setSelectedFile(null)
    return
  }

  const maxSize = 5 * 1024 * 1024

  if (file.size > maxSize) {
    setError('File size must be 5 MB or less.')
    setSelectedFile(null)
    return
  }

 setError('')
setNotice('')
setSelectedFile(file)
}


  function handleDrop(event) {
    event.preventDefault()
    setIsDragging(false)

    const file = event.dataTransfer.files[0]
    handleFile(file)
  }

 function handleRemove() {
  setSelectedFile(null)
  setError('')

  const fileInput = document.getElementById('resume')

  if (fileInput) {
    fileInput.value = ''
  }
}

  return (
    <div className="dashboard-page">
      <aside className="dashboard-sidebar">
        <a href="/" className="logo">
          Skill<span>Gap</span>
        </a>

        <nav className="dashboard-nav">
          <a href="/dashboard">Dashboard</a>
          <a href="/resume/upload" className="active">
            Resume Analysis
          </a>
          <a href="#skills">Skill Analysis</a>
          <a href="#career">Career Roles</a>
          <a href="#learning">Learning Recommendations</a>
          <a href="#roadmap">Career Roadmap</a>
          <a href="#reports">Reports</a>
        </nav>

        <div className="sidebar-bottom">
          <a href="#profile">My Profile</a>
          <a href="#settings">Settings</a>
          <a href="/">Logout</a>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <p className="dashboard-label">CAREER DEVELOPMENT</p>
            <h1>Resume Analysis</h1>
          </div>
        </header>

        <section className="dashboard-welcome">
          <p>START YOUR JOURNEY</p>
          <h2>Let's understand your skills.</h2>
          <p>
            Upload your resume to identify your skills,
            understand your strengths and discover
            opportunities for improvement.
          </p>
        </section>

        <section className="dashboard-section">
          <h2>Upload Your Resume</h2>

          <div className="dashboard-empty">
            <h3>Choose your resume</h3>
            <p>
              Drag and drop your PDF resume here,
              or browse your files.
            </p>

            <div
              className={`resume-upload-area ${isDragging ? 'dragging' : ''}`}
              onDragOver={(event) => {
                event.preventDefault()
                setIsDragging(true)
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
            >
              <div className="upload-icon">↑</div>

              <p>Drag and drop your resume here</p>
              <span>PDF files only</span>

              <label htmlFor="resume" className="upload-button">
                Browse Files
              </label>

              <input
                type="file"
                id="resume"
                accept=".pdf,application/pdf"
                onChange={(event) =>
                  handleFile(event.target.files[0])
                }
              />
            </div>

{error && <p className="upload-error">{error}</p>}

{selectedFile && (
  <div className="selected-file">
    <div className="file-info">
      <span className="file-icon">PDF</span>

      <div>
        <strong>{selectedFile.name}</strong>
        <p>{formatFileSize(selectedFile.size)}</p>
      </div>
    </div>

    <button type="button" onClick={handleRemove}>
      Remove
    </button>
  </div>
)}

<button
  type="button"
  className="analyze-button"
  disabled={!selectedFile}
  onClick={() => {
    setError('')
    setNotice('Resume analysis will be available after backend integration.')
  }}
>
  Analyze Resume
</button>

{notice && <p className="upload-notice">{notice}</p>}

          </div>
        </section>
      </main>
    </div>
  )
}

export default ResumeUpload
