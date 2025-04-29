// src/components/Suggestions.jsx
export default function Suggestions({ suggestions }) {
    return (
      <div className="mt-4">
        <h5>You may also like</h5>
        <ul className="list-group">
          {suggestions.map((s, i) => (
            <li key={i} className="list-group-item d-flex justify-content-between">
              <span>{s.title}</span>
              <span className="badge bg-info text-dark">{s.chapter}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  