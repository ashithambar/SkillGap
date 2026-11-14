
function Dashboard() {
  return (
    <div className="dashboard-page">
      <aside className="dashboard-sidebar">
        <a href="/" className="logo">
          Skill<span>Gap</span>
        </a>

        <nav className="dashboard-nav">
          <a href="/dashboard" className="active">Dashboard</a>
          <a href="#resume">Resume Analysis</a>
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
            <p className="dashboard-label">YOUR WORKSPACE</p>
            <h1>Dashboard</h1>
          </div>

          <div className="dashboard-user">
            <span className="user-avatar">U</span>
            <span>User</span>
          </div>
        </header>

        <section className="dashboard-welcome">
          <p>WELCOME TO SKILLGAP</p>
          <h2>Build your career with confidence.</h2>
          <p>
            Understand your skills, discover career opportunities,
            and create a learning path towards your goals.
          </p>
        </section>

        <section className="dashboard-section" id="resume">
          <h2>Get Started</h2>

          <div className="dashboard-empty">
            <h3>Your career analysis starts here.</h3>
            <p>
              Upload your resume to begin identifying your skills
              and discovering opportunities for growth.
            </p>
            <span className="coming-soon">
              Resume upload will be available in the next step.
            </span>
          </div>
        </section>

        <section className="dashboard-section">
          <h2>Recent Activity</h2>

          <div className="dashboard-empty">
            <h3>No activity yet</h3>
            <p>
              Your resume analyses and career recommendations
              will appear here.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
