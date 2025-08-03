# AI-Powered Mind Map Generator

Generate interactive mind maps from text, PDFs, or URLs using Mistral-7B-Instruct-v0.2.

---

## 🚀 Features

- Generate mind maps from **text**, **PDF**, or **URL**
- Uses **Mistral-7B-Instruct-v0.2** (GGUF) for LLM-powered summarization
- Interactive visualization and export as **PDF** or **JSON**
- Simple web UI (React) and FastAPI backend

---

## 🛠️ Setup

### 1. Backend

```bash
cd backend
python -m venv venv
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate
pip install -r requirements.txt
uvicorn app:app --reload
```

### 2. Frontend

```bash
cd frontend
npm install
npm start
```

### 3. Model

- Place your model file here:
  ```
  models/mistral-7b/mistral-7b-instruct-v0.2.Q4_K_M.gguf
  ```

---

## 💡 Usage

1. Open [http://localhost:3000](http://localhost:3000)
2. Enter text, upload a PDF/TXT, or provide a URL
3. Click **Generate Mind Map** to view the visualization
4. Export as **PDF** or **JSON**

---

## 🐞 Troubleshooting

- **CORS Errors:**  
  Ensure `CORSMiddleware` is correctly set in `app.py`.

- **Model Loading:**  
  Verify the `mistral-7b-instruct-v0.2.Q4_K_M.gguf` path in `llm_pipeline.py`.

- **Frontend:**  
  If `'react-scripts' is not recognized`, run:
  ```bash
  npm install react-scripts
  ```

---

## 📁 Project Structure

```text
mindmap-generator/
├── backend/
│   ├── app.py
│   ├── file_processor.py
│   ├── llm_pipeline.py
│   ├── requirements.txt
│   └── ...
├── frontend/
│   ├── package.json
│   ├── src/
│   └── ...
├── models/
│   └── mistral-7b/
│       └── mistral-7b-instruct-v0.2.Q4_K_M.gguf
└── README.md
```

---

## 📜 License

MIT License
