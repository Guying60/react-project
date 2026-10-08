import { useState } from "react";
import { CanvasArea } from "./components/CanvasArea";
import { ChatPanels } from "./components/ChatPanels";
import { Header } from "./components/Header";

function App() {
  const [isProcessing, setIsProcessing] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Header title="AI Retouch Studio" />
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <CanvasArea isProcessing={isProcessing} />
        <ChatPanels
          isProcessing={isProcessing}
          onProcessingChange={setIsProcessing}
        />
      </div>
    </div>
  );
}

export default App;
