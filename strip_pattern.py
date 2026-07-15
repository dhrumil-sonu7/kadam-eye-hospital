import os
import re

pages_dir = r"e:\kadam hospital\src\pages"

for filename in os.listdir(pages_dir):
    if filename.endswith(".jsx"):
        filepath = os.path.join(pages_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Remove `<div className="bg-pattern" />` accounting for arbitrary spacing
        new_content = re.sub(r'<div\s+className="bg-pattern"\s*/>\s*', '', content)
        
        if new_content != content:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Cleaned {filename}")

print("Done stripping bg-pattern.")
