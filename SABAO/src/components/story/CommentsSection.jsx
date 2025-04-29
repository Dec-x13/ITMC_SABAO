// src/components/CommentsSection.jsx
export default function CommentsSection({ comments }) {
    return (
      <div className="mt-4">
        <h4>Comments</h4>
        <ul className="list-group">
          {comments.map((c, i) => (
            <li key={i} className="list-group-item">
              <strong>{c.user}</strong> — <small>{c.time}</small>
              <p>{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  