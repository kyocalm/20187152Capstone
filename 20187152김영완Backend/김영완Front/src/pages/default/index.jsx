import React, { useState, useNavigate } from "react";
import { Link } from "react-router-dom";
import NavItem from "./Sections/NavItem";
import GrapeLogo from "/images/GREAPP.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const navbarTextStyle = {
    color: "black",
    marginLeft: "40px",
    fontSize: "20px", // Adjust the font size as needed
  };

  return (
    <section className="relative z-10 text-black">
      <div className="w-full">
        <div className="flex items-center justify-between mx-5 sm:mx-10 lg:mx-20">
          {/* logo */}
          <div className="flex items-center text-2xl h-14">
            <Link to="/">
              <img
                src={GrapeLogo}
                alt="GrapeLogo"
                width="150"
                height="80"
                className="d-inline-block align-text-top"
              />
            </Link>{" "}
          </div>

          {/* menu button */}
          <div className="text-2xl sm:hidden">
            <button onClick={handleMenu}>{menu ? "-" : "+"}</button>
          </div>

          {/* big screen nav-items */}
          <div className="hidden sm:block">
            <NavItem />
          </div>
        </div>

        {/* mobile nav-items */}
        <div className="block sm:hidden">{menu && <NavItem mobile />}</div>
      </div>
    </section>
  );
};

export default Navbar;
