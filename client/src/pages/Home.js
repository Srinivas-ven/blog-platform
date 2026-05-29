import { useEffect, useState } from "react";

import axios from "axios";

import Comments from "../components/Comments";

function Home() {

  const [posts, setPosts] = useState([]);

  const [editingId, setEditingId] = useState(null);

  const [updatedTitle, setUpdatedTitle] = useState("");

  const [updatedContent, setUpdatedContent] = useState("");

  useEffect(() => {

    fetchPosts();

  }, []);

  const fetchPosts = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/posts"
      );

      setPosts(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  const deletePost = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/posts/${id}`
      );

      fetchPosts();

    } catch (err) {

      console.log(err);

    }

  };

  const updatePost = async (id) => {

    try {

      await axios.put(
        `http://localhost:5000/api/posts/${id}`,
        {
          title: updatedTitle,
          content: updatedContent
        }
      );

      setEditingId(null);

      fetchPosts();

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <div>

      <div className="bg-dark text-white text-center p-5">

        <h1>
          Welcome to Blog Platform
        </h1>

        <p>
          Share your thoughts with the world 🚀
        </p>

      </div>

      <div className="container mt-5">

        {
          posts.map((post) => (

            <div
              key={post.id}
              className="card shadow mb-4"
            >

              <div className="card-body">

                {
                  editingId === post.id ? (

                    <div>

                      <input
                        type="text"
                        className="form-control mb-3"
                        defaultValue={post.title}
                        onChange={(e) =>
                          setUpdatedTitle(e.target.value)
                        }
                      />

                      <textarea
                        className="form-control mb-3"
                        defaultValue={post.content}
                        onChange={(e) =>
                          setUpdatedContent(e.target.value)
                        }
                      />

                      <button
                        className="btn btn-success me-2"
                        onClick={() => updatePost(post.id)}
                      >
                        Save
                      </button>

                      <button
                        className="btn btn-secondary"
                        onClick={() => setEditingId(null)}
                      >
                        Cancel
                      </button>

                    </div>

                  ) : (

                    <div>

                      <h2 className="card-title">
                        {post.title}
                      </h2>

                      <p className="card-text">
                        {post.content}
                      </p>

                      <button
                        className="btn btn-warning me-2"
                        onClick={() => setEditingId(post.id)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger"
                        onClick={() => deletePost(post.id)}
                      >
                        Delete
                      </button>

                    </div>

                  )
                }

              </div>

            </div>

          ))
        }

      </div>

      <Comments />

      <footer className="bg-dark text-white text-center p-3 mt-5">

        <p>
          Blog Platform © 2026
        </p>

      </footer>

    </div>

  );

}

export default Home;