import React, { useState } from "react";
import { Link, Router } from "react-router-dom"; // ✅ Import Link
import styles from "../auth/login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (

    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />

          <label className={styles.label}>Password</label>
          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              required
            />
            <button
              type="button"
              className={styles.eyeButton}
              onClick={() => setShowPassword(!showPassword)}
            ></button>
          </div>

          <button type="submit" className={styles.button}>
            Sign in
          </button>
        </form>
        <p className={styles.signupText}>
          Don't have an account?{" "}
          <Link to="/register" className={styles.signupLink}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
