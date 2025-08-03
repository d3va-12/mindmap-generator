import axios from "axios";
import { useState } from "react";
import Loader from "./Loader";

function InputForm({ onSubmit }) {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const formData = new FormData();
    if (text) formData.append("text", text);
    if (file) formData.append("file", file);
    if (url) formData.append("url", url);

    try {
      const response = await axios.post("http://localhost:8000/generate_map", formData);
      if (response.data.error) {
        alert(response.data.error);
      } else {
        onSubmit(response.data.mind_map);
      }
    } catch (error) {
      console.error("Error generating mind map:", error);
      alert("Failed to generate mind map");
    }
    setLoading(false);
  };

  return (
    <div className="p-4 space-y-4">
      <textarea
        className="w-full p-2 border rounded"
        rows="5"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here"
      />
      <input
        type="file"
        accept=".pdf,.txt"
        onChange={(e) => setFile(e.target.files[0])}
        className="border p-2 rounded"
      />
      <input
        className="w-full p-2 border rounded"
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <button
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        onClick={handleSubmit}
        disabled={loading || (!text && !file && !url)}
      >
        {loading ? <Loader /> : "Generate Mind Map"}
      </button>
    </div>
  );
}

export default InputForm;