import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Navbar() {
  const toggleSidebar = () => {
    document.documentElement.classList.add("layout-menu-expanded");
  };

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:8000/logout");
      toast.success("Logout Successfully!!", {
        onClose: () => window.location.reload(),
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed!", {
        onClose: () => window.location.reload(),
      });
    }
  };
  useEffect(() => {
    const themeButtons = document.querySelectorAll("[data-bs-theme-value]");
    const htmlElement = document.documentElement;

    // Load theme from localStorage on page load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      if (savedTheme === "system") {
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        htmlElement.setAttribute(
          "data-bs-theme",
          systemPrefersDark ? "dark" : "light"
        );
      } else {
        htmlElement.setAttribute("data-bs-theme", savedTheme);
      }
      // Mark the correct button as active on load
      themeButtons.forEach((btn) => {
        if (btn.getAttribute("data-bs-theme-value") === savedTheme) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
    }

    const handleThemeChange = (e) => {
      const selectedTheme = e.currentTarget.getAttribute("data-bs-theme-value");

      if (selectedTheme === "system") {
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        htmlElement.setAttribute(
          "data-bs-theme",
          systemPrefersDark ? "dark" : "light"
        );
      } else {
        htmlElement.setAttribute("data-bs-theme", selectedTheme);
      }

      // Store theme in localStorage
      localStorage.setItem("theme", selectedTheme);

      themeButtons.forEach((btn) => btn.classList.remove("active"));
      e.currentTarget.classList.add("active");
    };

    themeButtons.forEach((btn) =>
      btn.addEventListener("click", handleThemeChange)
    );

    return () => {
      themeButtons.forEach((btn) =>
        btn.removeEventListener("click", handleThemeChange)
      );
    };
  }, []);

  return (
    <>
      <nav
        className="layout-navbar container-xxl navbar-detached navbar navbar-expand-xl align-items-center bg-navbar-theme"
        id="layout-navbar"
      >
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-4 me-xl-0   d-xl-none ">
          <div
            className="nav-item nav-link px-0 me-xl-6"
            onClick={toggleSidebar}
          >
            <i className="icon-base bx bx-menu icon-md" />
          </div>
        </div>
        <div
          className="navbar-nav-right d-flex align-items-center justify-content-end"
          id="navbar-collapse"
        >
          <ul className="navbar-nav flex-row align-items-center ms-md-auto">
            <li className="nav-item dropdown me-2 me-xl-0">
              <a
                className="nav-link dropdown-toggle hide-arrow"
                id="nav-theme"
                href="/#"
                data-bs-toggle="dropdown"
              >
                <i className="icon-base bx bx-sun icon-md theme-icon-active" />
                <span className="d-none ms-2" id="nav-theme-text">
                  Toggle theme
                </span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="nav-theme-text"
              >
                <li>
                  <button
                    type="button"
                    className="dropdown-item align-items-center active"
                    data-bs-theme-value="light"
                    aria-pressed="false"
                  >
                    <span>
                      <i
                        className="icon-base bx bx-sun icon-md me-3"
                        data-icon="sun"
                      />
                      Light
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="dropdown-item align-items-center"
                    data-bs-theme-value="dark"
                    aria-pressed="true"
                  >
                    <span>
                      <i
                        className="icon-base bx bx-moon icon-md me-3"
                        data-icon="moon"
                      />
                      Dark
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="dropdown-item align-items-center"
                    data-bs-theme-value="system"
                    aria-pressed="false"
                  >
                    <span>
                      <i
                        className="icon-base bx bx-desktop icon-md me-3"
                        data-icon="desktop"
                      />
                      System
                    </span>
                  </button>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle hide-arrow"
                to={"#"}
                id="profileDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="avatar avatar-online">
                  <img
                    src="../../assets/img/avatars/1.png"
                    alt=""
                    className="rounded-circle"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end m-0"
                aria-labelledby="profileDropdown"
              >
                <li>
                  <div className="dropdown-item" onClick={handleLogout}>
                    <i className="bx bx-power-off me-2" />
                    <span>Logout</span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
