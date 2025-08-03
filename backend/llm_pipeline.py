from llama_cpp import Llama
import json
import re

def generate_mind_map(text):
    llm = Llama(
        model_path="models/mistral-7b/mistral-7b-instruct-v0.2.Q4_K_M.gguf",
        n_ctx=2048,
        n_threads=4,
        n_gpu_layers=35  # Adjust based on your GPU
    )
    
    prompt = f"""
    You are a mind map generator. Given the text below, extract main topics and subtopics in a hierarchical JSON format:
    Text: {text}
    Return JSON:
    {{
      "Central Idea": "...",
      "Branches": [
        {{"Topic": "...", "Subtopics": ["...", "..."]}},
        ...
      ]
    }}
    Wrap the JSON in ```json ... ```.
    """
    
    output = llm(
        prompt,
        max_tokens=500,
        stop=["</s>"],
        echo=False
    )["choices"][0]["text"]
    
    # Extract JSON from output
    try:
        json_str = re.search(r"```json\n(.*?)\n```", output, re.DOTALL).group(1)
        return json.loads(json_str)
    except:
        return {"error": "Failed to parse JSON from LLM output"}