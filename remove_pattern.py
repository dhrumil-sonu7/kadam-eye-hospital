import os
import re

pages_dir = r"e:\kadam hospital\src\pages"

for filename in os.listdir(pages_dir):
    if filename.endswith(".jsx"):
        filepath = os.path.join(pages_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Remove all instances of <div className="bg-pattern" />
        new_content = re.sub(r'\s*<div\s+className="bg-pattern"\s*/>', '', content)
        
        if new_content != content:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Removed bg-pattern from {filename}")

print("Done removing bg-pattern.")
