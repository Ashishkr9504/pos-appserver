import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  DeleteOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { Button, Modal, Table, Form, Input, Select,message } from "antd";

const CartPage = () => {
  const [sumTotal, setSumTotal] = useState(0);
  const [billPopup, setBillPopup] = useState(false);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const { cartItems } = useSelector((state) => state.rootReducer);
  const handleIncrement = (record) => {
    dispatch({
      type: "UPDATE_CART",
      payload: { ...record, quantity: record.quantity + 1 },
    });
  };
  const handleDecrement = (record) => {
    if (record.quantity !== 1) {
      dispatch({
        type: "UPDATE_CART",
        payload: { ...record, quantity: record.quantity - 1 },
      });
    }
  };

  const columns = [
    { title: "Name", dataIndex: "name" },
    {
      title: "Image",
      dataIndex: "image",
      render: (image, record) => (
        <img src={image} alt={record.name} height="60" width="60" />
      ),
    },
    { title: "Price", dataIndex: "price" },
    {
      title: "Quantity",
      dataIndex: "_id",
      render: (id, record) => (
        <div>
          <PlusCircleOutlined
            className="mx-2"
            style={{ cursor: "pointer" }}
            onClick={() => handleIncrement(record)}
          />
          <b>{record.quantity}</b>
          <MinusCircleOutlined
            className="mx-2"
            style={{ cursor: "pointer" }}
            onClick={() => handleDecrement(record)}
          />
        </div>
      ),
    },
    {
      title: "Actions",
      dataIndex: "_id",
      render: (id, record) => (
        <DeleteOutlined
          style={{ cursor: "pointer" }}
          onClick={() =>
            dispatch({
              type: "DELETE_FROM_CART",
              payload: record,
            })
          }
        />
      ),
    },
  ];
  useEffect(() => {
    let temp = 0;
    cartItems.forEach((item) => (temp = temp + item.price * item.quantity));
    setSumTotal(temp);
  }, [cartItems]);
  const handleSubmit = async(value) => {
    try{
      const newObject={
        ...value,
        cartItems,
        sumTotal,
        tax:Number(((sumTotal / 100) * 10).toFixed(2)), 
        totalAmount:Number(Number(sumTotal)+Number(((sumTotal/100)* 10).toFixed(2))),
        userId:JSON.parse(localStorage.getItem("auth"))._id,
      };
      await axios.post('http://localhost:8080/api/bills/add-bills',newObject)
      message.success('Bill generated')
      navigate('/bills')
    }catch(error){
      message.error('Something went wrong')
      console.log(error)
    }

  };
  return (
    <DefaultLayout>
      <h1> Cart Page</h1>
      <Table columns={columns} dataSource={cartItems} bordered />
      <div className="d-flex flex-column align-items-end">
        <hr />
        <h4>
          {" "}
          TOTAL : ₹ <b> {sumTotal}</b> /-{" "}
        </h4>
        <Button type="primary" onClick={() => setBillPopup(true)}>
          Generate Invoice
        </Button>
        <Modal
          title="Generate Invoice"
          visible={billPopup}
          onCancel={() => setBillPopup(false)}
          footer={false}
        >
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              name="customerName"
              label="Customer Name"
              rules={[{ required: true, message: "Please enter the name" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="customerNumber"
              label="Contact Number"
              rules={[{ required: true, message: "Please enter the price" }]}
            >
              <Input />
            </Form.Item>
            
            <Form.Item
              name="paymentMode"
              label="Payment Method"
              rules={[
                { required: true, message: "Please select the category" },
              ]}
            >
              <Select>
                <Select.Option value="Cash">Cash</Select.Option>
                <Select.Option value="Card">Card</Select.Option>
              </Select>
            </Form.Item>
            <div className=" bill item">
              <h5>
                sumTotal :<b>{sumTotal}</b>
              </h5>
              <h4>
                TAX
                <b> {((sumTotal / 100) * 10).toFixed(2)}</b>
              </h4>
              <h3>
              GRAND TOTAL -{" "}
              <b>
              {Number(sumTotal)+Number(((sumTotal/100)* 10).toFixed(2))}
              </b>
              </h3>
            </div>
            <div className="d-flex justify-content-end">
              <Button type="primary" htmlType="submit">
                Generate Bill
              </Button>
            </div>
          </Form>
        </Modal>
      </div>
    </DefaultLayout>
  );
};

export default CartPage;
