import { Link, useNavigate } from "react-router-dom"

function Login() {

    const handleClick = (e) => {
        e.preventDefault();

        navigate("/")
    }

  return (
    <div className='container-fluid'>
        <h2>Login</h2>
        <form action="/login" method='post' className='container'>
            <label htmlFor="email" className='form-label'>Email address</label>
            <input 
            type="email"
            className='form-control'
            placeholder='name@example.com'
            
            />
            <input 
            type="password"
            className='form-control'
            placeholder="Password" 
            />
            <Link to="/">
                    <button 
                    className="login-button" 
                    onClick={handleClick} 
                    type="submit">Sign in</button>
            </Link>
        </form>
        <p>Not a member? 
            {/* Change to Link element */}
                <a href="#">Register</a>
            </p>
    </div>
  )
}

export default Login