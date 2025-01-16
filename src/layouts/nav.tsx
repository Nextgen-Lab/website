import { Link } from "react-router-dom";
import logo from "../assets/img/next-gen-lab-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap";
import data from "../data.json";
import { useState } from "react";

const menuConfig = [
  {
    label: "Home",
    to: "/",
    icon: "fas fa-info-home",
    subMenu: [],
    isCTA: false,
  },
  {
    label: "About Us",
    to: "/about-us",
    subMenu: [],
    isCTA: false,

  },
  {
    label: "Services",
    to: "/our-services",
    subMenu: data.services.map((service) => ({
      label: service.name,
      to: `/our-services/${service.slug}`,
    })),
    isCTA: false,

  },
  {
    label: "Projects",
    to: "/our-projects",
    subMenu: [],
    isCTA: false,

  },
  {
    label: "Contact Us",
    to: "/contact",
    subMenu: [],
    isCTA: true,
    icon: "fi fi-rr-arrow-small-right",

  },
];

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null); // Track the open submenu

  const toggleSubMenu = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <>
      {isSidebarOpen && (
        <div className="mobile-screen">
          <button
            className="mobile-screen-close"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          ><i className="fi fi-br-cross" style={{ fontSize: "1rem", display: "flex" }}></i>
          </button>

          <nav id="mobile-menu">
            <ul>
              {menuConfig.map((menuItem, index) => (
                <li
                  key={index}
                  className={menuItem.subMenu.length > 0 ? "has-submenu" : ""}
                >
                  <div
                    onClick={() => toggleSubMenu(index)}
                    style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                  >
                    <Link to={menuItem.to}>
                      {menuItem.icon && <i className={menuItem.icon}></i>}
                      {menuItem.label}
                    </Link>
                  </div>
                  {menuItem.subMenu.length > 0 && (
                    <ul
                      className={`submenu ${openMenuIndex === index ? "open" : "closed"
                        }`}
                    >
                      {menuItem.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link to={subItem.to}>{subItem.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <header>
        <div
          id="header-sticky"
          className="tp-header-area header-pl-pr header-transparent header-border-bottom"
        >
          <div className="container-fluid">
            <div className="row align-items-center nav-container">
              {/* Logo */}
              <div className="col-xl-2 col-lg-2 col-md-4 col-6 nav-contains">
                <div className="tp-logo tp-logo-border">
                  <Link to="/">
                    <img src={logo} alt="Next Gen Lab Logo" width={200} />
                  </Link>
                </div>
              </div>

              <div className="col-xl-10 col-lg-10 col-md-8 col-6 d-flex justify-content-end">
                <div className="tp-main-menu d-none d-xl-block">
                  <nav id="desktop-menu">
                    <ul>
                      {menuConfig.map((menuItem, index) => (
                        menuItem.isCTA ? (
                          <li key={index}>
                            <Link to={menuItem.to} className="menu-btn">
                              {menuItem.icon && <i className={`${menuItem.icon}`}></i>}
                              {menuItem.label}
                            </Link>
                          </li>
                        ) : (
                          <li
                            key={index}
                            className={
                              menuItem.subMenu.length > 0 ? "has-submenu" : ""
                            }
                          >
                            <Link to={menuItem.to}>
                              {menuItem.icon && <i className={menuItem.icon}></i>}
                              {menuItem.label}
                            </Link>
                            {menuItem.subMenu.length > 0 && (
                              <ul className="submenu">
                                {menuItem.subMenu.map((subItem, subIndex) => (
                                  <li key={subIndex}>
                                    <Link to={subItem.to}>{subItem.label}</Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        )
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="tp-header-right header-right-visible">
                  <ul>
                    <li>
                      <button
                        className="tp-menu-bar"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                      ><i className="fi fi-br-bars-staggered" style={{ fontSize: "30px" }}></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header >
    </>
  );
};

export default Nav;
