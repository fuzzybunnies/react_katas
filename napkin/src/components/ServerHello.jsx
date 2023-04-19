import React from "react";

function ServerHello() {
  const [data, setData] = React.useState(null);

  // this will execute each time the component is rendered
  React.useEffect(
    () => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    },
    [
      /* unless some reactive elements are in here */
    ]
  );

  return (
    <div className="max-w-lg mx-auto">
      <div>ServerHello says...</div>
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default ServerHello;
