import React from 'react';
import AccordGoogle from "../accordGoogle";
import "./Login.css";

const LoginForm = () => {
  return (
    <div className="bg">
      <div className="login-box">
        <p>Login</p>
        <form>
          <div className="user-box">
            <input required={true} name="email" type="email" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input required={true} name="password" type="password" />
            <label>Password</label>
          </div>
          <center>
          <a href="#" style={{alignItems:"center"}}>Login</a>
          </center>
          <div className="mt-2">
                      <h3 className="text-white text-md text-center py-4">
                        Or
                      </h3>
                      <h2 className="text-white text-sm px-4 py-3 text-center">
                        Don't have an account?{" "}
                        <span className="text-blue-700 inline-block">
                          Register Now
                        </span>
                      </h2>
                    </div>
                    <AccordGoogle />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
