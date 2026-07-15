import urllib.request
from html.parser import HTMLParser

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []

    def handle_data(self, data):
        cleaned = data.strip()
        if cleaned:
            self.text.append(cleaned)

urls = [
    'https://www.kadameyehospital.com/contact%20us.html',
    'https://www.kadameyehospital.com/About%20us.html',
    'https://www.kadameyehospital.com/Ocularistcentre.html'
]

for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
        
        print(f"\n--- URL: {url} ---")
        
        import re
        images = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html, re.I)
        print("IMAGES:", list(set(images)))
        
        parser = TextExtractor()
        parser.feed(html)
        full_text = '\n'.join(parser.text)
        
        if 'contact' in url.lower():
            print("CONTACT TEXT:\n", full_text[full_text.find('KADAM'):full_text.find('KADAM')+1500])
            
        if 'about' in url.lower():
            print("ABOUT TEXT:\n", full_text[full_text.find('KADAM'):full_text.find('KADAM')+1500])
            
    except Exception as e:
        print(f"Failed {url}: {e}")
