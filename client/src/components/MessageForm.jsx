import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function MessageForm() {
  const [user, setUser] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const resp = await fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, text })
    });
    if (resp.ok) {
      navigate('/'); // go back to list (you may re-fetch there)
    } else {
      const err = await resp.json();
      alert(err.error || 'Error');
    }
  }

  return (
    <div className="container">
      <div className="form-container">
        <div className="card">
          <h2>Create New Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="user" className="form-label">Your Name</label>
              <input 
                id="user"
                type="text"
                value={user} 
                onChange={e => setUser(e.target.value)} 
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="text" className="form-label">Your Message</label>
              <textarea 
                id="text"
                value={text} 
                onChange={e => setText(e.target.value)} 
                placeholder="What's on your mind?"
                required
              />
            </div>
            
            <div className="form-actions">
              <Link to="/">
                <button type="button" className="secondary">Cancel</button>
              </Link>
              <button type="submit">📝 Post Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
