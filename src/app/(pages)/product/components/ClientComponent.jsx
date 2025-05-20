"use client";

import React from "react";
import useFetchAllPost from "../../../hooks/useFetchAllPost";

export default function ClientComponent() {
  const { allPost, loading, error } = useFetchAllPost();

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f8ff",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ marginBottom: "16px", color: "#007acc" }}>Client Component</h2>

      {loading && <p>Loading...</p>}
      {error && (
        <p style={{ color: "red" }}>Error: {error.message || "Something went wrong"}</p>
      )}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "flex-start",
        }}
      >
        {allPost?.length > 0 ? (
          allPost.map((post) => (
            <div
              key={post.id}
              style={{
                backgroundColor: "#00bcd4", // aqua shade
                padding: "16px",
                borderRadius: "12px",
                width: "calc(33.333% - 20px)",
                color: "white",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                cursor: "pointer",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <h3
                style={{
                  backgroundColor: "#388e3c",
                  padding: "8px",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              >
                {post.title}
              </h3>
              <p
                style={{
                  backgroundColor: "#8e24aa",
                  borderRadius: "8px",
                  padding: "8px",
                  lineHeight: "1.4",
                }}
              >
                {post.body}
              </p>
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
}
