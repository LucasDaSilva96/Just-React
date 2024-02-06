const BUTTON_TYPE_CLASSES = {
  google:
    "flex items-center justify-center py-4 px-6 rounded capitalize transition-all  hover:bg-white hover:text-black text-slate-50 bg-sky-500/100 ",
  inverted:
    "flex items-center justify-center py-4 px-6 rounded capitalize transition-all  hover:bg-white hover:text-black text-slate-50 bg-black ",
  danger:
    "flex items-center justify-center py-2 px-6 rounded capitalize transition-all  hover:bg-white hover:text-black text-slate-50 bg-[#e63946] mt-auto",
};

function Button({ children, buttonType, isLoading, ...otherProps }) {
  return (
    <button
      className={BUTTON_TYPE_CLASSES[buttonType]}
      disabled={isLoading}
      {...otherProps}
    >
      {isLoading && <div className="loader-mini"></div>}
      {!isLoading && children}
    </button>
  );
}

export default Button;
