"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { withRouter } from "next/router";

const NavBar = ({ router }) => {
  const [open, setOpen] = useState(false);

  const isActive = (href) => {
    return router.pathname === href ? "border-b-2" : "";
  };

  return (
    <div>
      <nav className="w-full border-b bg-black">
        <div className="w-full flex  items-center justify-between mx-auto px-6">
          <img
            src="/assets/icons/HeaderLogo.svg"
            alt="icon"
            width={160}
            height={100}
          />
          <button
            onClick={() => setOpen(true)}
            className={` md:hidden ${open ? "hidden" : "flex"} text-white`}
          >
            <svg fill="none" viewBox="0 0 24 24" height="2em" width="2em">
              <path
                fill="currentColor"
                d="M2 6a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM2 12.032a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM3 17.064a1 1 0 100 2h18a1 1 0 000-2H3z"
              />
            </svg>
          </button>
          <button
            onClick={() => setOpen(false)}
            className={`text-white md:hidden ${open ? "flex" : "hidden"}`}
          >
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="2em"
              width="2em"
            >
              <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
            </svg>
          </button>
          <div className="hidden md:block">
            <ul className="flex md:flex-row flex-col space-x-8 items-center">
              <Link
                href="/home"
                className={`text-white pb-3 ${isActive("/home")}`}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`text-white pb-3 ${isActive("/services")}`}
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className={`text-white pb-3 ${isActive("/gallery")}`}
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className={`text-white pb-3 ${isActive("/about")}`}
              >
                About Us
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(NavBar);
