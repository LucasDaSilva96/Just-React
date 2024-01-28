function Increase_DecreaseItemButton({ item, handler, children }) {
  return (
    <button
      onClick={() => handler(item)}
      className={
        children === "+"
          ? "py-1 text-slate-100 px-2 bg-black rounded"
          : "py-1 text-slate-100 px-[11px] bg-black rounded"
      }
    >
      {children}
    </button>
  );
}

export default Increase_DecreaseItemButton;
