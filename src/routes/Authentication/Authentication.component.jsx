import { useEffect } from "react";
import {
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth,
    auth,
} from "../../utils/firebase/firebase.utils";
import "./Authentication.styles.scss";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/SignUpForm/SignUpForm.component";
import SignInForm from "../../components/SignInForm/SignInForm.component";

const Authentication = () => {
    useEffect(() => {
        const fetchRedirectResult = async () => {
            const response = await getRedirectResult(auth);
            if (response) {
                await createUserDocumentFromAuth(response.user);
            }
        };

        fetchRedirectResult();
    }, []);

    // const logGoogleUser = async () => {
    //     const response = await signInWithGooglePopup();
    //     console.log(response);
    // };
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div className="authentication-container">
            {/* <h1>Sign In Page</h1> */}
            {/* <button onClick={logGoogleUser}>Signin with Google Popup</button> */}
            {/* <button onClick={signInWithGoogleRedirect}>
                Signin with Google Redirect
            </button> */}
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default Authentication;
