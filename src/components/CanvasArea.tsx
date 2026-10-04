import React from "react";

export const CanvasArea: React.FC = () => {
  return (
    <main
      style={{
        flex: 1,
        background: "#f3f4f6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "500px",
          height: "350px",
          background: "#ffffff",
          boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#9ca3af",
        }}
      >
        [画布区域：待集成 Konva Stage]
      </div>
    </main>
  );
};
