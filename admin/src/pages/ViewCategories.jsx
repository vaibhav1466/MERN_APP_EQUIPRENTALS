import React, { useEffect, useState } from "react";
import Sidebar from "../common/sidebar";
import Navbar from "../common/navbar";
import axios from "axios";
import {
  Modal,
  Button,
  Table,
  Space,
  message,
  Input,
  Form,
  Popconfirm,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

function ViewCategories() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/getcategories");
      setData(response.data.categories.reverse());
      setLoading(false);
    } catch (error) {
      console.error(error);
      message.error("Failed to fetch categories");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: "Category Name",
      dataIndex: "cat_name",
      key: "cat_name",
      sorter: (a, b) => a.cat_name.localeCompare(b.cat_name),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          className={`badge ${status === "0" ? "bg-success" : "bg-danger"}`}
        >
          {status === "0" ? "Active" : "Inactive"}
        </span>
      ),
      filters: [
        { text: "Active", value: "0" },
        { text: "Inactive", value: "1" },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
            size="small"
          />
          <Popconfirm
            title="Are you sure to delete this category?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
            icon={<ExclamationCircleOutlined style={{ color: "red" }} />}
          >
            <Button type="danger" icon={<DeleteOutlined />} size="small" />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const handleAdd = () => {
    form.resetFields();
    setEditingCategory(null);
    setIsModalVisible(true);
  };

  const handleEdit = (record) => {
    form.setFieldsValue({
      cat_name: record.cat_name,
    });
    setEditingCategory(record);
    setIsModalVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.post(`http://localhost:8000/admin/deletecategory`, {
        catId: id,
      });
      message.success("Category deleted successfully");
      fetchData();
    } catch (error) {
      console.error(error);
      message.error("Failed to delete category");
    }
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      if (editingCategory) {
        await axios.post("http://localhost:8000/admin/editcategory", {
          catId: editingCategory._id,
          ...values,
        });
        message.success("Category updated successfully");
      } else {
        await axios.post("http://localhost:8000/admin/addCategory", values);
        message.success("Category added successfully");
      }
      setIsModalVisible(false);
      fetchData();
    } catch (error) {
      console.error(error);
      message.error(error.response?.data?.message || "Operation failed");
    }
  };

  const filteredData = data.filter((item) =>
    item.cat_name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />
          <div className="menu-mobile-toggler d-xl-none rounded-1">
            <a
              href="/#"
              className="layout-menu-toggle menu-link text-large text-bg-secondary p-2 rounded-1"
            >
              <i className="bx bx-menu icon-base" />
              <i className="bx bx-chevron-right icon-base" />
            </a>
          </div>
          <div className="layout-page">
            <Navbar />
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="card">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Categories</h5>
                    <div className="d-flex">
                      <Input
                        placeholder="Search categories"
                        prefix={<SearchOutlined />}
                        onChange={(e) => setSearchText(e.target.value)}
                        style={{ width: 200, marginRight: 16 }}
                      />
                      <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        onClick={handleAdd}
                      >
                        Add Category
                      </Button>
                    </div>
                  </div>
                  <div className="card-body">
                    <Table
                      columns={columns}
                      dataSource={filteredData}
                      rowKey="_id"
                      loading={loading}
                      pagination={{ pageSize: 10 }}
                      scroll={{ x: true }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title={editingCategory ? "Edit Category" : "Add New Category"}
        visible={isModalVisible}
        onOk={handleSubmit}
        onCancel={() => setIsModalVisible(false)}
        okText={editingCategory ? "Update" : "Add"}
        confirmLoading={loading}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="cat_name"
            label="Category Name"
            rules={[
              { required: true, message: "Please input category name!" },
              {
                min: 3,
                message: "Category name must be at least 3 characters",
              },
            ]}
          >
            <Input placeholder="Enter category name" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default ViewCategories;
