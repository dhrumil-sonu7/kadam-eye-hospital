import urllib.request
import re

urls = [
    'https://www.kadameyehospital.com/',
    'https://www.kadameyehospital.com/contact%20us.html',
    'https://www.kadameyehospital.com/Doctors.html',
    'https://www.kadameyehospital.com/results.html',
    'https://www.kadameyehospital.com/gallery.html'
]

for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
        
        print(f"--- URL: {url} ---")
        
        # Find all links
        links = re.findall(r'<a[^>]+href=["\']([^"\']+)["\']', html, re.I)
        print("LINKS:", list(set(links))[:20]) # Print first 20 unique links
        
        # Find images
        images = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html, re.I)
        print("IMAGES:", list(set(images))[:20])
        
        # Extract basic text content by removing tags for contact us
        if 'contact' in url.lower():
            text = re.sub(r'<[^>]+>', ' ', html)
            text = re.sub(r'\s+', ' ', text)
            print("TEXT EXTRACT (Contact):", text[2000:3000]) # Print a chunk
            
    except Exception as e:
        print(f"Failed {url}: {e}")
