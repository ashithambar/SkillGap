
function Register() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <a href="/" className="logo">
          Skill<span>Gap</span>
        </a>

        <h1>Create Account</h1>
        <p className="auth-description">
          Start your journey towards a better career.
        </p>

        <form onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            required
          />

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
            placeholder="Create a password"
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            required
          />

          <button type="submit" className="auth-button">
            Create Account
          </button>
        </form>

        <p className="auth-switch">
          Already have an account?
          <a href="/login"> Login</a>
        </p>

        <p className="auth-note">
          Account registration will be connected to the backend later.
        </p>
      </div>
    </main>
  )
}

export default Register
