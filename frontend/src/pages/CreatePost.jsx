import { useNavigate } from "react-router-dom";
import CreatePostForm from "../components/Post/CreatePostForm";
import { usePosts } from "../hooks/usePosts";

function CreatePost() {
  const navigate = useNavigate();
  const { addPost } = usePosts();

  function handleCreate(values) {
    const post = addPost(values);
    navigate(`/posts/${post.id}`);
  }

  return (
    <section>
      <h1>Create a post</h1>
      <p>New posts stay in this browser session. They are not sent to JSONPlaceholder.</p>
      <CreatePostForm onCreate={handleCreate} />
    </section>
  );
}

export default CreatePost;
