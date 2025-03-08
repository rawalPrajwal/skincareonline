import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import styles from "./register.module.css";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className={styles.container}>
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* First Name & Last Name */}
        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Email & Mobile */}
        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Mobile</label>
            <input
              type="tel"
              name="mobile"
              placeholder="Enter your mobile number"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Password Field (Full Width) */}
        <div className={`${styles.inputContainer} ${styles.fullWidth}`}>
          <label>Password</label>
          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className={styles.togglePassword}
              onClick={togglePasswordVisibility}
            />
          </div>
        </div>

        {/* Confirm Password Field (Full Width) */}
        <div className={`${styles.inputContainer} ${styles.fullWidth}`}>
          <label>Confirm Password</label>
          <div className={styles.passwordContainer}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm your password"
              onChange={handleChange}
              required
            />
            <FontAwesomeIcon
              icon={showConfirmPassword ? faEyeSlash : faEye}
              className={styles.togglePassword}
              onClick={toggleConfirmPasswordVisibility}
            />
          </div>
        </div>

        {/* Sign Up Button */}
        <button type="submit" className={styles.submitButton}>
          Sign up
        </button>
      </form>

      <p>
        Already have an account?{" "}
        <Link to="/login" className={styles.loginLink}>
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Register;
