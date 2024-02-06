import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

function SignIn() {
  return (
    <section className="w-full flex items-center justify-evenly flex-wrap px-4 py-4">
      <SignInForm />
      <SignUpForm />
    </section>
  );
}

export default SignIn;
