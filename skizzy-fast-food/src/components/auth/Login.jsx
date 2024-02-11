import { Link, useNavigate } from "react-router-dom"

function Login() {

    const handleClick = (e) => {
        e.preventDefault();

        navigate("/")
    }

  return (
    <section className="login-section py-5">
        <div className="login-page">
        <form action="/login" method='post' className="formSection mx-auto my-5">

            <h2 className="text-center">Login</h2>
            <div className="mb-4 mt-5">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input 
                type="email" 
                className="form-control" 
                aria-describedby="emailHelp" 
                />
            </div>
            <div className="mb-4">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input 
                type="password" 
                className="form-control"
                />
                <div id="emailHelp" className="form-text">Forget password?</div>
            </div>
            
            <button type="submit" className="login-btn">Login</button>
            <p className="mt-3 text-center">Not a member? 
                <Link to="/signup" className="form-link mx-1">Sign up</Link>
            </p>
        </form>
        
    </div>
    </section>
  )
}

export default Login