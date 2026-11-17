function Intro() {
  const name = "Josphine Moraa";
  const today = new Date().toLocaleDateString();
  const hour = new Date().getHours();

  let greeting;

  if (hour < 12) {
    greeting = "Good morning!";
  } else if (hour < 17) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  return (
    <div>
      <h1>My name is {name}</h1>

      <p>I am passionate about learning new skills.</p>
      <p>I am learning React and JavaScript.</p>
      <p>My goal is to become a skilled developer.</p>

      <p>Today's date is {today}</p>

      <h2>{greeting}</h2>
    </div>
  );
}

export default Intro;