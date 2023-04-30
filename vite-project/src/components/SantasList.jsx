import { useState } from "react";
// Santa wants to simplify his life and offer children the possiblity to enter their wishlist via an online form.
// The form should be a React component and should contain:
//     an input field for the child's name (with id 'name')
//     a text area to describe the wish (id: 'wish')
//     a drop-down indicating the priority of the wish, from 1 to 5 - default is 1 (id: 'priority')
//     the keys in the state to store the corresponding values should be named the same as the element's id
//     an onSubmit action calling the function handleSubmit
//     a function called handleSubmit, which
//         calls send (a function that is already provided as part of the injected properties props)
//         passes the current state as a parameter to send
//         calls event.preventDefault
//     it should be a controlled component (i.e. using onChange to bind input to the component's state)

export default function SantasList({ send }) {
  const [name, setName] = useState("");
  const [wish, setWish] = useState("");
  const [priority, setPriority] = useState("");

  function handleSubmit(e) {
    if (send) {
      console.log("sending");
      const data = { name: name, wish: wish, priority: priority };
      send(data);
    }
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4 w-full">
          <label className="text-gray-600">
            What's your name?
            <input
              name="name"
              value={name}
              autoFocus={true}
              placeholder="John Smith"
              required={true}
              className="w-full p-1 pl-2 outline outline-1 rounded-md outline-gray-300"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="text-gray-600">
            What do you want for Christmas?
            <textarea
              name="wish"
              value={wish}
              placeholder="My two front teeth"
              required={true}
              className="w-full p-1 pl-2 outline outline-1 rounded-md outline-gray-300"
              onChange={(e) => setWish(e.target.value)}
            ></textarea>
          </label>
          <label className="text-gray-600">
            How bad to you want it?
            <select
              name="priority"
              value={priority}
              className="w-full p-1 pl-2 outline outline-1 rounded-md outline-gray-300 bg-white"
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="1">I don't need it</option>
              <option value="2">I kinda want</option>
              <option value="3">I want it</option>
              <option value="4">I gotta have it</option>
              <option value="5">It's the only thing I want</option>
            </select>
          </label>
          <input
            type="submit"
            className="mx-auto w-16 rounded-md bg-gray-200"
            value="Send"
          ></input>
        </div>
      </form>
    </>
  );
}
