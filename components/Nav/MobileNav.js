import React from "react";
import Link from "next/link";
import classnames from "classnames";

import { colors } from "../../styles/theme";
import Hamburger from "./Hamburger";

const MobileNav = ({ active, onClick, CtaBtn }) => {
  return (
    <>
      <section className={classnames("mobile-nav hide-md flex", { active })}>
        <header className="justify-space-between">
          <Link prefetch href="/">
            <a>
              <img src={"/images/logo.svg"} alt="logo" className="logo" />
            </a>
          </Link>
          <Hamburger active={active} onClick={onClick} />
        </header>

        <div className="mobile-content">
          <div>
            {/* <Link prefetch href="/explore">
              <a className="mobile-link">Explore</a>
            </Link> */}
            <Link prefetch href="/about">
              <a className="mobile-link">About Metechi</a>
            </Link>
            <Link prefetch href="/contact">
              <a className="mobile-link">Contact Us</a>
            </Link>
            {/* <Link prefetch href="/blog">
              <a className="mobile-link">Blog</a>
            </Link> */}
            <a className="mobile-link" href="/login">
              Login
            </a>
          </div>
          <footer>
            {CtaBtn}
            <div className="social">
              <i className="icon-twitter social-icon" />
              <i className="icon-facebook social-icon" />
              <i className="icon-linkedin social-icon" />
            </div>
          </footer>
        </div>
      </section>
      <style jsx>{`
        .mobile-nav {
          position: fixed;
          top: 0;
          width: 100vw;
          height: 0;
          background-color: ${colors.white};
          overflow: hidden;
          z-index: 100;
          transition: all 300ms ease;
          flex-direction: column;
        }
        header {
          align-items: center;
          padding: 20px 25px;
        }
        .logo {
          height: 22px;
        }

        .mobile-nav.active {
          height: 100vh;
        }

        .mobile-content {
          height: calc(100vh - 60px);
          padding: 50px 25px;
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          overflow: auto;
          opacity: 0;
          transition: all 0.3s;
          transform: translateY(10px);
        }
        .mobile-nav.active .mobile-content {
          opacity: 1;
          transition-delay: 0.3s;
          transform: translateY(0);
        }

        .mobile-link {
          display: block;
          font-size: 2rem;
          font-weight: 500;
          letter-spacing: -0.25px;
          text-decoration: none;
          text-align: center;
          margin-top: 50px;
        }

        footer {
          text-align: center;
          margin-top: 50px;
          opacity: 0;
          transition: all 0.3s;
          transform: translateY(10px);
        }
        .mobile-nav.active footer {
          opacity: 1;
          transition-delay: 0.4s;
          transform: translateY(0);
        }

        .social {
          display: flex;
          justify-content: center;
          margin-top: 50px;
        }

        .social-icon {
          font-size: 1.5rem;
          margin: 0 25px;
          color: ${colors.blueyGrey};
        }
      `}</style>
      <style jsx global>{`
        body {
          height: ${active ? "100%" : "auto"};
          overflow-y: ${active ? "hidden" : "auto"};
        }
      `}</style>
    </>
  );
};

export default MobileNav;
