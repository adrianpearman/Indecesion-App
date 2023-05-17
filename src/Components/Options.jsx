// Components
import Option from "./Option";

const Options = ({ deleteOption, deleteOptionsHandle, options }) => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Current Options:</h3>
        {options.length > 0 ? (
          <h3 className="widget-header__title">
            Options available: {options.length}
          </h3>
        ) : null}
        <button className="button button--link" onClick={deleteOptionsHandle}>
          {options.length > 0 ? "Clear Options" : "No Options Available"}
        </button>
      </div>
      {options.length > 0 ? null : (
        <p className="widget__message">Please add an option</p>
      )}
      {options.map((option, index) => {
        return (
          <Option
            key={option}
            value={option}
            deleteOption={deleteOption}
            index={index + 1}
          />
        );
      })}
    </div>
  );
};

export default Options;
