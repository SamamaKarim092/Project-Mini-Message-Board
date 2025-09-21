import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <form onSubmit={handleSubmit}>
      <input value={user} onChange={e => setUser(e.target.value)} placeholder="Your name" />
      <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Your message" />
      <button type="submit">Submit</button>
    </form>
  );
}
