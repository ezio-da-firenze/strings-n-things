import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
} from "./Button.styles.jsx";

export const BUTTON_TYPE_CLASSES = {
    base: "base",
    google: "google-sign-in",
    inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
    ({
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType]);

const Button = ({ children, buttonType, isLoading = false, ...otherProps }) => {
    const CustomButton = getButton(buttonType);

    return (
        <CustomButton
            disabled={isLoading || otherProps.disabled}
            {...otherProps}
        >
            {isLoading ? "Please wait..." : children}
        </CustomButton>
    );
};

export default Button;
