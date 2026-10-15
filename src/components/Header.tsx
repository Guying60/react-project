import React from "react";
import { useEditorStore } from "../store/useEditorStore";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }: HeaderProps) => {
  const scale = useEditorStore((state) => state.scale);
  const setScale = useEditorStore((state) => state.setScale);

  return (
    <header
      style={{
        height: "50px",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        background: "#ffffff",
      }}
    >
      <h1 style={{ fontSize: "18px", fontWeight: 600 }}>{title}</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <button
          onClick={() => setScale(Math.max(0.5, scale - 0.1))}
          style={{ padding: "4px 8px" }}
        >
          -
        </button>
        <span
          style={{ fontSize: "14px", minWidth: "50px", textAlign: "center" }}
        >
          {Math.round(scale * 100)}%
        </span>
        <button
          onClick={() => setScale(Math.min(2.0, scale + 0.1))}
          style={{ padding: "4px 8px" }}
        >
          +
        </button>
        <button
          onClick={() => setScale(1)}
          style={{ padding: "4px 8px", marginLeft: "4px" }}
        >
          重置
        </button>
      </div>
      <div>
        <button style={{ marginRight: "8px", padding: "6px 12px" }}>
          撤销
        </button>
        <button style={{ padding: "6px 12px" }}>导出图片</button>
      </div>
    </header>
  );
};
