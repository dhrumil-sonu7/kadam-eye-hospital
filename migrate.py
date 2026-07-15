import os
import glob
import re

replacements = {
    r'var\(--color-navy-deep\)': 'var(--color-midnight)',
    r'var\(--color-navy\)': 'var(--color-midnight-light)',
    r'var\(--color-navy-light\)': 'rgba(15,23,42,0.8)',
    r'var\(--color-navy-lighter\)': 'rgba(15,23,42,0.6)',
    r'var\(--color-teal\)': 'var(--color-cyan)',
    r'var\(--color-teal-dark\)': 'var(--color-cyan)',
    r'var\(--color-teal-light\)': 'var(--color-magenta)',
    r'var\(--color-cyan-glow\)': 'var(--color-cyan)',
    r'var\(--color-gold-light\)': 'var(--color-gold)',
    r'var\(--color-gold-dark\)': 'var(--color-gold)',
    r'var\(--color-gray-50\)': 'var(--color-text-main)',
    r'var\(--color-gray-100\)': 'var(--color-text-main)',
    r'var\(--color-gray-200\)': 'var(--color-text-main)',
    r'var\(--color-gray-300\)': 'var(--color-text-muted)',
    r'var\(--color-gray-400\)': 'var(--color-text-muted)',
    r'var\(--color-gray-500\)': 'var(--color-text-muted)',
    r'var\(--color-gray-600\)': 'var(--color-text-muted)',
    r'var\(--color-gray-700\)': 'var(--color-text-muted)',
    r'var\(--color-gray-800\)': 'var(--color-text-muted)'
}

for filepath in glob.glob('src/**/*.css', recursive=True):
    with open(filepath, 'r') as f:
        content = f.read()
    
    original = content
    for old, new in replacements.items():
        content = re.sub(old, new, content)
        
    if original != content:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Updated {filepath}")
