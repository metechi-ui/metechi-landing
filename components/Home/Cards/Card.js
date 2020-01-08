import React, { useState, useEffect } from "react";
import classnames from "classnames";

import { Spring, Transition, config } from "react-spring/renderprops.cjs";

import { colors, breakpoints } from "../../../styles/theme";

const Card = ({ className, deals, delay }) => {
  const [index, set] = useState(0);

  useEffect(() => {
    let last = 0;
    let req;

    const nextCard = now => {
      if (!last || now - last >= 4000 + delay) {
        last = now;
        set(state => (state + 1) % 2);
      }
      req = requestAnimationFrame(nextCard);
    };
    nextCard();

    return () => {
      cancelAnimationFrame(req);
    };
  }, []);

  return (
    <div className={classnames("container", className)}>
      <Transition
        config={config.slow}
        items={deals[index]}
        keys={item => item.title}
        from={{ opacity: 0, transform: "translate3d(0, 80px, 0) scale(0.8)" }}
        enter={{ opacity: 1, transform: "translate3d(0, 0, 0) scale(1)" }}
        leave={{
          position: "absolute",
          opacity: 0,
          transform: "translate3d(0, -50px, 0) scale(0.9)"
        }}
      >
        {item => props => (
          <div className="card" style={props}>
            <div
              className="card-image"
              style={{ backgroundImage: `url(/images/HP/${item.image})` }}
            />
            <div className="card-content">
              <h4 className="card-title">{item.title}</h4>
              <p className="card-label">{item.label}</p>
              <Spring
                delay={250}
                config={config.slow}
                from={{ number: 0 }}
                to={{ number: item.num }}
              >
                {props => (
                  <h5 className="card-text">${props.number.toFixed(0)}M</h5>
                )}
              </Spring>
            </div>
          </div>
        )}
      </Transition>

      <style jsx>{`
        .card {
          width: 195px;
          height: 265px;
          box-shadow: 10px 20px 40px 0 rgba(0, 0, 0, 0.1);
          background-color: ${colors.white};
          margin-bottom: 30px;
        }
        .container:first-child {
          margin-right: 30px;
          transform: translateY(90px);
        }

        .card-image {
          width: 100%;
          height: 90px;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }

        .card-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .card-title {
          font-size: 2rem;
          letter-spacing: -0.13px;
          color: ${colors.darkGrey};
          margin-top: 30px;
        }

        .card-label {
          font-size: 1.3rem;
          color: ${colors.grey};
          margin-top: 30px;
        }

        .card-text {
          font-size: 20px;
          color: ${colors.blue};
        }

        @media (${breakpoints.md}) {
          .container:first-child {
            margin-right: 40px;
            transform: translateY(70px);
          }
          .card {
            width: 220px;
            margin-bottom: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default Card;
