import PropTypes from "prop-types";

const Radio = ({ label, selected = false, onChange, name, value }) => {
  return (
    <label
      className={`w-full rounded-sm p-sp12 flex items-center gap-sp8 cursor-pointer border transition-colors ${
        selected
          ? "bg-primary-50 border-primary-500"
          : "bg-white border-neutral-100 hover:border-primary-200"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected}
        onChange={onChange}
        className="sr-only"
      />
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {selected ? (
          <>
            <circle cx="9" cy="9" r="8.25" stroke="#5065D3" strokeWidth="1.5" />
            <circle cx="9" cy="9" r="3" fill="#5065D3" />
          </>
        ) : (
          <circle cx="9" cy="9" r="8.25" stroke="#B0B3BF" strokeWidth="1.5" />
        )}
      </svg>
      <span
        className={`text-body-large font-regular ${
          selected ? "text-primary-500" : "text-neutral-600"
        }`}
      >
        {label}
      </span>
    </label>
  );
};

Radio.propTypes = {
  /** Text label */
  label: PropTypes.string.isRequired,
  /** Whether this radio is selected */
  selected: PropTypes.bool,
  /** Click handler */
  onChange: PropTypes.func,
  /** Radio group name for accessibility */
  name: PropTypes.string,
  /** Value for this option */
  value: PropTypes.string,
};

export default Radio;
