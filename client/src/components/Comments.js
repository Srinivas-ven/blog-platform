import { useEffect, useState } from "react";

import axios from "axios";

function Comments() {

  const [comments, setComments] = useState([]);

  const [name, setName] = useState("");

  const [text, setText] = useState("");

  useEffect(() => {

    fetchComments();

  }, []);

  const fetchComments = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/comments"
      );

      setComments(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  const addComment = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/comments/create",
        {
          name,
          text
        }
      );

      setName("");

      setText("");

      fetchComments();

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2 className="mb-4">
          Comments
        </h2>

        <form onSubmit={addComment}>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            className="form-control mb-3"
            placeholder="Write Comment"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button
            className="btn btn-primary"
            type="submit"
          >
            Add Comment
          </button>

        </form>

        <hr />

        {
          comments.map((comment) => (

            <div
              key={comment.id}
              className="mb-3"
            >

              <h5>
                {comment.name}
              </h5>

              <p>
                {comment.text}
              </p>

            </div>

          ))
        }

      </div>

    </div>

  );

}

export default Comments;