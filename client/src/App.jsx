
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
function LandingPage() {
  return (
    <main>
      {/* Navigation */}
      <header className="navbar">
        <a href="/" className="logo">
          Skill<span>Gap</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
        </nav>

        <div className="nav-actions">
          <a href="/login" className="login-link">Login</a>
          <a href="/register" className="nav-button">Get Started</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <span className="hero-label">
            YOUR CAREER GROWTH STARTS HERE
          </span>

          <h1>
            Find Your Skill Gaps.
            <span> Build Your Career.</span>
          </h1>

          <p>
            Discover the skills you already have, identify what
            you're missing, and get a personalized learning path
            to move closer to your dream career.
          </p>

          <div className="hero-buttons">
            <a href="/register" className="primary-button">
              Analyze My Resume
              <span>→</span>
            </a>

            <a href="#features" className="secondary-button">
              Explore Features
            </a>
          </div>

          <div className="hero-note">
            Turn your skills into your next opportunity.
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card">
            <div className="visual-card-header">
              <div>
                <span className="visual-eyebrow">CAREER OVERVIEW</span>
                <h3>Your Skill Profile</h3>
              </div>
              <span className="profile-icon">SG</span>
            </div>

            <div className="skill-group">
              <div className="skill-heading">
                <span>Python</span>
                <span>Strong foundation</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill python-fill"></div>
              </div>
            </div>

            <div className="skill-group">
              <div className="skill-heading">
                <span>Machine Learning</span>
                <span>Developing</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill ml-fill"></div>
              </div>
            </div>

            <div className="skill-group">
              <div className="skill-heading">
                <span>Data Analysis</span>
                <span>Learning</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill data-fill"></div>
              </div>
            </div>

            <div className="visual-divider"></div>

            <div className="visual-bottom">
              <div>
                <span className="visual-eyebrow">YOUR NEXT STEP</span>
                <h4>Build your learning path</h4>
              </div>
              <span className="next-arrow">↗</span>
            </div>
          </div>

          <div className="visual-tag">
            <span className="tag-dot"></span>
            Skills to opportunities
          </div>
        </div>
      </section>
            {/* Features Section */}
      <section className="features-section" id="features">
        <div className="section-heading">
          <span className="hero-label">WHAT SKILLGAP OFFERS</span>
          <h2>Everything You Need to Grow Your Career</h2>
          <p>
            Understand your skills, discover opportunities, and
            create a clear path toward your career goals.
          </p>
        </div>

        <div className="features-grid">
          <article className="feature-card">
            <span className="feature-number">01</span>
            <h3>Resume Analysis</h3>
            <p>
              Analyze your resume to identify your existing skills,
              strengths, and areas for improvement.
            </p>
          </article>

          <article className="feature-card">
            <span className="feature-number">02</span>
            <h3>Skill Gap Identification</h3>
            <p>
              Compare your current skills with the skills required
              for your target career.
            </p>
          </article>

          <article className="feature-card">
            <span className="feature-number">03</span>
            <h3>Career Recommendations</h3>
            <p>
              Explore career roles that match your skills and
              professional interests.
            </p>
          </article>

          <article className="feature-card">
            <span className="feature-number">04</span>
            <h3>Learning Roadmap</h3>
            <p>
              Discover useful learning resources and follow a
              structured path to develop new skills.
            </p>
          </article>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-section" id="how-it-works">
        <div className="section-heading">
          <span className="hero-label">HOW IT WORKS</span>
          <h2>Your Career Growth, Made Simple</h2>
          <p>
            Follow four simple steps to understand your skills
            and plan your next career move.
          </p>
        </div>

        <div className="steps-container">
          <article className="step-card">
            <span className="step-number">01</span>
            <h3>Upload Your Resume</h3>
            <p>
              Upload your resume so SkillGap can understand
              your education, experience, and existing skills.
            </p>
          </article>

          <article className="step-card">
            <span className="step-number">02</span>
            <h3>Analyze Your Skills</h3>
            <p>
              Identify your current skills and organize them
              into relevant categories.
            </p>
          </article>

          <article className="step-card">
            <span className="step-number">03</span>
            <h3>Discover Skill Gaps</h3>
            <p>
              Compare your skills with career requirements
              and identify areas to improve.
            </p>
          </article>

          <article className="step-card">
            <span className="step-number">04</span>
            <h3>Follow Your Roadmap</h3>
            <p>
              Explore learning recommendations and work
              towards your career goals.
            </p>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="/" className="logo">
              Skill<span>Gap</span>
            </a>
            <p>
              Understand your skills. Discover your gaps.
              Build your career.
            </p>
          </div>

          <div className="footer-links">
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
          </div>

          <div className="footer-links">
            <h4>Get Started</h4>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 SkillGap. All rights reserved.</p>
          <p>Built to support your career growth.</p>
        </div>
      </footer>

    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
