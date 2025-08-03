import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

def clean_text(text):
    tokens = word_tokenize(text.lower())
    stop_words = set(stopwords.words('english'))
    return ' '.join([t for t in tokens if t.isalnum() and t not in stop_words])