import { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  //usestate hook to check active button
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="main-container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => {
              setIsLogin(true);
            }}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => {
              setIsLogin(false);
            }}
          >
            Signup
          </button>
        </div>

        {/* Conditional ternery operator to check is login true then show login form */}
        {isLogin ? (
          <>
            <div className="form">
              <h2>Login Form</h2>
              <input type="email" placeholder="email" />
              <input type="password" placeholder="password" />
              <a href="#">Forgot Password</a>
              <button>Login</button>
              <p>
                Not a member?{" "}
                <a
                  href="#"
                  onClick={() => {
                    setIsLogin(false);
                  }}
                >
                  Signup Now
                </a>{" "}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="form">
              <h2>Signup Now</h2>
              <input type="email" placeholder="email" />
              <input type="password" placeholder="password" />
              <input type="password" placeholder="Confirm Password" />
              <p>
                Already have an account{" "}
                <a
                  href="#"
                  onClick={() => {
                    setIsLogin(true);
                  }}
                >
                  Login Now
                </a>{" "}
              </p>
              <button>Signup</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
