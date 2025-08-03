import { useState } from "react";
import Home from "./pages/Home";
import MindMapView from "./pages/MindMapView";

function App() {
  const [mindMapData, setMindMapData] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      {!mindMapData ? (
        <Home onSubmit={setMindMapData} />
      ) : (
        <MindMapView mindMapData={mindMapData} onReset={() => setMindMapData(null)} />
      )}
    </div>
  );
}

export default App;