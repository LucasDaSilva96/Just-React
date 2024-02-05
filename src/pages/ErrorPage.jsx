import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <section className="w-full min-h-[100dvh] bg-[#dad7cd] flex flex-col items-center justify-center gap-4">
      <h1 className="px-4 pl-6 font-black text-3xl text-center ">
        Ops... Something went wrong.
      </h1>
      <Button buttonType="inverted" onClick={() => navigate("/")}>
        Go to home page
      </Button>
    </section>
  );
}

export default ErrorPage;
