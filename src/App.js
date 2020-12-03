import { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

import Header from "./components/header/Header";
import { Table, TableHeader, TableItem } from "./components/table/Table";
import Modal from "./components/modal/Modal";
import ModalDelete from "./components/modal/ModalDelete";
import Loading from "./components/loading/Loading";

function App({ getLocationsRequested, data }) {
  const { locations, loading } = data;
  const [open, setOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteSelected, setDeleteSelected] = useState(null);
  const [editSelected, setEditSelected] = useState(null);

  useEffect(() => {
    getLocationsRequested();
  }, []);

  const headerItems = ["id", "location", "description", ""];

  const handleClose = () => {
    setOpen(false);
    setEditSelected(null);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleSetDeleteSelected = (data) => {
    setOpenDeleteModal(true);
    setDeleteSelected(data);
  };

  const handleSetEditSelected = (data) => {
    setEditSelected(data);
    setOpen(true);
  };

  return (
    <div className="App">
      <Modal
        onClose={handleClose}
        open={open}
        type={editSelected ? "edit" : "add"}
        editData={editSelected ? editSelected : null}
      />

      <ModalDelete
        data={deleteSelected}
        onClose={handleCloseDeleteModal}
        open={openDeleteModal}
      />
      <Header onOpen={() => setOpen(true)} />
      <Table>
        <TableHeader data={headerItems} />
        {loading && (
          <div className="Loading">
            <Loading />
          </div>
        )}
        {!loading && (
          <TableItem
            data={locations}
            onDeleteSelected={handleSetDeleteSelected}
            onEditSelected={handleSetEditSelected}
          />
        )}
      </Table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { data: state.data };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLocationsRequested: () => dispatch({ type: "GET_LOCATIONS_REQUESTED" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
