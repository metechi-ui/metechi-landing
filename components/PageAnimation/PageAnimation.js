import React from "react";
import { Transition } from "react-spring/renderprops.cjs";

import { colors } from "../../styles/theme";

const PageAnimation = ({ loading }) => {
  return (
    <>
      {
        <Transition
          unique={true}
          reset={true}
          items={loading}
          from={{ opacity: 1, life: "100%" }}
          enter={{ opacity: 1, life: "100%" }}
          leave={() => async next => {
            await next({ life: "0%" });
            await next({ opacity: 0 });
          }}
        >
          {loading =>
            loading &&
            (props => (
              <div className="page-animation" style={props}>
                <div className="bar" style={{ right: props.life }} />
              </div>
            ))
          }
        </Transition>
      }

      <style jsx>{`
        .page-animation {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          z-index: 20;
          background-color: rgba(255, 255, 255, 0.3);
        }
        .bar {
          position: absolute;
          left: 0;
          right: 50px;
          height: 100%;
          background-color: ${colors.lightBlue};
          box-shadow: 0 0 4px ${colors.lightBlue};
        }
      `}</style>
    </>
  );
};

export default PageAnimation;
