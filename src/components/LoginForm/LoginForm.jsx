
import EmailField from "../EmailField/EmailField";
import LoginButton from "../LoginButton/LoginButton";
import PasswordField from "../PasswordField/PasswordField";


function LoginForm(){
    return(
        <div>
            <h2>Login</h2>
            <EmailField/>
            <PasswordField/>
            <LoginButton/>
        </div>
    );

}
export default LoginForm