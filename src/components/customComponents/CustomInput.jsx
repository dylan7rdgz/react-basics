import './CustomInput.css';

function CustomInput({ id, inputType, className, onChange }) {
    // Combine the base class with any class passed from the parent
    const combinedClassName = `custom-input ${className || ''}`.trim();
    return <input id={id} type={inputType} className={combinedClassName} onChange={onChange}/>;
}

export default CustomInput;