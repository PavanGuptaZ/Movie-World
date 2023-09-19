import React from 'react';
import { useNavigate } from 'react-router-dom';

export const PageNotFound = () => {
  const navigator = useNavigate()
  return (
    <div style={{ fontSize: "2rem", display: "grid", placeItems: "center", textAlign: "center" }}>
      PageNotFound <br />
      link to home page <br />      ↓

      <button onClick={() => navigator("/")} style={{
        border: "none", outline: "none", padding: "1rem", background: "#DD003F", color: "#fff", borderRadius: "1rem",
        boxShadow: "2px 1px 2px rgba(0,0,0,0.2)", cursor: "pointer", margin: "20px"
      }}>Home</button>
      ↑
    </div>
  )
}
