
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", padding: "1rem", backgroundColor: "#f8f9fa" }}
    >
      <div
        className="text-center bg-white p-4 rounded shadow"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <h3>{getGreeting()}!</h3>
        <h1 className="mt-3">Welcome to TaskHive-<br />Task Management System</h1>
        <p className="mt-3">With us, your tasks are safe.</p>
        <div className="mt-4 d-flex justify-content-center flex-wrap">
          <Link to="/register" className="btn btn-primary me-2 mb-2">
            <i className="bi bi-person-plus"></i> Register
          </Link>
          <Link to="/login" className="btn btn-secondary mb-2">
            <i className="bi bi-box-arrow-in-right"></i> Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

