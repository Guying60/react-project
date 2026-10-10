import React from "react";
import { useEditorStore } from "../store/useEditorStore";

export const CanvasArea: React.FC = () => {
  const isProcessing = useEditorStore((state) => state.isProcessing);

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
        {isProcessing && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(255, 255, 255, 0.85)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#2563eb",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            ⚡ AI 正在处理画面，请稍候...
          </div>
        )}
      </div>
    </main>
  );
};
