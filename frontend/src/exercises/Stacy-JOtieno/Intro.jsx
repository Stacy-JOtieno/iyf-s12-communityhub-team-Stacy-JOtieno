// frontend/src/exercises/Stacy/Intro.jsx

function Intro() {
  const name = "Stacy";
  const isLoggedIn = true;

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const hour = new Date().getHours();
  let timeMessage;

  if (hour < 12) {
    timeMessage = "Good morning!";
  } else if (hour < 17) {
    timeMessage = "Good afternoon!";
  } else {
    timeMessage = "Good evening!";
  }

  return (
    <div>
      {/* This is a comment in JSX */}
      <h1>Hello, {name}!</h1>

      <p>Today is {today}</p>
      <p>{timeMessage}</p>

      <p>
        I am a software development student learning React. I enjoy building
        things that solve real problems and I'm currently working on the
        CommunityHub project with my team.
      </p>

      <p>
        Outside of coding, I like exploring new technologies, 
        new ideas and getting new skills so that I may grow my art.
      </p>

      <p>
        My goal this week is to get comfortable with components, props, and
        state so I can contribute effectively to our team project.
      </p>

      {/* JavaScript expressions in curly braces */}
      <p>2 + 2 = {2 + 2}</p>

      {/* Conditional rendering */}
      {isLoggedIn && <p>Welcome back!</p>}

      {/* Ternary for either/or */}
      <p>{isLoggedIn ? "Logged in" : "Please log in"}</p>
    </div>
  );
}

export default Intro;