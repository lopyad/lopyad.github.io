
'use client'; // This component needs client-side interactivity

import Link from 'next/link';
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("Home");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/blog") {
      setDropdownValue("Blog");
    } else if (pathname === "/about") {
      setDropdownValue("About");
    } else {
      setDropdownValue("Home");
    }
  }, [pathname]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link href="/">
          <span className="prompt-icon">&gt;_</span> Lopyad Page
        </Link>
      </div>
      {/*<button className="navbar-toggler" onClick={() => setIsOpen(!isOpen)}>*/}
      {/*  ☰*/}
      {/*</button>*/}
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <div className={`dropdown ${dropdownOpen ? 'open' : ''}`} ref={dropdownRef}>
          <div className="dropbtn" onClick={(e) => {
            e.preventDefault();
            setDropdownOpen(!dropdownOpen);
            // setAboutDropdownOpen(false);
          }}>{dropdownValue} <span className="dropdown-arrow">&lt;</span></div>
          {dropdownOpen && (
            <div className="dropdown-content">
              <Link href="/" onClick={() => {
                setDropdownOpen(false);
                setIsOpen(false);
              }}>Home</Link>
              <Link href="/blog" onClick={() => {
                setDropdownOpen(false);
                setIsOpen(false);
              }}>Blog</Link>
              <Link href="/about" onClick={() => {
                setDropdownOpen(false);
                setIsOpen(false);
              }}>About</Link>
            </div>
          )}
        </div>

        {/*<div className={`dropdown ${aboutDropdownOpen ? 'open' : ''}`} ref={aboutDropdownRef}>*/}
        {/*  <Link href="/about" className="dropbtn" onClick={(e) => {*/}
        {/*    e.preventDefault();*/}
        {/*    setAboutDropdownOpen(!aboutDropdownOpen);*/}
        {/*    setBlogDropdownOpen(false);*/}
        {/*  }}>About <span className="dropdown-arrow">&lt;</span></Link>*/}
        {/*  {aboutDropdownOpen && (*/}
        {/*    <div className="dropdown-content">*/}
        {/*      <Link href="/about" onClick={() => {*/}
        {/*        setAboutDropdownOpen(false);*/}
        {/*        setIsOpen(false);*/}
        {/*      }}>About</Link>*/}
        {/*    </div>*/}
        {/*  )}*/}
        {/*</div>*/}
      </div>
      <div className="navbar-search-wrapper">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="..." className="search-input" />
      </div>
    </nav>
  );
}
