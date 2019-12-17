import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { colors, breakpoints } from "../../styles/theme";

const Footer = () => {
  const router = useRouter();

  return (
    <footer>
      <div className="max-container content">
        <div className="row">
          <div className="column">
            <Link href="/about">
              <a className="link">About Metechi</a>
            </Link>
            <Link href="/contact">
              <a className="link">Contact Us</a>
            </Link>
            <a className="link" href="/login">
              Login
            </a>
          </div>
          {/* <div className="column">
            <a className="link">Participating Banks</a>
            <a className="link">Family Office</a>
            <a className="link">Agent Banks</a>
            <a className="link">Institutional Investors</a>
          </div>
          <div className="column">
            <a className="link">Blog</a>
            <a className="link">Join Us</a>
          </div> */}
          <div className="logo-container">
            <Link href="/">
              <a>
                <img src="/images/logo-white.svg" alt="logo" className="logo" />
              </a>
            </Link>
          </div>
        </div>
        <div className="social-container">
          <div className="social align-center">
            <a
              target="_blank"
              href="https://www.twitter.com/metechi"
              className="social-icon icon-twitter"
            />
            <a
              target="_blank"
              href="https://www.facebook.com/Metechi-1190578191118346"
              className="social-icon icon-facebook"
            />
            <a
              target="_blank"
              href="https://www.linkedin.com/company/metechi"
              className="social-icon icon-linkedin"
            />
          </div>

          <form
            className={"tag"}
            action={
              "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
            }
            method="POST"
          >
            {/* medium */}
            <input
              type="hidden"
              id="00N1U00000QbeQx"
              name="00N1U00000QbeQx"
              value={"newsletter_subscription"}
            />
            <input
              type="hidden"
              name="retURL"
              value={`https://metechi-landing.now.sh${router.route}?thankyou=true`}
            />
            <input type="hidden" name="oid" value={`00D1U000000xECz`} />
            <input type="hidden" name="oid" value={`http://www.google.com`} />

            <input
              type="hidden"
              name="retURL"
              value={`https://metechi-landing.now.sh${router.route}?thankyou=true`}
            />
            <input
              id="newsletter"
              name="newsletter"
              type="email"
              required
              placeholder="Subscribe to our newsletter"
            />
            <button type="submit" value="none">
              <div className="triangle blueyGrey" />
            </button>
          </form>
        </div>
        <div className="justify-space-between-md">
          <div>
            <div className="sub-link">
              Copyright © 2019 Metechi Inc, All right reserved
            </div>
            <a
              className="sub-link"
              target="_blank"
              href="https://www.google.com/maps/place/1270+6th+Ave,+New+York,+NY+10020/"
            >
              1270 6th New York, NY 10020
            </a>
          </div>
          <div className="terms">
            <Link href="/terms">
              <a className="sub-link">Terms of use</a>
            </Link>
            <Link href="/terms#privacy">
              <a className="sub-link">Privacy policy</a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        footer {
          background-color: ${colors.darkGrey};
        }

        .content {
          padding: 50px 25px;
        }

        .row {
          display: flex;
          flex-direction: column;
        }

        .column {
          order: 2;
        }

        .link {
          display: block;
          font-size: 1.5rem;
          font-weight: 500;
          color: ${colors.white};
          cursor: pointer;
          margin-bottom: 30px;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .link:hover {
          opacity: 0.7;
        }

        .terms {
          margin-top: 40px;
        }

        .logo {
          height: 20px;
        }

        .logo-container {
          margin-bottom: 80px;
          order: 1;
        }

        .tag {
          width: 320px;
          height: 46px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 26.5px;
          background-color: ${colors.charcoalGrey};
          color: ${colors.lightGrey};
          font-size: 1.5rem;
          letter-spacing: -0.17px;
          order: 1;
        }

        .tag input {
          flex: 1;
          width: 100%;
          color: #fff;
          font-size: 1.4rem;
          font-weight: 400;
          padding: 5px 20px;
        }

        .tag input::-webkit-input-placeholder {
          color: rgba(255, 255, 255, 0.3);
          font-family: inherit;
          font-size: inherit;
          font-weight: 400;
        }

        .tag button {
          padding: 20px;
          border: none;
          outline: none;
          background: none;
          box-shadow: none;
          cursor: pointer;
        }

        .m-bot-120 {
          margin-bottom: 120px !important;
        }

        .social {
          margin-top: 60px;
          order: 2;
        }

        .social-container {
          display: flex;
          flex-direction: column;
          margin: 70px 0;
        }

        .sub-link {
          font-size: 1.3rem;
          line-height: 1.38;
          color: ${colors.blueyGrey};
          margin-bottom: 5px;
          text-decoration: none;
          display: block;
        }

        .social-icon {
          color: ${colors.white};
          margin-right: 20px;
          font-size: 1.2rem;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .social-icon:last-child {
          margin-right: 0;
        }

        .social-icon:hover {
          opacity: 0.7;
        }

        .terms {
          margin-top: 40px;
        }

        @media (${breakpoints.md}) {
          .content {
            padding: 80px 0;
          }

          .row {
            flex-direction: row;
          }

          .column {
            order: 1;
            padding-right: 60px;
          }

          .logo {
            height: 24px;
          }

          .logo-container {
            order: 2;
            margin-left: auto;
            padding-right: 60px;
          }

          .tag {
            order: 2;
          }

          .social {
            order: 1;
            margin-top: 0;
          }

          .social-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin: 85px 0;
          }

          .terms {
            margin-top: 0;
            text-align: right;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
