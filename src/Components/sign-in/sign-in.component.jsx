import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  createAuthUserFromEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopUp,
  signInAuthUserFromEmailAndPassword,
} from "../../utilities/firebase/firebase.utilities";
import "./sign-in.styles.scss";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopUp();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    };

    try {
      const response = await signInAuthUserFromEmailAndPassword(
        email,
        password
      );
      console.log(response);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("No user associated with email");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an Account</h2>
      <span>Sign Up with Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          value={email}
          onChange={handlerChange}
        />
        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          value={password}
          onChange={handlerChange}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={"google"}
            type="button"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
