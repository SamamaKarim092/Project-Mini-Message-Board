import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MessageList from './components/MessageList';
import MessageForm from './components/MessageForm';
import MessageDetail from './components/MessageDetail';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MessageList/>} />
        <Route path="/new" element={<MessageForm/>} />
        <Route path="/messages/:id" element={<MessageDetail/>} />
      </Routes>
    </BrowserRouter>
  );
}
