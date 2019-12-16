export const textWrap = str => {
  return {
    __html: str[0].replace(/([^\s-.,;:!?()[\]{}<>"]+)/g, "<span>$1</span>")
  };
};
