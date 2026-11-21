import { Card, Avatar } from "../components/shared";

function About() {
  return (
    <section>
      <h1>About</h1>
      <Card>
        <Avatar name="Community Hub" />
        <p>
          CommunityHub loads posts from JSONPlaceholder, then lets you add
          your own posts in local state. Navigation uses React Router.
        </p>
      </Card>
    </section>
  );
}

export default About;
