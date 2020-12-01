import "./table.css";

export const Table = (props) => {
  return <div className="Table">{props.children}</div>;
};

export const TableHeader = ({ data }) => {
  return <div className="TableRow">{renderHeader(data)} </div>;
};

export const TableItem = ({ data }) => {
  return <div className="TableBody">{renderItems(data)}</div>;
};

const renderHeader = (data) => {
  return data.map((d) => (
    <div className="TableCol" key={d}>
      {d}
    </div>
  ));
};

const renderItems = (data) => {
  return data.map((d) => (
    <div className="TableRow Item" key={d.id}>
      <div className="TableCol">{d.id}</div>
      <div className="TableCol">{d.location}</div>
      <div className="TableCol">{d.description}</div>
      <div className="TableCol">
        <button>
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </button>
        <button>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  ));
};
