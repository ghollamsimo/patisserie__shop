import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { LoadingButton } from "@mui/lab";
import { Button } from "rsuite";
// Default CSS
import "rsuite/dist/rsuite.min.css";

const Signup = () => {
  const [password, setPassword] = useState(false)
  return (
    <div className="Auth-form-container">
    <form className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign In</h3>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <Link to="/">
        <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              
            >
              Submit
            </LoadingButton>
            </Link>
        </div>
        <p className="forgot-password text-right mt-2">
          Forgot<Link to="/resetpassword"> password?</Link>
        </p>
      </div>
    </form>
  </div>
  )
}

export default Signup