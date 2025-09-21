# 💬 Mini Message Board – React + Express  

**Mini Message Board** is a full-stack web application that allows users to post, view, and manage short messages in real time. Built with **React** (frontend) and **Express.js** (backend), it demonstrates how REST APIs and modern deployment practices can be combined in a simple yet effective project.  

🔗 **Live Demo**:  
👉 [Mini Message Board on Vercel](https://mini-message-board-zeta.vercel.app/)  

---

## 📌 Key Features  

- 📝 **Post New Messages**  
  - Users can submit messages with their name and text.  
  - Each message includes the author, content, and timestamp.  

- 📜 **View All Messages**  
  - Homepage displays all messages stored in memory.  
  - Messages are dynamically rendered via REST API.  

- 🗑️ **Delete Messages**  
  - Users can remove specific posts.  
  - Keeps the board organized and relevant.  

- 🔄 **Real-Time Refresh**  
  - After posting or deleting, users are redirected to the updated board instantly.  

---

## ⚙️ REST API Endpoints  

The backend uses **Express.js** to serve data through REST APIs:  

- `GET /api/messages` → Fetch all messages  
- `POST /api/messages` → Add a new message  
- `DELETE /api/messages/:id` → Delete a message by ID  

This separation of concerns makes it easier to extend the project (e.g., by connecting to a database later).  

---

## 🧑‍💻 Tech Stack  

### 🔷 Frontend  
- React.js  
- JSX + CSS (for UI)  

### 🔶 Backend  
- Node.js  
- Express.js (REST API)  

### 🚀 Deployment  
- **Vercel** using a **monorepo** setup:  
  - `/client` → React frontend  
  - `/server` → Express backend  
- Both deployed together under a single project.  
