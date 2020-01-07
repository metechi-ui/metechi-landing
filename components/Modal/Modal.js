import React, { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { Transition } from "react-spring/renderprops.cjs";

import AccessForm from "../AccessForm";
import { colors, breakpoints } from "../../styles/theme";

const Modal = () => {
  const [state, dispatch] = useContext(ModalContext);
  const show = state.show;

  return (
    <>
      <Transition
        items={show}
        from={{ opacity: 0, transform: "translateY(50px)" }}
        enter={{ opacity: 1, transform: "translateY(0)" }}
        leave={{ opacity: 0, transform: "translateY(-30px)" }}
      >
        {show =>
          show &&
          (props => (
            <div className="modal flex" style={{ opacity: props.opacity }}>
              <article
                className="max-container wide no-padding apear-from-top"
                transform={{ transform: props.transform }}
              >
                <AccessForm inModal />
                <div
                  className="close"
                  onClick={() => dispatch({ type: "hide" })}
                />
              </article>
            </div>
          ))
        }
      </Transition>

      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          height: 100%;
          z-index: 1000;
          justify-content: center;
          align-items: center;
          background: rgba(0,0,0,.5);
          overflow: auto;
          width: 100%;
        }        
        .modal article{
          position: relative;
          box-shadow: 0 0 30px rgba(0,0,0,.1);
          background: url(/images/form-bg.jpg) center no-repeat #fff;
          background-size: cover;
          width: 100%;
          margin: auto;
        }     
        .modal :global(.field):before{
          background-color: #c7ccd8;
        }

        .close{
          width: 40px;
          height: 40px;
          cursor: pointer;
          position: absolute;
          top: 15px;
          right 15px;
          transition: transform .3s;
        }
        .close:hover{
          transform: rotate(90deg)
        }
        .close:before,
        .close:after {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          margin: auto;
          content: '';
          width: 50%;
          height: 2px;
          background-color: ${colors.darkGrey};
        }
        .close:before{
          transform: rotate(45deg)
        }
        .close:after{
          transform: rotate(-45deg)
        }
        
        @media (${breakpoints.sm}) {
          .modal {
            padding: 3vh 25px;
          }          
        }

      `}</style>

      <style jsx global>{`
        body {
          height: ${show ? "100%" : "auto"};
          overflow-y: ${show ? "hidden" : "auto"};
        }
      `}</style>
    </>
  );
};

export default Modal;
