import React from "react";

interface CanvasStatsProps {
  onReset: () => void;
  formattedInfo: string;
}

export const CanvasStats = React.memo<CanvasStatsProps>(
  ({ onReset, formattedInfo }) => {
    console.log("🔴 [性能追踪] CanvasStats 子组件重新渲染了！");

    return (
      <div
        style={{
          marginTop: "12px",
          padding: "6px 12px",
          background: "#e5e7eb",
          borderRadius: "4px",
          fontSize: "12px",
          color: "#4b5563",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <span>{formattedInfo}</span>
        <button
          onClick={onReset}
          style={{ padding: "2px 6px", fontSize: "11px", cursor: "pointer" }}
        >
          重设为标准尺寸
        </button>
      </div>
    );
  },
);
