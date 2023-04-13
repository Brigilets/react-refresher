import { Fragment } from "react";

//wrapper to for the element without addinga new element, so does Fragment from react
// REPLACED BY FRAGMENT
// function Echo({ children }) {
//   return children;
// }

const Table = ({ data, config, keyFn }) => {
  const rendredHeaders = config.map((column) =>
    column.header ? (
      <Fragment key={column.label}>{column.header()}</Fragment>
    ) : (
      <th key={column.label}>{column.label}</th>
    )
  );

  const rendredRows = data.map((rowData) => {
    const renderedCells = config.map((column) => (
      <td key={column.label} className="p-2">
        {column.render(rowData)}
      </td>
    ));
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {/* V1 stuck to fruits values
        <td className="p-3">{rowData.name}</td>
        <td className="p-3 ">
          <div className={`p-3 m-2 ${rowData.color}`}></div>
        </td>
        <td className="p-3">{rowData.score}</td> */}
        {/* V2 taking data from config, but assuming it has only 3 values
        <td className="p-3">{config[0].render(rowData)}</td>
        <td className="p-3 ">{config[1].render(rowData)}</td>
        <td className="p-3">{config[2].render(rowData)}</td>*/}
        {/* v3, fully reusable */}
        {renderedCells}
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{rendredHeaders}</tr>
      </thead>

      <tbody>{rendredRows}</tbody>
    </table>
  );
};

export default Table;
