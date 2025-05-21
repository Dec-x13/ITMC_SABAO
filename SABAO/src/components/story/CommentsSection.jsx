import './CommentsSection.css'; 
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUserCircle, faComment } from '@fortawesome/free-solid-svg-icons';

export default function CommentsSection({ comments }) {
  // Add state for new comment and comment list
  const [commentList, setCommentList] = useState(comments);
  const [newComment, setNewComment] = useState('');

  // Add handler for input change
  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  // Add handler for submitting a comment
  const handleSend = () => {
    if (newComment.trim() === '') return;
    const now = new Date();
    setCommentList([
      ...commentList,
      {
        user: 'You',
        time: now.toLocaleString(),
        text: newComment,
      },
    ]);
    setNewComment('');
  };

  // Add handler for Enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };
  return (
    <div className="comments-section mt-4">
      <div className="comments-header">
        {/* Comment Icon and Title */}
        <FontAwesomeIcon icon={faComment} className="comment-icon" />
        <h4>Comments</h4>
      </div>

      <div className="innerbox">
        {/* Comment Input Section */}
        <div className="comment-input-container">
          <div className="comment-user-profile">
            {/* Profile icon */}
            <FontAwesomeIcon icon={faUserCircle} className="comment-user-profile" />
          </div>
          <input
            type="text"
            className="comment-textbox"
            placeholder="Write a comment..."
            value={newComment}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button className="send-btn" onClick={handleSend}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>

        {/* Comment List Section */}
        <ul className="list-group mt-3">
          {commentList.map((c, i) => (
            <li key={i} className="list-group-item">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faUserCircle} className="commenter-profile-icon" />
                <strong>{c.user}</strong> — <small>{c.time}</small>
              </div>
              <p>{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Prop validation
CommentsSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      userProfilePicture: PropTypes.string, // Optional for comments
    })
  ).isRequired,
};
