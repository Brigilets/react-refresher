import classNames from "classnames";

const Skeleton = ({ times, className }) => {
  const outterClassNames = classNames(
    "relative",
    "overflow-hidden",
    "bg-gray-200",
    "rounded-sm",
    "mb-2.5",
    className
  );
  const innerClassNames = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full", // allows inner div to move out of outter div
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white ",
    "to-gray-200"
  );

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div className={outterClassNames} key={i}>
          <div className={innerClassNames} />
        </div>
      );
    });
  return boxes;

  //   return <div>skeleton</div>;
};
export default Skeleton;
