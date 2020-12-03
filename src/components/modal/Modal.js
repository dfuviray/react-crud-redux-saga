import "./modal.css";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

const Modal = ({
  onClose,
  open,
  postLocationRequested,
  updateLocationRequested,
  addData,
  type,
  editData,
}) => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });

  function onSubmit(data) {
    if (type === "edit") {
      updateLocationRequested({ id: editData.id, ...data });
      onClose();
      return;
    }
    postLocationRequested(data);
    onClose();
  }

  if (!open) return null;

  return (
    <div className="Modal">
      <div className="ModalHeader">
        <p>Title</p>
        <button className="Close" onClick={onClose}>
          <i className="fa fa-close" aria-hidden="true"></i>
        </button>
      </div>
      <div className="ModalBody">
        <h2 className="ModalTitle">{type === "edit" ? "Edit" : "Add"} Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="location">Location</label>
          <input
            ref={register({
              required: true,
            })}
            name="location"
            id="location"
            placeholder="Location"
            defaultValue={type === "edit" ? editData.location : null}
          />
          {errors.location && (
            <p className="Error">Location is {errors.location.type}</p>
          )}
          <label htmlFor="description">Description</label>
          <input
            ref={register({
              required: true,
            })}
            name="description"
            id="description"
            placeholder="Description"
            defaultValue={type === "edit" ? editData.description : null}
          />
          {errors.description && (
            <p className="Error">Description is {errors.description.type}</p>
          )}
          <button className="Add" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { data: state.data };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postLocationRequested: (data) =>
      dispatch({ type: "POST_LOCATIONS_REQUEST", data }),
    updateLocationRequested: (data) =>
      dispatch({ type: "UPDATE_LOCATIONS_REQUEST", data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
