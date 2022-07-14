import SignUp from "../../Components/sign-up/sign-up.component";
import SignInForm from "../../Components/sign-in/sign-in.component";
import "./authentication.styles.scss";

const Authentication = () => {
  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopUp();
  //   createUserDocumentFromAuth(user);
  // };

  // useEffect(
  //   () => async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = createUserDocumentFromAuth(response.user);
  //     }
  //   },
  //   []
  // );

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUp />
    </div>
  );
};

export default Authentication;
