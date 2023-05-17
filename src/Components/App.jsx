import React, { Component, useEffect, useRef, useState } from "react";

// Stateful Components
import AddOption from "./AddOption";

// Stateless Components
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";

const App = () => {
  // State
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(undefined);

  // Functions
  const handleAddOption = (option) => {
    if (!option) {
      return "Please enter an option";
    } else if (options.indexOf(option) > -1) {
      return "This options is already added";
    }

    const newState = [...options];
    newState.push(option);
    setOptions(newState);
    updateLocalStorage(newState);
  };
  const handleClearSelectedModal = () => setSelectedOption(undefined);
  const handleDeleteOptions = () => setOptions([]);
  const handleDeleteSingleOption = (optionToRemove) => {
    const oldState = [...options];
    const newState = oldState.filter((option) => {
      return optionToRemove !== option;
    });
    setOptions(newState);
    updateLocalStorage(newState);
  };
  const handleRandomPick = () => {
    const randomNum = Math.floor(Math.random() * options.length);
    const randOption = options[randomNum];
    setSelectedOption(randOption);
  };
  const updateLocalStorage = (value) => {
    const json = JSON.stringify(value);
    localStorage.setItem("options", json);
  };
  // Lifecycles
  useEffect(() => {
    // verifies whether the data submitted is valid JSON
    const json = localStorage.getItem("options");
    const options = JSON.parse(json);
    if (options) setOptions(options);
  }, []);

  return (
    <div className="container__background">
      <Header />
      <div className="container">
        <Action
          handleRandomPick={handleRandomPick}
          hasOptions={options.length > 0}
          options={options}
        />
        <div className="widget">
          <Options
            options={options}
            deleteOptionsHandle={handleDeleteOptions}
            deleteOption={handleDeleteSingleOption}
          />
          <AddOption handleAddOption={handleAddOption} />
        </div>
      </div>
      <OptionModal
        selectedOption={selectedOption}
        closeModal={handleClearSelectedModal}
      />
    </div>
  );
};

export default App;
