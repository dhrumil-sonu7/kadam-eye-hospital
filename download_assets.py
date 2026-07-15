import os
import urllib.request

base_url = "https://www.kadameyehospital.com/image/"

doctors = ['Subhash.jpg', 'Sunita.jpg', 'Ranjit.png', 'Manisha.jpg']
results = ['bf1.jpg', 'af1.jpg', 'bf2.jpg', 'af2.jpg', 'bf3.jpg', 'af3.jpg', 'bf4.jpg', 'af4.jpg']

os.makedirs('src/assets/doctors', exist_ok=True)
os.makedirs('src/assets/results', exist_ok=True)

print("Downloading doctors...")
for doc in doctors:
    try:
        url = base_url + doc
        urllib.request.urlretrieve(url, f"src/assets/doctors/{doc}")
        print(f"Downloaded {doc}")
    except Exception as e:
        print(f"Failed to download {doc}: {e}")

print("Downloading results...")
for res in results:
    try:
        url = base_url + res
        urllib.request.urlretrieve(url, f"src/assets/results/{res}")
        print(f"Downloaded {res}")
    except Exception as e:
        print(f"Failed to download {res}: {e}")
