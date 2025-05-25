import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const toggleSidebar = () => {
    document.documentElement.classList.remove("layout-menu-expanded");
  };

  const location = useLocation();
  const currentPath = location.pathname;

  // Helper function to check if the current link is active
  const isActive = (path) => (currentPath === path ? "active" : "");

  return (
    <>
      <aside id="layout-menu" className="layout-menu menu-vertical menu">
        <div className="app-brand demo ">
          <Link to={"/"} className="app-brand-link">
            <span className="app-brand-text demo menu-text fw-bold ms-2">
              Admin
            </span>
          </Link>
          <div
            className="layout-menu-toggle menu-link text-large ms-auto"
            onClick={toggleSidebar}
          >
            <i className="icon-base bx bx-chevron-left" />
          </div>
        </div>
        <div className="menu-inner-shadow" />
        <ul className="menu-inner py-1">
          <li className={`menu-item ${isActive("/")}`}>
            <Link to="/" className={`menu-link ${isActive("/")}`}>
              <i className="menu-icon icon-base bx bx-home-smile" />
              <div data-i18n="Dashboards">Dashboards</div>
            </Link>
          </li>
          <li className={`menu-item ${isActive("/ViewCategory")}`}>
            <Link
              to="/ViewCategory"
              className={`menu-link ${isActive("/ViewCategory")}`}
            >
              <i className="menu-icon icon-base fa fa-list" />
              <div data-i18n="Datatables">Manage Categories</div>
            </Link>
          </li>
          <li className={`menu-item ${isActive("/Managevendor")}`}>
            <Link
              to="/Managevendor"
              className={`menu-link ${isActive("/Managevendor")}`}
            >
              <i className="menu-icon icon-base fa fa-user-tie" />
              <div data-i18n="Datatables">Manage Vendors</div>
            </Link>
          </li>
          <li className={`menu-item ${isActive("/Manageuser")}`}>
            <Link
              to="/Manageuser"
              className={`menu-link ${isActive("/Manageuser")}`}
            >
              <i className=" menu-icon icon-base fa fa-user" />
              <div data-i18n="Datatables">Manage User</div>
            </Link>
          </li>
          <li className={`menu-item ${isActive("/Manageproduct")}`}>
            <Link
              to="/Manageproduct"
              className={`menu-link ${isActive("/Manageproduct")}`}
            >
              <i className="menu-icon icon-base fa fa-cart-arrow-down" />
              <div data-i18n="Datatables">Manage Product</div>
            </Link>
          </li>
          <li className={`menu-item ${isActive("/Managebooking")}`}>
            <Link
              to="/Managebooking"
              className={`menu-link ${isActive("/Managebooking")}`}
            >
              <i className="menu-icon icon-base fa fa-calendar-check" />
              <div data-i18n="Datatables">Manage Bookings</div>
            </Link>
          </li>
          <li className={`menu-item ${isActive("/Managepayment")}`}>
            <Link
              to="/Managepayment"
              className={`menu-link ${isActive("/Managepayment")}`}
            >
              <i className="menu-icon icon-base bx bx-credit-card" />
              <div data-i18n="Datatables">Manage Payments</div>
            </Link>
          </li>
          <li className={`menu-item ${isActive("/Managefeedback")}`}>
            <Link
              to="/Managefeedback"
              className={`menu-link ${isActive("/Managefeedback")}`}
            >
              <i className="menu-icon icon-base fa-regular fa-comments" />
              <div data-i18n="Datatables"> &nbsp;Manage Contacts </div>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
