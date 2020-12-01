import { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

import Header from "./components/header/Header";
import { Table, TableHeader, TableItem } from "./components/table/Table";
import Modal from "./components/modal/Modal";
import Loading from "./components/loading/Loading";

function App({ getLocationsRequested, data }) {
  const { locations, loading } = data;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    getLocationsRequested();
  }, []);

  const headerItems = ["id", "location", "description", ""];
  const items = [
    {
      id: "11",
      location: "281 Konopelski Club2",
      description: "solid state sexy2",
    },
    {
      id: "12",
      location: "100 Enos Street",
      description: "payment",
    },
    {
      id: "13",
      location: "6852 Keebler Loaf",
      description: "generate monitoring",
    },
    {
      id: "14",
      location: "7068 Kulas Lights",
      description: "invoice New Taiwan Dollar",
    },
  ];

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Modal onClose={handleClose} open={open} />
      <Header onOpen={() => setOpen(true)} />
      <Table>
        <TableHeader data={headerItems} />
        {loading && (
          <div className="Loading">
            <Loading />
          </div>
        )}
        {!loading && <TableItem data={locations} />}
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
