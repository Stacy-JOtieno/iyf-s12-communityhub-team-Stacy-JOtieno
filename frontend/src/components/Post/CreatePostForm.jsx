import { useState } from "react";
import { Button, Input } from "../shared";
import useLocalStorage from "../../hooks/useLocalStorage";
import styles from "./Post.module.css";

function CreatePostForm({ onCreate }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useLocalStorage("communityhub-author", "");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!title.trim() || !body.trim()) {
      setError("Add a title and a body before publishing.");
      return;
    }

    onCreate({
      title: title.trim(),
      body: body.trim(),
      author: author.trim() || "Community member",
    });
    setTitle("");
    setBody("");
    setError("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        label="Title"
        name="post-title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Give your post a title"
        required
      />
      <Input
        label="Your name"
        name="post-author"
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
        placeholder="Community member"
      />
      <label className={styles.bodyLabel} htmlFor="post-body">
        Body
      </label>
      <textarea
        id="post-body"
        name="body"
        value={body}
        onChange={(event) => setBody(event.target.value)}
        placeholder="Share something with the community"
        required
      />
      {error && (
        <p className={styles.formError} role="alert">
          {error}
        </p>
      )}
      <Button type="submit">Publish post</Button>
    </form>
  );
}

export default CreatePostForm;
