const Action = ({ handleRandomPick, hasOptions }) => (
  <div>
    <button
      className="big-button"
      onClick={handleRandomPick}
      disabled={!hasOptions}
    >
      What Should I do?
    </button>
  </div>
);

export default Action;
