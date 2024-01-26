import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../utils/firebase/firebase.utils";

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      Sign In page
      <button onClick={logGoogleUser}>Sign in</button>
    </div>
  );
}

export default SignIn;
