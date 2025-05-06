// src/components/Suggestions.jsx
import './suggest.css'
// src/components/Suggestions.jsx
export default function Suggestions({ suggestions }) {
  return (
    <div className="suggestions-section mt-4">
      <h5>You may also like</h5>
      <ul className="list-group">
        {suggestions.map((s, i) => (
          <li key={i} className="list-group-item d-flex align-items-center">
            {s.image && (
              <div className="suggestion-image">
                <img src={s.image} alt={s.title} className="suggestion-img" />
              </div>
            )}
            <div className="suggestion-details">
              <span className="suggestion-title">{s.title}</span>
              {s.chapter && <span className="suggestion-chapter">{s.chapter}</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

