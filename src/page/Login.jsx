import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useState } from 'react';
import Button from '../component/homepage/Button'


function Login() {
    const clientId = "648341299149-1o6kq6frd26fd9pibhaivjrvsqpso70v.apps.googleusercontent.com";

    const [loginButton, setLoginButton] = useState(true);
    const [logoutButton, setLogoutButton] = useState(false);

    const loginSuccess = (res) => {
        console.log("LogSuccess : ", res.profileObj);
        localStorage.setItem("token", res.tokenId)
        setLoginButton(false);
        setLogoutButton(true);
        window.location.reload();
    }

    const failureSuccess = (res) => {
        console.log("Login Failed! : ", res);
    }

    const signoutSuccess = () => {
        alert("You've been signed out successfully.");
        setLoginButton(true);
        setLogoutButton(false);
        window.location.reload();
        localStorage.removeItem("token")
        console.clear();
    }

    const user = localStorage.getItem("token")
    console.log(user);

    return (

        <>
            <section class="h-screen">
                <div class="container px-6 py-12 h-full">
                    <div class="ml-40 items-center flex justify-center flex-wrap h-full g-6 text-gray-800">
                        <div class="md:w-8/12 lg:w-4/12 mb-12 md:mb-0">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                class="w-full"
                                alt="Phone"
                            />
                        </div>

                        <div class="flex justify-center">
                            {user ?
                                <>

                                    <GoogleLogout
                                        clientId={clientId}
                                        buttonText="Logout"
                                        onLogoutSuccess={signoutSuccess}
                                    />
                                    <div class="ml-10">
                                        <Button title="Homepage" url="/" />
                                    </div>

                                </>
                                :
                                <>
                                    <GoogleLogin
                                        clientId={clientId}
                                        buttonText="Continue With Google"
                                        onSuccess={loginSuccess}
                                        onFailure={failureSuccess}
                                        cookiePolicy={'single_host_origin'}
                                    />
                                </>
                            }
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Login;