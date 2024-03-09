"use client";
import React from "react";
import { Nav, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure this is imported in _app.js for Next.js projects
import styles from "./SideBar.module.css";
import { useSession, signOut } from "next-auth/react";

const Sidebar = () => {
  const { data: session, status } = useSession();

  return (
    <div
      className={`${styles.sidebarContainer} d-flex flex-column flex-shrink-0 p-3`}
      style={{ width: "280px", height: "100vh" }}
    >
      <a
        href="/"
        className={`d-flex align-items-center mb-md-0 me-md-auto text-decoration-none mb-3 text-white ${styles.logo}`}
      >
        <img
          src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-white.svg"
          alt=""
          width="30"
          height="24"
          className={`d-inline-block align-top ${styles.logoImage}`}
        />
        <span className={`fs-4 ${styles.logoText}`}>Sidebar</span>
      </a>
      <hr />
      <Nav defaultActiveKey="/" className={`flex-column ${styles.nav}`}>
        <Nav.Link href="#" active>
          Home
        </Nav.Link>
        <Nav.Link href="#">Dashboard</Nav.Link>
        <Nav.Link href="#">Orders</Nav.Link>
        <Nav.Link href="#">Products</Nav.Link>
        <Nav.Link href="#">Customers</Nav.Link>
      </Nav>
      <hr />
      <Dropdown>
        <Dropdown.Toggle
          variant="dark"
          id="dropdown-basic"
          className={`d-flex align-items-center text-wrap ${styles.dropdownToggle}`}
        >
          {session && session.user && session.user.image ? (
            <img
              src={session.user.image}
              alt={session.user.name || "Profile image"}
              width="32"
              height="32"
              className={`rounded-circle me-2 ${styles.avatar}`}
            />
          ) : (
            // Placeholder image or icon when there is no user image
            <span
              className={`rounded-circle me-2 ${styles.avatar} ${styles.placeholderAvatar}`}
            ></span>
          )}
          {/* Display user's name or placeholder */}
          {session && session.user && session.user.name
            ? session.user.name
            : "User"}
        </Dropdown.Toggle>

        <Dropdown.Menu className={`dropdown-menu-dark ${styles.dropdownMenu}`}>
          <Dropdown.Item href="#">New project...</Dropdown.Item>
          <Dropdown.Item href="#">Settings</Dropdown.Item>
          <Dropdown.Item href="#">Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            as="button"
            onClick={() => {
              signOut({ redirect: true, callbackUrl: "/" });
              localStorage.removeItem("userID");
            }}
            className="text-sm font-medium uppercase tracking-wider text-stone-500"
          >
            Sign Out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Sidebar;
