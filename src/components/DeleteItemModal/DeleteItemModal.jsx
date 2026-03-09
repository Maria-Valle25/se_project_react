import "./DeleteItemModal.css";

function DeleteItemModal({ activeModal, onClose, onConfirm }) {
  return (
    <div
      className={`modal ${
        activeModal === "delete-confirmation" ? "modal__opened" : ""
      }`}
    >
      <div className="modal__content modal__content_type_confirmation">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>

        <p className="modal__confirmation-text">
          Are you sure you want to delete this item?
          <br />
          This action is irreversible.
        </p>

        <button
          type="button"
          className="modal__confirm-btn"
          onClick={onConfirm}
        >
          Yes, delete item
        </button>

        <button type="button" className="modal__cancel-btn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteItemModal;
