const BUTTON_TYPE_CLASSES = {
  google:
    "py-4 px-6 rounded capitalize transition-all  hover:bg-white hover:text-black text-slate-50 bg-sky-500/100 ",
  inverted:
    "py-4 px-6 rounded capitalize transition-all  hover:bg-white hover:text-black text-slate-50 bg-black ",
  danger:
    "py-2 px-6 rounded capitalize transition-all  hover:bg-white hover:text-black text-slate-50 bg-[#e63946]",
};

function Button({ children, buttonType, ...otherProps }) {
  return (
    <button className={BUTTON_TYPE_CLASSES[buttonType]} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
