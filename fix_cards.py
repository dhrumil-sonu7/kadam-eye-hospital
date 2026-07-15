import os
import glob
import re

# 1. Append global fix to App.css
app_css_path = 'src/App.css'
with open(app_css_path, 'a') as f:
    f.write('''
/* Global Fix for Grid Cards */
[class*="-grid"] > div {
  height: 100%;
}

[class*="-grid"] .glass-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

[class*="-grid"] .glass-card p:last-of-type {
  margin-top: auto;
}
''')

# 2. Strip whileHover from JSX files (except Navbar/Footer)
jsx_files = [
    'src/pages/AboutUs.jsx',
    'src/pages/ContactUs.jsx',
    'src/pages/CorneaCentre.jsx',
    'src/pages/Facilities.jsx',
    'src/pages/Milestones.jsx',
    'src/pages/OcularistCentre.jsx',
    'src/components/DoctorCard.jsx'
]

for file in jsx_files:
    if not os.path.exists(file):
        continue
    with open(file, 'r') as f:
        content = f.read()
    
    # Remove single line whileHover
    content = re.sub(r'\s*whileHover=\{\{[^}]+\}\}', '', content)
    
    # Remove multi-line whileHover with nested objects
    content = re.sub(r'\s*whileHover=\{\{[\s\S]*?\}\}\s*\}\}', '', content)
    
    # Specific removal for DoctorCard and Facilities (since regex might miss complex templates)
    content = re.sub(r'\s*whileHover=\{\{\s*y:\s*-8,\s*transition:\s*\{\s*duration:\s*0\.3\s*\}\s*\}\}', '', content)
    
    # Contact Us template literal
    content = re.sub(r'\s*whileHover=\{\{\s*y:\s*-8,\s*boxShadow:[^}]+\}\}', '', content)
    
    # Facilities template literal
    content = re.sub(r'\s*whileHover=\{\{\s*y:\s*-6,\s*boxShadow:[^}]+\}\}', '', content)
    
    with open(file, 'w') as f:
        f.write(content)
    print(f"Fixed {file}")
