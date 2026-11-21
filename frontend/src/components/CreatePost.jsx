
import useForm from "../hooks/useForm";

function CreatePost({ onAddPost, author = "Community Member" }) {
  const categories = [
    "General",
    "Announcements",
    "Tech & Coding",
    "Events",
  ];

  const validate = (values) => {
    const errors = {};

    if (!values.title.trim()) {
      errors.title = "Post title is required";
    }

    if (!values.excerpt.trim()) {
      errors.excerpt = "Post content is required";
    }

    if (!values.category) {
      errors.category = "Please select a category";
    }

    return errors;
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    reset,
  } = useForm(
    { title: "", excerpt: "", category: "General" },
    validate
  );

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate(values);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    onAddPost({
      id: Date.now(),
      title: values.title.trim(),
      excerpt: values.excerpt.trim(),
      category: values.category,
      author,
      date: new Date().toLocaleDateString(),
    });

    reset();
  }

  return (
    <form onSubmit={handleSubmit} className="create-post">
      <h2>Create a Post</h2>

      <label htmlFor="post-title">Post Title</label>
      <input
        id="post-title"
        name="title"
        type="text"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Give your post a title"
      />
      {touched.title && errors.title && <p>{errors.title}</p>}

      <label htmlFor="post-content">What's on your mind?</label>
      <textarea
        id="post-content"
        name="excerpt"
        value={values.excerpt}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Share something with your community..."
      />
      {touched.excerpt && errors.excerpt && <p>{errors.excerpt}</p>}

      <label htmlFor="post-category">Choose a Category</label>
      <select
        id="post-category"
        name="category"
        value={values.category}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <button type="submit">Publish Post</button>
    </form>
  );
}

export default CreatePost;
