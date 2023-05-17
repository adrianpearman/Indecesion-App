const Option = ({ deleteOption, index, value }) => {
  return (
    <div className="option">
      <p className="option__text">
        {index} - {value}
      </p>
      <button
        className="button button--link"
        onClick={() => {
          deleteOption(value);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Option;
