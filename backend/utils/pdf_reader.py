import PyMuPDF

def read_pdf(file_path):
    doc = PyMuPDF.open(file_path)
    return "".join(page.get_text() for page in doc)