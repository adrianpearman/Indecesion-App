// NPM Modules
import Modal from "react-modal";

const OptionModal = ({ closeModal, selectedOption }) => {
  return (
    <Modal
      // !! - is used to convert undefined to true and vice versa
      isOpen={!!selectedOption}
      contentLabel="Option Selected"
      onRequestClose={closeModal}
      ariaHideApp={false}
      // will allow for the ease-out to be completed
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Option Selected</h3>
      {selectedOption ? <p className="modal__body">{selectedOption}</p> : null}
      <button className="button" onClick={closeModal}>
        Thanks!
      </button>
    </Modal>
  );
};

export default OptionModal;
