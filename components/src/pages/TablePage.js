import SortableTable from "../components/SortableTable";

const TablePage = () => {
  const tableData = [
    { name: "Apple", color: "bg-red-400", score: 5 },
    { name: "Banana", color: "bg-yellow-500", score: 3 },
    { name: "Orange", color: "bg-orange-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
    { name: "Cherry", color: "bg-red-700", score: 2.5 },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      //   header: (fruit) => <th className="bg-red-500">Score</th>,
      sortValue: (fruit) => fruit.score,
    },
    {
      label: "Squared Score",
      render: (fruit) => fruit.score ** 2,
      sortValue: (fruit) => fruit.score * fruit.score,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };
  return (
    <div>
      <SortableTable data={tableData} config={config} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;
