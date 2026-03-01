import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import MyList from "../pages/MyList";

const isAuthenticated = () => localStorage.getItem("chill.auth") === "true";

function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
}

function PublicOnlyRoute({ children }) {
  return isAuthenticated() ? <Navigate to="/home" replace /> : children;
}

export default function AppRoutes() {
  const [savedMovies, setSavedMovies] = useState([]);

  const toggleMyList = (movie) => {
    setSavedMovies((prevList) => {
      const isExist = prevList.find((item) => item.title === movie.title);
      if (isExist) {
        return prevList.filter((item) => item.title !== movie.title);
      } else {
        return [...prevList, movie];
      }
    });
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<PublicOnlyRoute><Login /></PublicOnlyRoute>} />
      <Route path="/register" element={<PublicOnlyRoute><Register /></PublicOnlyRoute>} />
      
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home savedMovies={savedMovies} toggleMyList={toggleMyList} />
          </ProtectedRoute>
        }
      />

      <Route
        path="/mylist"
        element={
          <ProtectedRoute>
            <MyList savedMovies={savedMovies} toggleMyList={toggleMyList} />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}