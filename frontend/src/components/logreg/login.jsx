import React from 'react';
import "./login.css";

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
          <a href="#" style={{alignItems:"center"}}>Submit</a>
          </center>
          <center>
          <p style={{ fontSize: "10px", display: "inline-block", marginRight: "10px" }}>belum memiliki akun</p>
          <span style={{ fontSize: "10px", display: "inline-block", marginLeft: "10px" }}>Buat akun</span>
          </center>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
