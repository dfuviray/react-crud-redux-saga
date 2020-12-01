import { useState } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

import Header from "./components/header/Header";
import { Table, TableHeader, TableItem } from "./components/table/Table";
import Modal from "./components/modal/Modal";

function App() {
  const [open, setOpen] = useState(false);
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
        <TableItem data={items} />
      </Table>
    </div>
  );
}

export default App;
