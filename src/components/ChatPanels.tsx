import React, { useState } from "react";

interface Message {
  id: string;
  sender: "user" | "agent";
  text: string;
}

export const ChatPanels: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "agent",
      text: "你好！我是 AI 修图助手，请输入修图需求。",
    },
  ]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: inputValue.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    setTimeout(() => {
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "agent",
        text: `已收到指令: "${userMessage.text}"`,
      };
      setMessages((prev) => [...prev, agentMessage]);
    }, 600);
  };

  return (
    <aside
      style={{
        width: "320px",
        borderLeft: "1px solid #e5e7eb",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "12px 16px",
          borderBottom: "1px solid #e5e7eb",
          fontWeight: 600,
        }}
      >
        AI 对话面板
      </div>

      <div
        style={{
          flex: 1,
          padding: "16px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              background: msg.sender === "user" ? "#2563eb" : "#f3f4f6",
              color: msg.sender === "user" ? "#ffffff" : "#1f2937",
              padding: "8px 12px",
              borderRadius: "8px",
              maxWidth: "85%",
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div
        style={{
          padding: "12px",
          borderTop: "1px solid #e5e7eb",
          display: "flex",
          gap: "8px",
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="输入修图指令..."
          style={{
            flex: 1,
            padding: "8px 12px",
            border: "1px solid #d1d5db",
            borderRadius: "4px",
          }}
        >
          <button
            onClick={handleSend}
            style={{
              padding: "8px 14px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            发送
          </button>
        </input>
      </div>
    </aside>
  );
};
