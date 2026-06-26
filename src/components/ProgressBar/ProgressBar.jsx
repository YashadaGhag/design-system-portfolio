import PropTypes from "prop-types";

const ProgressBar = ({ currentStep = 1, completedSteps, totalSteps = 4 }) => {
  const fillSteps = completedSteps ?? currentStep;
  const percentage = (fillSteps / totalSteps) * 100;

  return (
    <div className="flex flex-col gap-sp8 items-end w-full">
      <div className="h-[10px] w-full rounded-[40px] bg-neutral-100">
        <div
          className="h-[10px] rounded-[100px] bg-primary-500 transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-body-small text-neutral-500 text-right">
        {currentStep} of {totalSteps}
      </span>
    </div>
  );
};

ProgressBar.propTypes = {
  /** Which question the user is on (shown in label) */
  currentStep: PropTypes.number,
  /** How many steps completed via Continue (controls fill width) */
  completedSteps: PropTypes.number,
  /** Total number of steps */
  totalSteps: PropTypes.number,
};

export default ProgressBar;
