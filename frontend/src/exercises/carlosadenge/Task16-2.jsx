import { useState } from "react";

function Task16_2() {
  const [message, setMessage] = useState("");
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setMessage("Button was clicked!");
  }

  function handleLike() {
    setLikes(likes + 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("Form submitted successfully!");
  }

  return (
    <div>
      <h1>Task 16.2 – Handling Events</h1>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleLike}>Like ({likes})</button>

      <p>{message}</p>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type something..." />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Task16_2;
