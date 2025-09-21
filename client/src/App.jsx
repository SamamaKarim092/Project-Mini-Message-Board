import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import MessageList from './components/MessageList';
import MessageForm from './components/MessageForm';
import MessageDetail from './components/MessageDetail';
import './App.css';

function Header() {
  const location = useLocation();
  
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          💬 Message Board
        </Link>
        <nav className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            📋 Messages
          </Link>
          <Link 
            to="/new" 
            className={`nav-link ${location.pathname === '/new' ? 'active' : ''}`}
          >
            ✨ New Message
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default function App(){
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<MessageList/>} />
            <Route path="/new" element={<MessageForm/>} />
            <Route path="/messages/:id" element={<MessageDetail/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
