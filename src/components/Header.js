import React from "react";
import { FaCross } from "react-icons/fa";
import { BiChurch } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="fixed w-full flex items-center justify-between py-4 px-5 bg-white z-20 lg:px-40">
        <nav>
          <ul className="flex">
            <Link to="/dom" className="mr-5">
              <button>Dom</button>
            </Link>
            <Link to="/helena" className="mr-5">
              <button>Helena</button>
            </Link>
            <Link to="/zakon" className="mr-5">
              <button>Zakon</button>
            </Link>
            <Link to="/mistycyzm" className="mr-5">
              <button>Mistyka</button>
            </Link>
            <Link to="/misja" className="mr-5">
              <button>Misja</button>
            </Link>
          </ul>
        </nav>
        <nav>
          <ul className="flex">
            <Link to="/" className="mr-5">
              <BiChurch />
            </Link>
            <Link className="mr-5">
              <FaCross />
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
