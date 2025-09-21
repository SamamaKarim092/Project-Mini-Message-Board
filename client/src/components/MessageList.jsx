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
    <div>
      <h2>Messages</h2>
      <Link to="/new">New Message</Link>
      <ul>
        {messages.map(m => (
          <li key={m.id}>
            <strong>{m.user}:</strong> {m.text} <em>({new Date(m.added).toLocaleString()})</em>
            {' '}<Link to={`/messages/${m.id}`}>Open</Link>
            {' '}<button onClick={() => handleDelete(m.id)} style={{color: 'red', marginLeft: '10px'}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}