import { useState, useRef } from "react";
import PropTypes from "prop-types";

const MultiselectChips = ({
  values = [],
  onChange,
  placeholder = "Type to add more",
  recommendations = [],
  maxSelections = 5,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);
  const atMax = values.length >= maxSelections;

  const addValue = (val) => {
    const trimmed = val.trim();
    if (!trimmed || values.includes(trimmed) || atMax) return;
    onChange?.([...values, trimmed]);
  };

  const removeValue = (val) => {
    onChange?.(values.filter((v) => v !== val));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addValue(inputValue);
      setInputValue("");
    }
    if (e.key === "Backspace" && !inputValue && values.length > 0) {
      removeValue(values[values.length - 1]);
    }
  };

  const availableRecommendations = recommendations.filter(
    (r) => !values.includes(r)
  );

  return (
    <div className="w-full">
      {/* Input container */}
      <div
        className={`w-full rounded-sm border bg-white px-sp12 py-sp8 flex flex-wrap items-center gap-sp8 ${
          focused ? "border-primary-500" : "border-neutral-100"
        }`}
        onClick={() => inputRef.current?.focus()}
      >
        {values.map((val) => (
          <span
            key={val}
            className="bg-primary-50 border border-primary-200 rounded-lg p-sp8 flex items-center gap-sp8"
          >
            <span className="text-body-small font-regular text-primary-500">
              {val}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeValue(val);
              }}
              className="text-primary-500 cursor-pointer shrink-0"
              aria-label={`Remove ${val}`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </span>
        ))}
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={atMax}
          placeholder={atMax ? "Maximum reached" : placeholder}
          className="flex-1 min-w-[120px] bg-transparent outline-none text-body-small font-regular text-neutral-700 placeholder:text-neutral-500 disabled:cursor-not-allowed"
        />
      </div>

      {/* Recommendations */}
      {!atMax && availableRecommendations.length > 0 && (
        <div className="flex items-center gap-sp8 mt-sp12">
          <span className="text-body-small font-regular text-neutral-800">
            Recommended:
          </span>
          {availableRecommendations.map((rec) => (
            <button
              key={rec}
              type="button"
              onClick={() => addValue(rec)}
              className="bg-white border border-primary-200 rounded-lg p-sp8 text-body-small text-primary-500 cursor-pointer hover:bg-primary-50 transition-colors"
            >
              {rec}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

MultiselectChips.propTypes = {
  /** Currently selected values */
  values: PropTypes.arrayOf(PropTypes.string),
  /** Called with updated array when chips are added/removed */
  onChange: PropTypes.func,
  /** Input placeholder text */
  placeholder: PropTypes.string,
  /** Suggested values shown below input */
  recommendations: PropTypes.arrayOf(PropTypes.string),
  /** Maximum number of selections allowed */
  maxSelections: PropTypes.number,
};

export default MultiselectChips;
