import { useState, useContext } from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/Firebase/firebase.utils";
import FormInput from "../FormInput/FormInput.component";
import "./SignUpForm.styles.scss";
import Button from "../Button/Button.component";
import { UserContext } from "../../Context/User.context";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            await createUserDocumentFromAuth(user, {
                displayName,
            });
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Can't create user already in use");
            } else {
                console.error("Error in user craetion", error);
            }
        }
    };
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type="text"
                    required
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                />
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
                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;
