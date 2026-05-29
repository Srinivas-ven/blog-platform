import { useState } from "react";

import axios from "axios";

function CreatePost() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreatePost = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/posts/create",
        {
          title,
          content
        }
      );

      alert(res.data.message);

      setTitle("");
      setContent("");

    } catch (err) {

      console.log(err);

      alert("Post Creation Failed");

    }

  };

  return (

    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-8">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">
              Create Blog Post
            </h2>

            <form onSubmit={handleCreatePost}>

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Post Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <textarea
                className="form-control mb-3"
                rows="6"
                placeholder="Write your content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />

              <button
                type="submit"
                className="btn btn-dark w-100"
              >
                Create Post
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>

  );

}

export default CreatePost;