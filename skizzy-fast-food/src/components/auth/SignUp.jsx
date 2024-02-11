import { Link } from "react-router-dom"

function SignUp() {
  return (
    <section className="login-section py-4">
        <div className="login-page">
        <form action="/login" method='post' className="formSection mx-auto my-5">

            <h2 className="text-center">Sign Up</h2>
            <div className="mb-3 mt-5">
                <label htmlFor="fName" className="form-label">First Name</label>
                <input 
                type="text" 
                className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="lName" className="form-label">Last Name</label>
                <input 
                type="text" 
                className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input 
                type="email" 
                className="form-control"
                aria-describedby="emailHelp" 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                type="password"
                name="password1"
                className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input 
                type="password" 
                name="cPassword"
                className="form-control"
                />
            </div>
            
            <button type="submit" className="login-btn">Sign Up</button>
            <p className="mt-3 text-center">Already a member? 
                <Link to="/login" className="form-link mx-1">Login</Link>
            </p>
        </form>
        
    </div>
    </section>
  )
}
export default SignUp