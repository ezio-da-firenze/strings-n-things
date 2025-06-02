import { useState, useContext } from "react";
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
} from "../../utils/Firebase/firebase.utils";
import FormInput from "../FormInput/FormInput.component";
import "./SignInForm.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";

import { UserContext } from "../../Context/User.context";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case "auth/invalid-credential":
                    alert("incorrect password or email");
                    break;
                case "auth/user-not-found":
                    alert("no user associated with this email");
                    break;
                default:
                    console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                <FormInput
                    label="Password"
                    type="password"
                    required
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button
                        type="button"
                        onClick={signInWithGoogle}
                        buttonType={BUTTON_TYPE_CLASSES.google}
                    >
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
