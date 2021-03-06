import React from "react";
import Link from "next/link";
import classnames from "classnames";

import { colors } from "../../styles/theme";
import { Mixpanel } from "../../analytics/Mixpanel";

import Hamburger from "./Hamburger";

const MobileNav = ({ active, onClick, CtaBtn }) => {
  return (
    <>
      <section className={classnames("mobile-nav hide-md flex", { active })}>
        <header className="justify-space-between">
          <Link href="/">
            <a
              onClick={() => {
                Mixpanel.track("Mobile Menu Link Clicked", {
                  page: "home"
                });
              }}
            >
              <img src={"/images/logo.svg"} alt="logo" className="logo" />
            </a>
          </Link>
          <Hamburger active={active} onClick={onClick} />
        </header>

        <div className="mobile-content">
          <div>
            {/* <Link href="/explore">
              <a className="mobile-link">Explore</a>
            </Link> */}
            <Link href="/about">
              <a
                className="mobile-link"
                onClick={() => {
                  Mixpanel.track("Mobile Menu Link Clicked", {
                    page: "about"
                  });
                }}
              >
                About Metechi
              </a>
            </Link>
            <Link href="/contact">
              <a
                className="mobile-link"
                onClick={() => {
                  Mixpanel.track("Mobile Menu Link Clicked", {
                    page: "contact-us"
                  });
                }}
              >
                Contact Us
              </a>
            </Link>
            {/* <Link href="/blog">
              <a className="mobile-link">Blog</a>
            </Link> */}
            <a
              className="mobile-link"
              href="https://app.metechi.com/login"
              onClick={() => {
                Mixpanel.track("Mobile Menu Link Clicked", {
                  page: "login"
                });
              }}
            >
              Login
            </a>
          </div>
          <footer>
            {CtaBtn}
            <div className="social">
              <a
                target="_blank"
                href="https://www.twitter.com/metechi"
                className="social-icon icon-twitter"
                onClick={() => {
                  Mixpanel.track("Mobile Menu Social Clicked", {
                    network: "twitter"
                  });
                }}
              />
              <a
                target="_blank"
                href="https://www.facebook.com/Metechi-1190578191118346"
                className="social-icon icon-facebook"
                onClick={() => {
                  Mixpanel.track("Mobile Menu Social Clicked", {
                    network: "facebook"
                  });
                }}
              />
              <a
                target="_blank"
                href="https://www.linkedin.com/company/metechi"
                className="social-icon icon-linkedin"
                onClick={() => {
                  Mixpanel.track("Mobile Menu Social Clicked", {
                    network: "linkedin"
                  });
                }}
              />
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
          text-decoration: none;
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
