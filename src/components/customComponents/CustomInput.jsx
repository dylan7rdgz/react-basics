import './CustomInput.css';

function CustomInput({ id, inputType, className }) {
    // Combine the base class with any class passed from the parent
    const combinedClassName = `custom-input ${className || ''}`.trim();

    return <input id={id} type={inputType} className={combinedClassName} />;
}

export default CustomInput;