function Intro() {
  const name = "Carlos Adenge";
  const now = new Date();
  const hour = now.getHours();

  let greeting;
  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <div className="intro">
      <h1>{name}</h1>
      <p>I am a student at IYF Wecan Academy Season 12.</p>
      <p>I am learning React and building CommunityHub with my team.</p>
      <p>I enjoy turning ideas into working web applications.</p>
      <p>Today is {now.toLocaleDateString()}.</p>
      <p>
        {greeting}! Welcome to my intro component.
      </p>
    </div>
  );
}

export default Intro;