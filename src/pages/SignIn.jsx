import { useSelector } from "react-redux";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import { selectCurrentUser } from "../store/user/user-selector";
import React from "react";
import Dashboard from "../components/Dashboard";

function SignIn() {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <React.Fragment>
      {!currentUser && (
        <section className="w-full flex items-center justify-evenly flex-wrap px-4 py-4">
          <SignInForm />
          <SignUpForm />
        </section>
      )}
      {currentUser && <Dashboard />}
    </React.Fragment>
  );
}

export default SignIn;
