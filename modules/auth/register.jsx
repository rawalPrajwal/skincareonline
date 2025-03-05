import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className={styles.container}>
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.row}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Enter your mobile number"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.row}>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            onChange={handleChange}
            required
          />
        </div>
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
