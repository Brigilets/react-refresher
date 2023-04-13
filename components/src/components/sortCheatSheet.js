//sorting numbers in ascending order
const data = [5, 1, 6, 8, 2];
data.sort((a, b) => {
  return a - b;
});

//sorting strings
// By default processes capital leters to the beggining of the array regardless the value
const strings = ["a", "c", "D", "z", "V"];
strings.sort((a, b) => a.localeCompare(b));

//sorting array of objects
const veggies = [
  { name: "carrot", price: 2, weight: 12 },
  { name: "tomato", price: 1, weight: 5 },
  { name: "cucumber", price: 3, weight: 8 },
];

function getSortValue(item) {
  return item.name;
}

const order = "asc";
veggies.sort((a, b) => {
  const valueA = getSortValue(a);
  const valueB = getSortValue(b);

  const reverseOrder = order === "asc" ? 1 : -1;

  if (typeof valueA === "string") {
    return valueA.localeCompare(valueB) * reverseOrder;
  }
  return (valueA - valueB) * reverseOrder;
});
