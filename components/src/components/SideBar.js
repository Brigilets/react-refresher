import Link from "./Link";

const SideBar = () => {
  const links = [
    { label: "Accordion", path: "/accordion" },
    { label: "Dropdown", path: "/" },
    { label: "Buttons", path: "/buttons" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2 "
        key={link.label}
        to={link.path}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 flex overflow-y-auto  flex-col items-start">
      {renderedLinks}
    </div>
  );
};

export default SideBar;
