import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function MessageDetail() {
  const { id } = useParams();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch(`/api/messages/${id}`)
      .then(r => r.json())
      .then(setMessage)
      .catch(console.error);
  }, [id]);

  if (!message) return (
    <div className="container">
      <div className="loading">
        <h3>Loading message...</h3>
        <p>Please wait while we fetch the message details.</p>
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="form-container">
        <div className="card">
          <div className="message-header">
            <h2>{message.user}</h2>
            <div className="message-time">
              {new Date(message.added).toLocaleString()}
            </div>
          </div>
          
          <div className="message-text" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            {message.text}
          </div>
          
          <div className="form-actions">
            <Link to="/">
              <button className="secondary">← Back to Messages</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
