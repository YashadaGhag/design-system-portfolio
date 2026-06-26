import PropTypes from "prop-types";

const Checkbox = ({ label, checked = false, onChange }) => {
  return (
    <label className="flex items-center gap-sp8 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <div
        className={`w-6 h-6 rounded-xs flex items-center justify-center shrink-0 ${
          checked
            ? "bg-primary-500"
            : "border-2 border-neutral-300 bg-white"
        }`}
      >
        {checked && (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M20 6L9 17L4 12"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <span className="text-body-large font-regular text-neutral-600">
        {label}
      </span>
    </label>
  );
};

Checkbox.propTypes = {
  /** Text label */
  label: PropTypes.string.isRequired,
  /** Whether checked */
  checked: PropTypes.bool,
  /** Change handler */
  onChange: PropTypes.func,
};

export default Checkbox;
