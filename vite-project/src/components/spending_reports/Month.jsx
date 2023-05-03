import Week from "./Week";

export default function Month({ children, monthName }) {
  return (
    <div>
      {monthName}
      <div>{children}</div>
    </div>
  );
}
