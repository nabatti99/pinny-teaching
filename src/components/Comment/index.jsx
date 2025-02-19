import React, { useState, useEffect } from "react";
import { ref, push, onValue, update, remove } from "firebase/database";
import { FirebaseService } from "../../firebase-service/firebase-init";
import { formatDistanceToNow } from "date-fns";

const CommentSection = ({ type, id }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyContent, setReplyContent] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [error, setError] = useState("");
  const [showReplies, setShowReplies] = useState({});
  const [visibleComments, setVisibleComments] = useState(5);
  const [editingComment, setEditingComment] = useState(null);
  const [editingContent, setEditingContent] = useState("");

  const [editingReply, setEditingReply] = useState(null);
  const [editingReplyContent, setEditingReplyContent] = useState("");

  const commentsRef = ref(FirebaseService.database, `comments/${type}/${id}`);

  useEffect(() => {
    onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      const loadedComments = [];
      for (let commentId in data) {
        loadedComments.push({
          id: commentId,
          ...data[commentId],
          replies: data[commentId]?.replies || {},
        });
      }

      loadedComments.sort((a, b) => b.createdAt - a.createdAt);
      setComments(loadedComments);
    });
  }, [type, id]);

  const handleShowMoreComments = () => {
    setVisibleComments(comments.length);
  };

  const handleToggleReplies = (commentId) => {
    setShowReplies((prevState) => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleReplyInputChange = (e) => {
    const { name, value } = e.target;
    setReplyContent({ ...replyContent, [name]: value });
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.name.trim() || !newComment.content.trim()) {
      setError("Name and Comment content are required.");
      return;
    }
    setError("");
    push(commentsRef, { ...newComment, createdAt: Date.now() });
    setNewComment({ name: "", email: "", content: "" });
  };

  const handleAddReply = (e, parentId) => {
    e.preventDefault();
    if (!replyContent.name.trim() || !replyContent.content.trim()) {
      alert("Name and Reply content are required.");
      return;
    }
    const repliesRef = ref(
      FirebaseService.database,
      `comments/${type}/${id}/${parentId}/replies`
    );
    push(repliesRef, {
      ...replyContent,
      createdAt: Date.now(),
    });
    setReplyContent({ name: "", email: "", content: "" });
    setReplyingTo(null);

    setShowReplies((prevState) => ({
      ...prevState,
      [parentId]: true,
    }));
  };

  const isEditable = (createdAt) => {
    const tenMinutes = 10 * 60 * 1000;
    return Date.now() - createdAt < tenMinutes;
  };

  const handleEditComment = (commentId, oldContent) => {
    setEditingComment(commentId);
    setEditingContent(oldContent);
  };

  const handleSaveEdit = (commentId) => {
    if (editingContent.trim()) {
      update(
        ref(FirebaseService.database, `comments/${type}/${id}/${commentId}`),
        {
          content: editingContent,
          updatedAt: Date.now(),
        }
      );
      setEditingComment(null);
      setEditingContent("");
    }
  };

  const handleDeleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      remove(
        ref(FirebaseService.database, `comments/${type}/${id}/${commentId}`)
      );
    }
  };

  const handleEditReply = (parentId, replyId, oldContent) => {
    const newContent = prompt("Edit your reply:", oldContent);
    if (newContent) {
      update(
        ref(
          FirebaseService.database,
          `comments/${type}/${id}/${parentId}/replies/${replyId}`
        ),
        {
          content: newContent,
          updatedAt: Date.now(),
        }
      );
    }
  };

  const handleDeleteReply = (parentId, replyId) => {
    if (window.confirm("Are you sure you want to delete this reply?")) {
      remove(
        ref(
          FirebaseService.database,
          `comments/${type}/${id}/${parentId}/replies/${replyId}`
        )
      );
    }
  };

  const handleReplyToggle = (commentId) => {
    setReplyingTo(replyingTo === commentId ? null : commentId);
  };

  const handleEditReplyStart = (replyId, oldContent) => {
    setEditingReply(replyId);
    setEditingReplyContent(oldContent);
  };

  const handleSaveReplyEdit = (parentId, replyId) => {
    if (editingReplyContent.trim()) {
      update(
        ref(
          FirebaseService.database,
          `comments/${type}/${id}/${parentId}/replies/${replyId}`
        ),
        {
          content: editingReplyContent,
          updatedAt: Date.now(),
        }
      );
      setEditingReply(null);
      setEditingReplyContent("");
    }
  };

  const handleCancelReplyEdit = () => {
    setEditingReply(null);
    setEditingReplyContent("");
  };

  const handleCancelEdit = () => {
    setEditingComment(null);
    setEditingContent("");
  };

  return (
    <div className="container">
      <div className="comment-section">
        <h3>Questions & Feedback</h3>
        <form onSubmit={handleAddComment}>
          <textarea
            name="content"
            placeholder="Leave a message..."
            value={newComment.content}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={newComment.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email (optional)"
            value={newComment.email}
            onChange={handleInputChange}
          />
          <button type="submit">Comment</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
        <div className="comments-list">
          {comments.slice(0, visibleComments).map((comment) => (
            <div className="comment" key={comment.id}>
              <div className="comment-header">
                <div
                  className="avatar"
                  style={{
                    backgroundImage: `url("/images/logo_comment.png")`,
                  }}
                />
                <div className="comment-body">
                  <div className="name">
                    {comment.name} {comment.email && `(${comment.email})`}
                  </div>
                  {editingComment === comment.id ? (
                    <textarea
                      className="edit-area"
                      value={editingContent}
                      onChange={(e) => setEditingContent(e.target.value)}
                    />
                  ) : (
                    <div className="comment-content">{comment.content}</div>
                  )}
                </div>
              </div>

              <div className="comment-actions">
                <button onClick={() => handleReplyToggle(comment.id)}>
                  {replyingTo === comment.id ? "Cancel Reply" : "Reply"}
                </button>
                <button>
                  {formatDistanceToNow(new Date(comment.createdAt), {
                    addSuffix: false,
                  })}
                </button>
                {isEditable(comment.createdAt) && (
                  <>
                    {editingComment === comment.id ? (
                      <>
                        <button onClick={() => handleSaveEdit(comment.id)}>
                          Save
                        </button>
                        <button onClick={() => handleCancelEdit()}>
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() =>
                          handleEditComment(comment.id, comment.content)
                        }
                      >
                        Edit
                      </button>
                    )}
                    <button onClick={() => handleDeleteComment(comment.id)}>
                      Delete
                    </button>
                    <button className="note-edit">
                      Deletable and Editable within 10 minutes
                    </button>
                  </>
                )}
                {Object.keys(comment.replies).length > 0 && (
                  <button
                    className="show-reply"
                    onClick={() => handleToggleReplies(comment.id)}
                  >
                    {showReplies[comment.id]
                      ? "Hide replies"
                      : `Show ${Object.keys(comment.replies).length} ${
                          Object.keys(comment.replies).length === 1
                            ? "reply"
                            : "replies"
                        }`}
                  </button>
                )}
              </div>

              {replyingTo === comment.id && (
                <form
                  className="reply-form"
                  onSubmit={(e) => handleAddReply(e, comment.id)}
                >
                  <input
                    name="content"
                    placeholder="Leave a reply..."
                    value={replyContent.content}
                    onChange={handleReplyInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={replyContent.name}
                    onChange={handleReplyInputChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email (optional)"
                    value={replyContent.email}
                    onChange={handleReplyInputChange}
                  />
                  <button type="submit">Save</button>
                </form>
              )}

              {showReplies[comment.id] &&
                Object.keys(comment.replies).length > 0 && (
                  <div className="replies">
                    {Object.entries(comment.replies)
                      .sort(([, a], [, b]) => b.createdAt - a.createdAt)
                      .map(([replyId, reply]) => (
                        <div className="reply" key={replyId}>
                          <div className="reply-header">
                            <div
                              className="avatar"
                              style={{
                                backgroundImage: `url("/images/logo_comment.png")`,
                              }}
                            />
                            <div className="reply-body">
                              <div className="name">
                                {reply.name} {reply.email && `(${reply.email})`}
                              </div>
                              {editingReply === replyId ? (
                                <textarea
                                  className="edit-area"
                                  value={editingReplyContent}
                                  onChange={(e) =>
                                    setEditingReplyContent(e.target.value)
                                  }
                                />
                              ) : (
                                <div className="reply-content">
                                  {reply.content}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="reply-actions">
                            <button>
                              {formatDistanceToNow(new Date(reply.createdAt), {
                                addSuffix: false,
                              })}
                            </button>
                            {isEditable(reply.createdAt) && (
                              <>
                                {editingReply === replyId ? (
                                  <>
                                    <button
                                      onClick={() =>
                                        handleSaveReplyEdit(comment.id, replyId)
                                      }
                                    >
                                      Save
                                    </button>
                                    <button onClick={handleCancelReplyEdit}>
                                      Cancel
                                    </button>
                                  </>
                                ) : (
                                  <button
                                    onClick={() =>
                                      handleEditReplyStart(
                                        replyId,
                                        reply.content
                                      )
                                    }
                                  >
                                    Edit
                                  </button>
                                )}
                                <button
                                  onClick={() =>
                                    handleDeleteReply(comment.id, replyId)
                                  }
                                >
                                  Delete
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                )}
            </div>
          ))}
          {comments.length > 5 && visibleComments < comments.length && (
            <div className="show-cmt-container">
              <button
                className="show-cmt-button"
                onClick={handleShowMoreComments}
              >
                Show more comments
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
