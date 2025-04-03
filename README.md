# Spotify Clone (Full MERN Stack Project)

## 🎵 Overview

This project is a **full MERN stack Spotify Clone** that allows users to explore, play, and manage music albums and songs. The application consists of three main parts:

- **Music\_Player:** The frontend user interface where users can browse, play songs, and interact with albums.
- **Music\_Player\_Admin:** The admin panel where users can create or delete albums and songs.
- **Music\_Player\_Backend:** The backend that handles API requests, database operations, and media storage.

## 🚀 Tech Stack

### Frontend (Music\_Player & Music\_Player\_Admin)

- **React** (Context API, useEffect, useState, useRef, React Router DOM)
- **React Toastify** (for pop-up notifications)
- **Tailwind** (for styling)

### Backend (Music\_Player\_Backend)

- **MongoDB** (Database for storing song and album references)
- **Express.js** (Backend framework for handling API requests)
- **Cloudinary** (To store images and songs, with references stored in MongoDB)
- **Multer** (For handling file uploads)

## 📂 Folder Structure

```
Spotify-Clone/
│-- Music_Player/       # Frontend for user
│-- Music_Player_Admin/ # Admin panel for managing songs & albums
│-- Music_Player_Backend/ # Backend (API, DB, File storage)
│-- README.md
```

## 🎯 Features

### 🎧 User Features (Music\_Player)

✅ Browse and play songs & albums\
✅ Play, pause, next, previous functionality\
✅ Shuffle and loop modes\
✅ Seek through songs with a progress bar\
✅ Responsive UI design

### 🎚️ Admin Features (Music\_Player\_Admin)

✅ Add new albums with images and descriptions\
✅ Upload and delete songs\
✅ Update album details\
✅ Manage playlists

### ⚙️ Backend Features (Music\_Player\_Backend)

✅ Secure API endpoints\
✅ Cloudinary integration for media storage\
✅ MongoDB for storing album/song metadata\
✅ Express middleware for request handling\
✅ Error handling & validation

## 🛠️ Installation & Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-repo/spotify-clone.git
   cd spotify-clone
   ```

2. **Install dependencies:**

   - For frontend:
     ```sh
     cd Music_Player
     npm install
     ```
   - For admin panel:
     ```sh
     cd Music_Player_Admin
     npm install
     ```
   - For backend:
     ```sh
     cd Music_Player_Backend
     npm install
     ```

3. **Setup environment variables:**

   - Create a `.env` file inside `Music_Player_Backend` with the following:
     ```env
     PORT=8000
     MONGO_URI=your_mongodb_connection_string
     CLOUDINARY_CLOUD_NAME=your_cloudinary_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     ```

4. **Run the project:**

   - Start backend:
     ```sh
     cd Music_Player_Backend
     npm start
     ```
   - Start frontend:
     ```sh
     cd Music_Player
     npm start
     ```
   - Start admin panel:
     ```sh
     cd Music_Player_Admin
     npm start
     ```

5. **Open in Browser:**

   - User Interface: `http://localhost:3000`
   - Admin Panel: `http://localhost:3001`
   - Backend: `http://localhost:8000`

## 🚀 Future Enhancements

🔹 User authentication (Signup & Login)\
🔹 Playlist creation & management\
🔹 Song recommendations using AI\
🔹 Download & offline playback

## 📌 Contributing

Feel free to fork this repository and submit pull requests for new features or improvements!

