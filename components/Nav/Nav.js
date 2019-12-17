import React, { useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";
import { ModalContext } from "../../context/ModalContext";

import { colors, breakpoints } from "../../styles/theme";
import { useScroll } from "../../hooks/useScroll";
import Button from "../../components/Button";
import Hamburger from "./Hamburger";
import MobileNav from "./MobileNav";

const CtaBtn = ({ callback }) => {
  const [, dispatch] = useContext(ModalContext);
  return (
    <Button
      small
      primary
      label="Get Access"
      onClick={() => {
        dispatch({ type: "show" });
        callback && callback();
      }}
    />
  );
};

const Menu = ({ light, sticky }) => {
  const router = useRouter();

  return (
    <>
      <div className={classnames("menu align-center", { sticky })}>
        <Link href="/">
          <a>
            <img
              src={
                !sticky && light ? "/images/logo-white.svg" : "/images/logo.svg"
              }
              alt="logo"
              className="logo"
            />
          </a>
        </Link>
        <div className="hide-sm">
          {/* <Link href="/explore">
          <a className="link">Explore</a>
        </Link> */}
          <Link prefetch={false} href="/about">
            <a
              className={classnames("link", {
                active: router.route === "/about"
              })}
            >
              About Metechi
            </a>
          </Link>
          <Link prefetch={false} href="/contact">
            <a
              className={classnames("link", {
                active: router.route === "/contact"
              })}
            >
              Contact Us
            </a>
          </Link>
          {/* <Link href="/blog">
          <a className="link">Blog</a>
        </Link> */}
        </div>
      </div>
      <style jsx>{`
        .logo {
          height: ${sticky ? "20px" : "22px"};
        }

        .link {
          position: relative;
          font-size: 1.5rem;
          font-weight: 500;
          letter-spacing: -0.19px;
          text-decoration: none;
          margin-left: 40px;
          color: ${!sticky && light ? colors.white : colors.darkGrey};
          padding: 10px 0;
        }

        .link::after {
          content: "";
          position: absolute;
          width: 30px;
          border-bottom: 2px solid;
          bottom: 0;
          left: 0;
          overflow: hidden;
          transition: transform 200ms;
          transform-origin: right;
          transform: scaleX(0);
        }

        .link.active {
          font-weight: 600;
        }

        .link.active::after,
        .link:hover::after {
          transform-origin: left;
          transform: scaleX(1);
        }

        .menu.sticky .link {
          font-size: 1.4rem;
        }
        .menu.sticky .link:after {
          bottom: initial;
          top: -15px;
        }

        @media (${breakpoints.md}) {
          .logo {
            height: ${sticky ? "22px" : "25px"};
            margin-right: ${sticky ? "10px" : "20px"};
          }
        }
      `}</style>
    </>
  );
};

const Nav = ({ light }) => {
  const [active, setActive] = useState(false);
  const scroll = useScroll();

  return (
    <>
      <nav className="main-menu max-container wide no-padding">
        <Menu light={light} />
        <a className="hide-sm" href="/login">
          <Button small secondary label="Login" />
        </a>
        <div className="hide-md">
          <Hamburger active={active} light={light} onClick={setActive} />
        </div>
      </nav>

      <nav
        className={classnames("sticky-menu", "max-container wide no-padding", {
          active: scroll.y > 300
        })}
      >
        <Menu light={light} sticky />
        <CtaBtn />
      </nav>

      <MobileNav
        active={active}
        onClick={setActive}
        CtaBtn={<CtaBtn callback={setActive} />}
      />

      <style jsx>{`
        .main-menu {
          position: absolute;
          top: 0;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 25px;
          transition: all 0.2s;
          right: 0;
          left: 0;
        }

        .sticky-menu {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.2s;
          background-color: #fff;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0);
          padding: 12px 25px;
          transform: translateY(-100%);
        }
        .sticky-menu.active {
          transform: translateY(0);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .sticky-menu :global(.menu),
        .sticky-menu :global(.button) {
          transition: all 0.5s;
          transform-origin: left top;
          transform: skewY(-5deg) translateY(-20px);
        }
        .sticky-menu.active :global(.menu),
        .sticky-menu.active :global(.button) {
          transform: skew(0deg) translateY(0);
        }

        @media (${breakpoints.md}) {
          .main-menu {
            padding: 30px 40px;
          }
        }
      `}</style>
    </>
  );
};

export default Nav;
