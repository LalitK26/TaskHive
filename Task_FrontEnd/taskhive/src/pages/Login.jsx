// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Form, Card, Container } from 'react-bootstrap';

// function Login() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ 
//       ...formData, 
//       [e.target.name]: e.target.value 
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Login Data:', formData);
//     // Send login request here
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center vh-100">
//       <Card style={{ width: '400px' }} className="shadow p-4">
//         <h3 className="mb-3 text-center">Login</h3>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3" controlId="email">
//             <Form.Label>Email:</Form.Label>
//             <Form.Control 
//               type="email" 
//               placeholder="Enter your email.." 
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required 
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="password">
//             <Form.Label>Password:</Form.Label>
//             <div className="d-flex">
//               <Form.Control 
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="Enter your password..." 
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required 
//               />
//               <Button
//                 variant="light"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="ms-2"
//               >
//                 <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
//               </Button>
//             </div>
//           </Form.Group>

//           <Button variant="primary" type="submit" className="w-100 mt-2">
//             Login
//           </Button>
//         </Form>

//         <div className="mt-3 text-center">
//           <p>
//             No account yet? <Link to="/register">Register</Link>
//           </p>
//           <p>
//             <Link to="/forgot-password">Forgot Password?</Link>
//           </p>
//         </div>
//       </Card>
//     </Container>
//   );
// }

// export default Login;


import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", credentials);
      alert("Login successful!");
      console.log(res.data);
      localStorage.setItem("token", res.data.token); // optional: store token
    } catch (err) {
      console.error(err);
      alert("Login failed. Please check credentials.");
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={credentials.email} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={credentials.password} onChange={handleChange} required />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
