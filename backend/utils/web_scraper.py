from bs4 import BeautifulSoup
import requests

def scrape_url(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    return soup.get_text()