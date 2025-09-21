import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function MessageList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    fetch('/api/messages')
      .then(r => r.json())
      .then(data => setMessages(data))
      .catch(err => console.error(err));
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        const response = await fetch(`/api/messages/${id}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          // Remove the deleted message from the local state
          setMessages(messages.filter(m => m.id !== id));
          console.log('Message deleted successfully');
        } else {
          const error = await response.json();
          console.error('Error deleting message:', error.error);
          alert('Failed to delete message: ' + error.error);
        }
      } catch (err) {
        console.error('Error deleting message:', err);
        alert('Failed to delete message');
      }
    }
  };

  return (
    <div className="container">
      <div className="messages-header">
        <h2>Messages</h2>
        <Link to="/new" className="nav-link">
          ✨ New Message
        </Link>
      </div>
      
      {messages.length === 0 ? (
        <div className="empty-state">
          <h3>No messages yet</h3>
          <p>Be the first to share something!</p>
          <Link to="/new">
            <button>Create First Message</button>
          </Link>
        </div>
      ) : (
        <div className="messages-grid">
          {messages.map(m => (
            <div key={m.id} className="message-card">
              <div className="message-header">
                <div className="message-user">{m.user}</div>
                <div className="message-time">
                  {new Date(m.added).toLocaleString()}
                </div>
              </div>
              <div className="message-text">{m.text}</div>
              <div className="message-actions">
                <Link to={`/messages/${m.id}`}>
                  <button className="secondary btn-small">👁️ View</button>
                </Link>
                <button 
                  onClick={() => handleDelete(m.id)} 
                  className="danger btn-small"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}