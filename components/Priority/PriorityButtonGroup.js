import PriorityButton from "./PriorityButton";

export default function PriorityButtonGroup({ selected, setSelected }) {
  const priorityTypes = [0, 1, 2];
  return (
    <>
      {priorityTypes.map((priority) => (
        <PriorityButton
          key={priority}
          priority={priority}
          isActive={selected === priority}
          onClick={() => setSelected(priority)}
        />
      ))}
    </>
  );
}
