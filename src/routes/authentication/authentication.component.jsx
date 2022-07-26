import SignIn from "../../components/sign-in/sign-in-form.component";
import SignUpForm from "../../components/signup/signup-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="auth-container">
      <SignIn />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
