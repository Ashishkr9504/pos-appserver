import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch } from "react-redux";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Table, Modal, Form, Input, Select, message } from "antd";
const ItemPage = () => {
  const dispatch = useDispatch();
  const [itemsData, setItemsData] = useState([]);
  const [popupModal, setPopupModal] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const getAllItems = useCallback(async () => {
    try {
      dispatch({
        type: "SHOW_LOADING",
      });
      const { data } = await axios.get(
        "http://localhost:8080/api/items/get-item"
      );
      setItemsData(data);
      dispatch({
        type: "HIDE_LOADING",
      });
    } catch (error) {
      dispatch({
        type: "HIDE_LOADING",
      });
      console.log(error);
      console.log("An error occurred while fetching items.");
    }
  },[dispatch]);
  useEffect(() => {
    getAllItems();
  }, [getAllItems]);

  const handleDelete = async (record) => {
    try {
      dispatch({
        type: "SHOW_LOADING",
      });
      await axios.post("http://localhost:8080/api/items/delete-item", {
        itemId: record._id,
      });
      message.success("Item deleted successfully");
      getAllItems();
      setPopupModal(false);
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
      title: "Actions",
      dataIndex: "_id",
      render: (id, record) => (
        <div>
          <DeleteOutlined
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleDelete(record);
            }}
          />
          <EditOutlined
            style={{ cursor: "pointer" }}
            onClick={() => {
              setEditItem(record);
              setPopupModal(true);
            }}
          />
        </div>
      ),
    },
  ];
  const handleSubmit = async (value) => {
    if (editItem === null) {
      try {
        dispatch({
          type: "SHOW_LOADING",
        });
        await axios.post("http://localhost:8080/api/items/add-item", value);
        message.success("Item added successfully");
        getAllItems();
        setPopupModal(false);
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
    } else {
      try {
        dispatch({
          type: "SHOW_LOADING",
        });
        await axios.put("http://localhost:8080/api/items/edit-item", {
          ...value,
          itemId: editItem._id,
        });
        message.success("Item updated successfully");
        getAllItems();
        setPopupModal(false);
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
    }
  };
  return (
    <DefaultLayout>
      <div className="d-flex justify-content-between">
        <h1>Item List</h1>

        <Button type="primary" onClick={() => setPopupModal(true)}>
          Add Item
        </Button>
      </div>
      <Table columns={columns} dataSource={itemsData} bordered />
      {popupModal && (
        <Modal
          title={`${editItem !== null ? "Edit Item" : "Add New Item"}`}
          visible={popupModal}
          onCancel={() => {
            setEditItem(null);
            setPopupModal(false);
          }}
          footer={false}
        >
          <Form
            layout="vertical"
            initialValues={editItem}
            onFinish={handleSubmit}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please enter the name" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="price"
              label="Price"
              rules={[{ required: true, message: "Please enter the price" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="image"
              label="Image URL"
              rules={[
                { required: true, message: "Please enter the image URL" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="category"
              label="Category"
              rules={[
                { required: true, message: "Please select the category" },
              ]}
            >
              <Select>
                <Select.Option value="noodles">Noodles</Select.Option>
                <Select.Option value="drinks">Drinks</Select.Option>
                <Select.Option value="rice">Rice</Select.Option>
              </Select>
            </Form.Item>
            <div className="d-flex justify-content-end">
              <Button type="primary" htmlType="submit">
                SAVE
              </Button>
            </div>
          </Form>
        </Modal>
      )}
    </DefaultLayout>
  );
};

export default ItemPage;
