import Table from "../components/Table";
// import { useState } from "react";

const TablePage = () => {
  const tableData = [
    { name: "Apple", color: "bg-red-400", score: 5 },
    { name: "Banana", color: "bg-yellow-500", score: 3 },
    { name: "Orange", color: "bg-orange-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  const config = [
    { label: "Name", render: (fruit) => fruit.name },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      header: (fruit) => <th className="bg-red-500">Score</th>,
      //   sortValue:
    },
  ];

  const keyFn = (fruit) => fruit.name;
  return (
    <div>
      <Table data={tableData} config={config} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;
