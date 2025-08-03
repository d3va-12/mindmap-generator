import fitz  # PyMuPDF
from bs4 import BeautifulSoup
import requests
from utils.text_cleaner import clean_text

def process_input(text, file, url):
    if text:
        return clean_text(text)
    if file:
        doc = PyMuPDF.open(stream=file.file.read(), filetype="pdf")
        text = "".join(page.get_text() for page in doc)
        return clean_text(text)
    if url:
        response = requests.get(url)
        soup = BeautifulSoup(response.text, "html.parser")
        text = soup.get_text()
        return clean_text(text)
    return None