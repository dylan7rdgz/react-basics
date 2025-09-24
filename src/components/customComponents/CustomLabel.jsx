import './CustomLabel.css';

function CustomLabel({ labelFor, labelText, className }) {
    // Combine the base class with any class passed from the parent
    const combinedClassName = `custom-label ${className || ''}`.trim();

    return <label htmlFor={labelFor} className={combinedClassName}>{labelText}</label>;
}

export default CustomLabel;