import os
import re

pages_dir = r"e:\kadam hospital\src\pages"

for filename in os.listdir(pages_dir):
    if filename.endswith(".jsx"):
        filepath = os.path.join(pages_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Inject `<div className="bg-pattern" />` right after `<section ...>` if it doesn't exist
        # We find `<section className="...">` and replace it with `<section className="...">\n          <div className="bg-pattern" />`
        
        # We need to be careful not to duplicate if it's already there
        if 'className="bg-pattern"' in content:
            # Strip them first to ensure clean state
            content = re.sub(r'<div\s+className="bg-pattern"\s*/>\s*', '', content)
            
        new_content = re.sub(
            r'(<section[^>]*>)', 
            r'\1\n          <div className="bg-pattern" />', 
            content
        )
        
        if new_content != content:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Restored background patterns in {filename}")

print("Done restoring bg-pattern.")
