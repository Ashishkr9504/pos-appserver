import React, { useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (value) => {
    try {
      dispatch({
        type: "SHOW_LOADING",
      });
      const res = await axios.post(
        "http://localhost:8080/api/users/login",
        value
      );
      message.success("login successfully");
      localStorage.setItem("auth", JSON.stringify(res.data));
      navigate("/");
      dispatch({
        type: "HIDE_LOADING",
      });
    } catch (error) {
      dispatch({
        type: "HIDE_LOADING",
      });
      message.error("something went wrong");
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
        <h3 className="login-text">Login Page</h3>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="userId"
            label="User ID"
            rules={[{ required: true, message: "Please enter the price" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password">
            <Input type="password" />
          </Form.Item>
          {/* <Form.Item
              name="contact no"
              label="contact no"
              rules={[{ required: true, message: "Please enter the contact no" }]}
            ><Input/> </Form.Item> */}

          <div className="d-flex justify-content-between">
            <p>
              user doesnot exist Please
              <Link to="/register"> Register here </Link>
            </p>
          </div>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
