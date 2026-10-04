import { CanvasArea } from "./components/CanvasArea";
import { ChatPanels } from "./components/ChatPanels";
import { Header } from "./components/Header";

function App() {
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
        <CanvasArea />
        <ChatPanels />
      </div>
    </div>
  );
}

export default App;
