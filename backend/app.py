from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from llm_pipeline import generate_mind_map
from file_processor import process_input

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/generate_map")
async def generate_map(text: str = None, file: UploadFile = None, url: str = None):
    content = process_input(text, file, url)
    if not content:
        return {"error": "No valid input provided"}
    mind_map_json = generate_mind_map(content)
    return {"mind_map": mind_map_json}