import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

function SignIn() {
  return (
    <div className="w-full max-w-[1200px] flex items-center justify-between flex-wrap px-10 py-4">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default SignIn;
