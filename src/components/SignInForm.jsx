import { useState } from "react";
import FormInputField from "./FormInputField";
import Button from "./Button";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWith_EmailAndPassword,
} from "../utils/firebase/firebase.utils";
import toast from "react-hot-toast";
import Loader from "./Loader";
import { redirect } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formField, setFormField] = useState(defaultFormFields);
  const { email, password } = formField;
  const [isLoading, setIsLoading] = useState(false);

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormField({ ...formField, [name]: value });
  };

  const resetFormFields = () => setFormField(defaultFormFields);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const user = await signInWith_EmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      toast.error(error.code.split("/")[1]);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className="min-h-[326px] flex flex-col items-center gap-2">
      <h1 className="text-3xl">I already have an account</h1>
      <p className="text-lg pb-2">Sign in with your email and password</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center min-w-[370px] max-w-[550px] gap-8"
      >
        <FormInputField
          placeholder="Email*"
          required
          autoComplete="email"
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
          className="py-1 px-1 outline-2  bg-[#eff1ed] border-2 w-[300px] text-center rounded"
        />
        <FormInputField
          placeholder="Password*"
          required
          autoComplete="current-password"
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
          className="py-1 px-1 outline-2  bg-[#eff1ed] border-2 w-[300px] text-center rounded"
        />

        <div className="flex items-center gap-4">
          <Button buttonType="inverted" type="submit">
            Sign in
          </Button>
          <Button buttonType="google" type="button" onClick={signInWithGoogle}>
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
