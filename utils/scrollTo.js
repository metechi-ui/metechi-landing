export const scrollTo = elm => {
  window.scroll({
    top: elm.offsetTop,
    left: 0,
    behavior: "smooth"
  });
};
