import { useEffect, useState } from "react";
import Footer from "../common/footer";
import Navbar from "../common/navbar";
import Sidebar from "../common/sidebar";
import axios from "axios";

export default function Managebooking() {
  const [dataItems, setDataItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const filteredData = dataItems.filter(
    (item) =>
      item.productName.toLowerCase().includes(search.toLowerCase()) ||
      item.productPrice
        .toString()
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.vendorName.toLowerCase().includes(search.toLowerCase()) ||
      item.vendorPhone.toLowerCase().includes(search.toLowerCase()) ||
      item.userName.toLowerCase().includes(search.toLowerCase()) ||
      item.userPhone.toLowerCase().includes(search.toLowerCase()) ||
      new Date(item.booking_details.start_date)
        .toLocaleDateString()
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      new Date(item.booking_details.end_date)
        .toLocaleDateString()
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.booking_details.payment_mode
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/admin/getAllBookings"
      );
      const responseData = response.data.data || [];
      setDataItems(responseData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="layout-wrapper layout-content-navbar  ">
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
                  <div className="card-datatable text-nowrap">
                    <div
                      id="DataTables_Table_0_wrapper"
                      className="dt-container dt-bootstrap5 dt-empty-footer"
                    >
                      <div className="card-header pb-3">
                        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
                          <h5 className="card-title mb-2 mb-md-0 text-md-start">
                            Bookings
                          </h5>
                          <div className="dt-search d-flex align-items-center">
                            <label htmlFor="dt-search-0" className="mb-0 me-2">
                              Search:
                            </label>
                            <input
                              type="search"
                              className="form-control"
                              id="dt-search-0"
                              aria-controls="DataTables_Table_0"
                              placeholder="Search..."
                              value={search}
                              onChange={(e) => setSearch(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row m-3 my-0 justify-content-between">
                        <div className="d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto mt-0"></div>
                      </div>
                      <div className="justify-content-between dt-layout-table">
                        <div className="d-md-flex justify-content-between align-items-center col-12 dt-layout-full col-md">
                          <table
                            className="datatables-basic table table-bordered table-responsive dataTable dtr-column"
                            id="DataTables_Table_0"
                            aria-describedby="DataTables_Table_0_info"
                            style={{ width: "100%" }}
                          >
                            <thead>
                              <tr>
                                <th
                                  data-dt-column={1}
                                  rowSpan={1}
                                  colSpan={1}
                                  className="dt-select dt-orderable-none"
                                >
                                  <span className="dt-column-title" />
                                  <span className="dt-column-order" />
                                  No.
                                </th>
                                <th
                                  data-dt-column={3}
                                  rowSpan={1}
                                  colSpan={1}
                                  className="dt-orderable-asc dt-orderable-desc"
                                  aria-label="Name: Activate to sort"
                                  tabIndex={0}
                                >
                                  <span
                                    className="dt-column-title"
                                    role="button"
                                  >
                                    Vendor Details
                                  </span>
                                  <span className="dt-column-order" />
                                </th>
                                <th
                                  data-dt-column={4}
                                  rowSpan={1}
                                  colSpan={1}
                                  className="dt-orderable-asc dt-orderable-desc"
                                  aria-label="Email: Activate to sort"
                                  tabIndex={0}
                                >
                                  <span
                                    className="dt-column-title"
                                    role="button"
                                  >
                                    User Details
                                  </span>
                                  <span className="dt-column-order" />
                                </th>
                                <th
                                  data-dt-column={5}
                                  rowSpan={1}
                                  colSpan={1}
                                  className="dt-orderable-asc dt-orderable-desc"
                                  aria-label="Date: Activate to sort"
                                  tabIndex={0}
                                >
                                  <span
                                    className="dt-column-title"
                                    role="button"
                                  >
                                    Product Detail
                                  </span>
                                  <span className="dt-column-order" />
                                </th>
                                <th
                                  data-dt-column={5}
                                  rowSpan={1}
                                  colSpan={1}
                                  className="dt-orderable-asc dt-orderable-desc"
                                  aria-label="Date: Activate to sort"
                                  tabIndex={0}
                                >
                                  <span
                                    className="dt-column-title"
                                    role="button"
                                  >
                                    Start Date
                                  </span>
                                  <span className="dt-column-order" />
                                </th>
                                <th
                                  data-dt-column={6}
                                  rowSpan={1}
                                  colSpan={1}
                                  className="dt-orderable-asc dt-orderable-desc dt-type-numeric"
                                  aria-label="Salary: Activate to sort"
                                  tabIndex={0}
                                >
                                  <span
                                    className="dt-column-title"
                                    role="button"
                                  >
                                    End Date
                                  </span>
                                  <span className="dt-column-order" />
                                </th>
                                <th
                                  data-dt-column={7}
                                  rowSpan={1}
                                  colSpan={1}
                                  className="dt-orderable-asc dt-orderable-desc"
                                  aria-label="Status: Activate to sort"
                                  tabIndex={0}
                                >
                                  <span
                                    className="dt-column-title"
                                    role="button"
                                  >
                                    Paymemt Mode
                                  </span>
                                  <span className="dt-column-order" />
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {isLoading ? (
                                <tr>
                                  <td colSpan="7" className="text-center">
                                    Loading...
                                  </td>
                                </tr>
                              ) : currentRecords.length === 0 ? (
                                <td colSpan="7" className="text-center">
                                  No Data Found
                                </td>
                              ) : (
                                currentRecords.map((item, index) => (
                                  <tr key={index}>
                                    <td className="dt-select">
                                      {indexOfFirstRecord + index + 1}
                                    </td>
                                    <td>
                                      <div className="d-flex justify-content-start align-items-center user-name">
                                        <div className="d-flex flex-column">
                                          <span className="emp_name text-truncate text-heading">
                                            {item.vendorName}
                                          </span>
                                          <small>
                                            Phone: {item.vendorPhone}
                                          </small>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="d-flex justify-content-start align-items-center user-name">
                                        <div className="d-flex flex-column">
                                          <span className="emp_name text-truncate text-heading">
                                            {item.userName}
                                          </span>
                                          <small>Phone: {item.userPhone}</small>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="d-flex justify-content-start align-items-center user-name">
                                        <div className="d-flex flex-column">
                                          <span className="emp_name text-truncate text-heading">
                                            {item.productName}
                                          </span>
                                          <small>
                                            Price: {item.productPrice}
                                          </small>
                                          <small>Quantity: {item.p_qty}</small>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="dt-type-numeric">
                                      {new Date(
                                        item.booking_details.start_date
                                      ).toLocaleDateString()}
                                    </td>
                                    <td className="text-center">
                                      {new Date(
                                        item.booking_details.end_date
                                      ).toLocaleDateString()}
                                    </td>
                                    <td className="d-flex align-items-center">
                                      <div className="d-inline-block">
                                        {item.booking_details.payment_mode}
                                      </div>
                                    </td>
                                  </tr>
                                ))
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center p-3">
                        <span>
                          Showing {indexOfFirstRecord + 1} to{" "}
                          {Math.min(indexOfLastRecord, filteredData.length)} of{" "}
                          {filteredData.length} entries
                        </span>
                        <ul className="pagination mb-0">
                          {[...Array(totalPages).keys()].map((page) => (
                            <li
                              key={page}
                              className={`page-item ${
                                currentPage === page + 1 ? "active" : ""
                              }`}
                              onClick={() => handlePageChange(page + 1)}
                            >
                              <button className="page-link">{page + 1}</button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
              <div className="content-backdrop fade" />
            </div>
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle" />
        <div className="drag-target" />
      </div>
    </>
  );
}
