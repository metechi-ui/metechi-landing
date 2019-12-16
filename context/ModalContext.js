import React, { createContext, useReducer } from "react";
import { scrollTo } from "../utils/scrollTo";

const ModalContext = createContext();

const showModal = () => {
  const closeToJoin =
    document.querySelector(".access-form") &&
    document.querySelector(".access-form").getBoundingClientRect().top <
      window.innerHeight + 100;

  //scroll to join if close enough
  if (closeToJoin) {
    scrollTo(document.querySelector(".access-form"));
    return { show: false };
  }
  //or open modal if the scroll is long
  else {
    return { show: true };
  }
};
const hideModal = () => {
  return { show: false };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "show":
      return showModal();
    case "hide":
      return hideModal();
    default:
      throw new Error("unexpected action type");
  }
};

const ModalProvider = ({ children }) => {
  const state = useReducer(reducer, { show: false });
  return (
    <ModalContext.Provider value={state}>{children}</ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
