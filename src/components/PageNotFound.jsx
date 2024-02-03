import { useNavigate } from "react-router-dom";
import Button from "./Button";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-[100dvh] bg-[#dad7cd] flex flex-col items-center justify-center gap-8">
      <h1 className="font-black text-3xl text-center pb-3 capitalize">
        Page not found
      </h1>
      <Button buttonType="inverted" onClick={() => navigate("/")}>
        Go to home page
      </Button>
    </div>
  );
}

export default PageNotFound;
