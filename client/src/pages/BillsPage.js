import React, { useEffect, useState } from "react";
import axios from "axios";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch } from "react-redux";
import { EyeOutlined } from "@ant-design/icons";
import { Button, Table, Modal, Form, Input, Select, message } from "antd";
const BillsPage = () => {
  const dispatch = useDispatch();
  const [billsData, setBillsData] = useState([]);
  const [popupModal, setPopupModal] = useState(false);
  const [selectedBills,setSelectedBills] =useState(null)

  const getAllBills = async () => {
    try {
      dispatch({
        type: "SHOW_LOADING",
      });
      const { data } = await axios.get(
        "http://localhost:8080/api/bills/get-bills"
      );
      setBillsData(data);
      dispatch({
        type: "HIDE_LOADING",
      });
    } catch (error) {
      dispatch({
        type: "HIDE_LOADING",
      });
      console.log(error);
      
    }
  };
  useEffect(() => {
    getAllBills();
  }, []);
  const columns = [
    { title: "ID", dataIndex: "_id" },
    {
      title: "Customer Name",
      dataIndex: "customerName",
    },
    { title: "Contact No", dataIndex: "customerNumber" },
    { title: "sumTotal", dataIndex: "sumTotal" },
    { title: "Total Amount", dataIndex: "totalAmount" },
    { title: "Tax", dataIndex: "tax" },
    {
      title: "Actions",
      dataIndex: "_id",
      render: (id, record) => (
        <div>
          <EyeOutlined style={{cursor:'pointer'}}
            onClick={()=>{
              setSelectedBills(record);
              setPopupModal(true);
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <DefaultLayout>
      <div className="d-flex justify-content-between">
        <h1>Invoice List</h1>
      </div>
      <Table columns={columns} dataSource={billsData} bordered />
      {popupModal && (
        <Modal
          title="Invoice Details"
          visible={popupModal}
          onCancel={() => {
            
            setPopupModal(false);
          }}
          footer={false}
        ></Modal>
      )}
    </DefaultLayout>
  );
};

export default BillsPage;
