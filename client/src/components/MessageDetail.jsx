import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MessageDetail() {
  const { id } = useParams();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch(`/api/messages/${id}`)
      .then(r => r.json())
      .then(setMessage)
      .catch(console.error);
  }, [id]);

  if (!message) return <div>Loading...</div>;
  return (
    <div>
      <h2>{message.user}</h2>
      <p>{message.text}</p>
      <small>{new Date(message.added).toLocaleString()}</small>
    </div>
  );
}
