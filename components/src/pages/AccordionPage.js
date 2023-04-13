import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "jhnjq",
      label: "Can I use React on the project?",
      content:
        "Yes,You can use React on as many projects you like.Yes,You can use React on as many projects you like.",
    },
    {
      id: "kijunjbgh",
      label: "Can I use Javascript on the project?",
      content:
        "Yes,You can use JS on as many projects you like.Yes,You can use JS on as many projects you like.",
    },
    {
      id: "hikqsm",
      label: "Can I use CSS on the project?",
      content:
        "Yes, you need to make it pretty!Yes, you need to make it pretty!Yes, you need to make it pretty!",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
