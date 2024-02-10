import { useState } from "react";
import toast from "react-hot-toast";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
import FormInputField from "./FormInputField";
import Loader from "./Loader";
import Button from "./Button";
import { updateProfile } from "firebase/auth";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formField, setFormField] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formField;
  const [isLoading, setIsLoading] = useState(false);

  const resetFormFields = () => setFormField(defaultFormFields);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error("The passwords don't match");
      return;
    }

    try {
      setIsLoading(true);
      const res = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(res.user, {
        displayName: formField.displayName,
      });
      await res.user.updateProfile({ displayName: formField.displayName });
      await res.user.reload();

      toast.success("Account successfully created");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Cannot create user, email already in use");
      } else {
        toast.error(error);
      }
    } finally {
      resetFormFields();
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormField({ ...formField, [name]: value });
  };

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-3xl">I do not have a account</h1>
      <p className="text-lg pb-2">Sign up with your email and password</p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center min-w-[370px] max-w-[550px] gap-4"
      >
        <FormInputField
          placeholder="Display name*"
          required
          autoComplete="given-name"
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          className="py-1 px-1 outline-2  bg-[#eff1ed] border-2 w-[300px] text-center rounded"
        />

        <FormInputField
          placeholder="Email*"
          required
          autoComplete="email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          className="py-1 px-1 outline-2  bg-[#eff1ed] border-2 w-[300px] text-center rounded"
        />

        <FormInputField
          placeholder="Password*"
          required
          autoComplete="off"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          className="py-1 px-1 outline-2  bg-[#eff1ed] border-2 w-[300px] text-center rounded"
        />
        <FormInputField
          placeholder="Confirm Password*"
          required
          autoComplete="off"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          className="py-1 px-1 outline-2  bg-[#eff1ed] border-2 w-[300px] text-center rounded"
        />

        <Button buttonType="inverted">Sign up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
