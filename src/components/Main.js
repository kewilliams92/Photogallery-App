import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Photos, NavBar, Header, About, Login, Register } from "./";
import { useDispatch } from "react-redux";
import { fetchPhotosAsync } from "../features/photosSlice/photosSlice";

const Main = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const isLoggedIn = true;

  useEffect(() => {
    dispatch(fetchPhotosAsync());
  }, [dispatch]);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <NavBar />
          <Header />
          <Routes>
            <Route path="/" element={<Photos />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      ) : (
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default Main;
