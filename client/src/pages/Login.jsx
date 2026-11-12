
function Login() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <a href="/" className="logo">
          Skill<span>Gap</span>
        </a>

        <h1>Welcome Back!</h1>
        <p className="auth-description">
          Login to continue your career growth journey.
        </p>

        <form onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit" className="auth-button">
            Login
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account?
          <a href="/register"> Create Account</a>
        </p>

        <p className="auth-note">
          Authentication will be connected to the backend later.
        </p>
      </div>
    </main>
  )
}

export default Login
