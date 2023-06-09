const NonReusableTable = ({ data }) => {
  const rendredRows = data.map((item) => {
    return (
      <tr className="border-b" key={item.name}>
        <td className="p-3">{item.name}</td>
        <td className="p-3 ">
          <div className={`p-3 m-2 ${item.color}`}></div>
        </td>
        <td className="p-3">{item.score}</td>
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          <th>Fruit</th>
          <th>Color</th>
          <th>Score</th>
        </tr>
      </thead>

      <tbody>{rendredRows}</tbody>
    </table>
  );
};

export default NonReusableTable;
