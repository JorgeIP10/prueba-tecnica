import BaseTemplate from "../components/BaseTemplate";
import LoginForm from "../components/LoginPage/LoginForm";

function LoginPage() {
  return (
    <>
      <BaseTemplate content={
        <LoginForm/>
      }/>
    </>
  )
}

export default LoginPage;