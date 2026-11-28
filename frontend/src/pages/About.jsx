import { Card, Avatar } from "../components/shared";

function About() {
  return (
    <section className="about-page">
      <h1>About CommunityHub</h1>

      <Card>
        <Avatar name="Community Hub" />

        <p>
          CommunityHub brings people together to connect, communicate,
          share knowledge, and support one another.
        </p>

        <h2>Our Mission</h2>

        <p>
          Our mission is to create a welcoming digital space where
          everyone can share ideas and participate in their community.
        </p>

        <h2>Our Community</h2>

        <p>
          We believe in collaboration, respect, learning, and sharing
          opportunities with everyone.
        </p>
      </Card>
    </section>
  );
}

export default About;