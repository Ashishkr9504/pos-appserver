import React, { useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom"; // Changed useNavigate to useHistory
import { useDispatch } from "react-redux";
import axios from "axios";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (value) => {
    try {
      dispatch({ type: "SHOW_LOADING" });
      await axios.post("http://localhost:8080/api/users/register", value);
      message.success("Registered successfully!");
      navigate("/login");
      dispatch({ type: "HIDE_LOADING" });
    } catch (error) {
      dispatch({ type: "HIDE_LOADING" });
      message.error("Something went wrong");
      console.log(error);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      localStorage.getItem("auth");
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="register">
      <div className="register-form">
        <h3 className="login-text">Register Page</h3>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter the name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="userId"
            label="User ID"
            rules={[{ required: true, message: "Please enter the user ID" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please enter the password" }]}
          >
            <Input type="password" />
          </Form.Item>
          <Form.Item
            name="contact"
            label="Contact Number"
            rules={[
              { required: true, message: "Please enter your contact number" },
            ]}
          >
            <Input />
          </Form.Item>

          <div className="d-flex justify-content-between">
            <p>
              Already registered? <Link to="/login">Login Here</Link>
            </p>
          </div>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
