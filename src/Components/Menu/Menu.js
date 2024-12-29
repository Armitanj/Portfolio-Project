import React, { useState } from "react";
import { IoIosHome, IoMdPerson, IoMdMailOpen } from "react-icons/io";
import { MdBusinessCenter } from "react-icons/md";
import { IoDocument } from "react-icons/io5";

import "./Menu.css";
import { Link, useLocation } from "react-router-dom";

export default function Menu() {
  const location = useLocation(); // گرفتن مسیر فعلی
  const [activePath, setActivePath] = useState(location.pathname); // مسیر فعال

  return (
    <div>
      <ul className="MenuComponent">
        <Link
          to="/"
          className={`navIcon ${activePath === "/" ? "active" : ""}`}
          onClick={() => setActivePath("/")}
        >
          <li>
            <IoIosHome />
          </li>
        </Link>
        <Link
          to="/about"
          className={`navIcon ${activePath === "/about" ? "active" : ""}`}
          onClick={() => setActivePath("/about")}
        >
          <li>
            <IoMdPerson />
          </li>
        </Link>
        <Link
          to="/skills"
          className={`navIcon ${activePath === "/skills" ? "active" : ""}`}
          onClick={() => setActivePath("/skills")}
        >
          <li>
            <MdBusinessCenter />
          </li>
        </Link>
        <Link
          to="/portfolio"
          className={`navIcon ${activePath === "/portfolio" ? "active" : ""}`}
          onClick={() => setActivePath("/portfolio")}
        >
          <li>
            <IoDocument />
          </li>
        </Link>
        <Link
          to="/contact"
          className={`navIcon ${activePath === "/contact" ? "active" : ""}`}
          onClick={() => setActivePath("/contact")}
        >
          <li>
            <IoMdMailOpen />
          </li>
        </Link>
      </ul>
    </div>
  );
}
