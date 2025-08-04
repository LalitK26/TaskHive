// // import React, { useState, useRef, useEffect } from "react";
// // import axios from "axios";
// // import { Link, useNavigate } from "react-router-dom";
// // import { FaEye, FaEyeSlash } from "react-icons/fa";
// // import API_ENDPOINTS from "../services/API_ENDPOINTS";

// // const Register = () => {
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     username: "",
// //     email: "",
// //     phoneNo: "",
// //     address: "",
// //     gender: "Male",
// //     role: "USER", // Default role
// //     password: "",
// //     avatar: null,
// //   });
// //   const [message, setMessage] = useState("");
// //   const [alertType, setAlertType] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();
// //   const fileInputRef = useRef();

// //   useEffect(() => {
// //     localStorage.clear();
// //   }, []);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onload = (event) => {
// //         const imagePreview = document.getElementById("image-preview");
// //         imagePreview.src = event.target.result;
// //         imagePreview.style.display = "block";
// //       };
// //       reader.readAsDataURL(file);
// //       setFormData({ ...formData, avatar: file });
// //     }
// //   };

// //   const handleRegister = async (e) => {
// //     e.preventDefault();

// //     const { avatar, ...userDetails } = formData;

// //     if (!avatar) {
// //       setMessage("Please upload an avatar.");
// //       setAlertType("danger");
// //       return;
// //     }
// //     if (avatar.size > 2 * 1024 * 1024) {
// //       setMessage("File size exceeds 2MB.");
// //       setAlertType("danger");
// //       return;
// //     }
// //     if (!["image/jpeg", "image/png"].includes(avatar.type)) {
// //       setMessage("Invalid file type. Only JPEG and PNG are allowed.");
// //       setAlertType("danger");
// //       return;
// //     }

// //     const formPayload = new FormData();
// //     formPayload.append(
// //       "user",
// //       new Blob([JSON.stringify(userDetails)], { type: "application/json" })
// //     );
// //     formPayload.append("file", avatar);

// //     try {
// //       setLoading(true);
// //       const response = await axios.post(
// //         API_ENDPOINTS.AUTH.REGISTER,
// //         formPayload,
// //         {
// //           headers: { "Content-Type": "multipart/form-data" },
// //         }
// //       );

// //       setAlertType("success");
// //       setMessage(response.data.message);

// //       setTimeout(() => navigate("/login"), 2000);
// //     } catch (error) {
// //       const errorMessage =
// //         error.response?.data?.message ||
// //         "An error occurred during registration.";
// //       setAlertType("danger");
// //       setMessage(errorMessage);
// //     } finally {
// //       setTimeout(() => {
// //         setMessage("");
// //         setAlertType("");
// //       }, 5000);

// //       setFormData({
// //         fullName: "",
// //         username: "",
// //         email: "",
// //         phoneNo: "",
// //         address: "",
// //         gender: "Male",
// //         role: "USER",
// //         password: "",
// //         avatar: null,
// //       });
// //       fileInputRef.current.value = "";
// //       const imagePreview = document.getElementById("image-preview");
// //       imagePreview.src = "#";
// //       imagePreview.style.display = "none";
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div
// //       className="container col-lg-6 col-md-8 col-10 d-flex flex-column justify-content-center"
// //       style={{ marginTop: "100px", marginBottom: "70px" }}
// //     >
// //       <h2>Register</h2>
// //       <form onSubmit={handleRegister} className="card p-4 shadow mb-5">
// //         {[
// //           { label: "Full Name", name: "fullName", type: "text" },
// //           { label: "Username", name: "username", type: "text" },
// //           { label: "Email", name: "email", type: "email" },
// //           { label: "Phone No", name: "phoneNo", type: "tel" },
// //           { label: "Home Address", name: "address", type: "text" },
// //         ].map(({ label, name, type }) => (
// //           <div className="mb-3" key={name}>
// //             <label>{label}:</label>
// //             <input
// //               type={type}
// //               className="form-control"
// //               name={name}
// //               value={formData[name]}
// //               onChange={handleInputChange}
// //               required
// //               placeholder={`Enter your ${label.toLowerCase()}...`}
// //             />
// //           </div>
// //         ))}

// //         <div className="mb-3">
// //           <label>Gender:</label>
// //           <select
// //             className="form-select"
// //             name="gender"
// //             value={formData.gender}
// //             onChange={handleInputChange}
// //             required
// //           >
// //             <option value="Male">Male</option>
// //             <option value="Female">Female</option>
// //             <option value="Other">Other</option>
// //           </select>
// //         </div>

// //         <div className="mb-3">
// //           <label>Role:</label>
// //           <select
// //             className="form-select"
// //             name="role"
// //             value={formData.role}
// //             onChange={handleInputChange}
// //             required
// //           >
// //             <option value="USER">USER</option>
// //             <option value="ADMIN">ADMIN</option>
// //           </select>
// //         </div>

// //         <div className="mb-3">
// //           <label htmlFor="avatar-upload" className="custom-file-label">
// //             Upload Image
// //           </label>
// //           <input
// //             type="file"
// //             className="form-control"
// //             id="avatar-upload"
// //             accept="image/png, image/jpeg"
// //             onChange={handleImageChange}
// //             ref={fileInputRef}
// //             required
// //           />
// //           <img
// //             id="image-preview"
// //             src="#"
// //             alt="Avatar Preview"
// //             className="img-fluid mt-2"
// //             style={{
// //               maxWidth: "150px",
// //               display: "none",
// //               borderRadius: "4px",
// //               border: "1px solid #ddd",
// //             }}
// //           />
// //         </div>

// //         <div className="mb-3">
// //           <label>Password:</label>
// //           <div className="input-group">
// //             <input
// //               type={showPassword ? "text" : "password"}
// //               className="form-control"
// //               name="password"
// //               value={formData.password}
// //               onChange={handleInputChange}
// //               maxLength={8}
// //               minLength={4}
// //               required
// //               placeholder="Enter a password (4-8 characters)..."
// //             />
// //             <button
// //               type="button"
// //               className="btn btn-outline-secondary"
// //               onClick={() => setShowPassword(!showPassword)}
// //             >
// //               {showPassword ? <FaEyeSlash /> : <FaEye />}
// //             </button>
// //           </div>
// //         </div>

// //         <button type="submit" className="btn btn-primary" disabled={loading}>
// //           {loading ? "Submitting..." : "Register"}
// //         </button>

// //         {message && (
// //           <div className={`alert alert-${alertType} mt-3`} role="alert">
// //             {message}
// //           </div>
// //         )}

// //         <p className="mt-3">
// //           Already have an account?{" "}
// //           <Link to="/login" className="text-primary">
// //             Login
// //           </Link>
// //         </p>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Register;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "EMPLOYEE",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can handle API submission here
//     console.log("Form Data Submitted:", formData);
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
//       <div className="card p-4 shadow" style={{ width: "100%", maxWidth: "500px" }}>
//         <h3 className="text-center mb-4">Register</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">Full Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               name="name"
//               placeholder="Enter your full name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               name="password"
//               placeholder="Enter a password (4-8 characters)"
//               minLength="4"
//               maxLength="8"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="role" className="form-label">Role</label>
//             <select
//               className="form-select"
//               id="role"
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               required
//             >
//               <option value="EMPLOYEE">EMPLOYEE</option>
//               <option value="ADMIN">ADMIN</option>
//             </select>
//           </div>

//           <button type="submit" className="btn btn-primary w-100">Register</button>
//         </form>

//         <p className="text-center mt-3">
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "ADMIN", // default role
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/signup", formData);
      alert("Registration successful!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Registration failed.");
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="formRole" className="mb-3">
          <Form.Label>Role</Form.Label>
          <Form.Select name="role" value={formData.role} onChange={handleChange} required>
            <option value="ADMIN">Admin</option>
            <option value="EMPLOYEE">Employee</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
