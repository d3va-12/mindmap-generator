import MindMap from "../components/MindMap";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function MindMapView({ mindMapData, onReset }) {
  const exportMindMap = async () => {
    const canvas = await html2canvas(document.querySelector(".react-flow"));
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 0, 0, 210, 297); // A4 size
    pdf.save("mindmap.pdf");
  };

  const exportJson = () => {
    const dataStr = JSON.stringify(mindMapData, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mindmap.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        <button
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          onClick={exportMindMap}
        >
          Export as PDF
        </button>
        <button
          className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
          onClick={exportJson}
        >
          Export as JSON
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
          onClick={onReset}
        >
          Reset
        </button>
      </div>
      <MindMap mindMapData={mindMapData} />
    </div>
  );
}

export default MindMapView;