import { useState } from "react";
import './textBox.css'

export default function Textbox({
  label,
  required = false,
  className = "",
  id,
  type = "text",
  maxLength = 500,
  showCounter = false,
  value,
  onChange,
  ...props
}) {
  const [internalValue, setInternalValue] = useState("");
  const inputId = id || `textbox-${Math.random().toString(36).substr(2, 9)}`;

  const isTextarea = type === "textarea";
  const currentValue = value !== undefined ? value : internalValue;
  const charCount = currentValue ? currentValue.length : 0;
  const isNearLimit = charCount > maxLength * 0.8;
  const isOverLimit = charCount > maxLength;

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (onChange) {
      onChange(e);
    } else {
      setInternalValue(newValue);
    }
  };

  const InputComponent = isTextarea ? "textarea" : "input";

  return (
    <div className={`textbox-container ${className}`}>
      {label && (
        <label htmlFor={inputId} className="textbox-label">
          {label}
          {required && <span className="required-asterisk">*</span>}
        </label>
      )}
      <InputComponent
        id={inputId}
        className={`textbox-input ${isTextarea ? "textbox-textarea" : ""}`}
        value={currentValue}
        onChange={handleChange}
        maxLength={isTextarea ? maxLength : undefined}
        {...(isTextarea ? {} : { type })}
        {...props}
      />
      {isTextarea && showCounter && (
        <div className="character-counter">
          <span
            className={`counter ${
              isOverLimit ? "over-limit" : isNearLimit ? "near-limit" : ""
            }`}
          >
            {charCount}/{maxLength}
          </span>
        </div>
      )}
    </div>
  );
}
