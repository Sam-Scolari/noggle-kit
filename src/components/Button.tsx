import Noggle from "./Noggle";

export default function Button(props: { onClick?: any; dark?: boolean }) {
  return (
    <button
      onClick={props.onClick}
      style={{
        color: props.dark ? "#F4F4F4" : "#282828",
        "background-color": props.dark ? "#282828" : "#F4F4F4",
        "border-color": props.dark ? "#4B4B4B" : "#E3E0E0",
      }}
      class="rounded-xl py-2 select-none px-6 flex items-center gap-2  border-2 font-medium"
    >
      Sign in with{" "}
      <Noggle color={props.dark ? "#F4F4F4" : "#282828"} size={32} mono />
    </button>
  );
}
