const BUTTON_TYPE_CLASSES = {
  google: "text-slate-50 bg-sky-500/100 ",
  inverted: "text-slate-50 bg-black ",
};

function Button({ children, buttonType, ...otherProps }) {
  return (
    <button
      className={`py-2 px-6 rounded capitalize transition-all  hover:bg-white hover:text-black ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
