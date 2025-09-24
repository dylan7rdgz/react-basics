import "./Button.css";
function Button({onClick, text}) {
    return (
        <button onClick={onClick} className="custom-button">{text}</button>
    );
}

export default Button;