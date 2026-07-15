import os
import re

pages_dir = r"e:\kadam hospital\src\pages"

seo_data = {
    "Home.jsx": {
        "title": "Kadam Eye Hospital Vadodara | Top Phaco, LASIK & Cornea Centre",
        "description": "Welcome to Kadam Eye Hospital, Vadodara's trusted eye care centre since 1982. We specialize in Phaco, LASIK, Glaucoma, Cornea Transplants, and Ocular prosthetics.",
        "keywords": "Eye Hospital Vadodara, Kadam Eye Hospital, LASIK Vadodara, Phaco surgery, Best eye specialist Vadodara"
    },
    "AboutUs.jsx": {
        "title": "About Kadam Eye Hospital | Expert Ophthalmologists in Vadodara",
        "description": "Learn about Kadam Eye Hospital, our legacy since 1982, and our highly experienced team of eye surgeons including Dr. Subhash Kadam and Dr. Sunita Kadam.",
        "keywords": "About Kadam Eye Hospital, eye surgeons Vadodara, Dr Subhash Kadam, ophthalmologists Gujarat"
    },
    "Facilities.jsx": {
        "title": "World-Class Eye Care Facilities | Kadam Eye Hospital Vadodara",
        "description": "Explore the state-of-the-art facilities at Kadam Eye Hospital. Equipped with advanced technology for precise diagnostics, LASIK, and microscopic surgeries.",
        "keywords": "Eye care facilities Vadodara, advanced eye surgery tech, LASIK equipment, phaco centre"
    },
    "Milestones.jsx": {
        "title": "Our Journey & Milestones | Kadam Eye Hospital",
        "description": "Discover the milestones of Kadam Eye Hospital. Decades of excellence in eye care, pioneering surgical treatments in Vadodara since 1982.",
        "keywords": "Kadam Eye Hospital history, eye care milestones, trusted eye clinic Vadodara"
    },
    "PatientInfo.jsx": {
        "title": "Patient Information & Cashless Mediclaim | Kadam Eye Hospital",
        "description": "Important patient information, timings, and cashless mediclaim facilities at Kadam Eye Hospital. We partner with major insurance TPAs for hassle-free treatments.",
        "keywords": "Cashless eye surgery Vadodara, mediclaim eye hospital, patient guide Kadam Eye Hospital"
    },
    "OcularistCentre.jsx": {
        "title": "Custom Prosthetic Eyes | Kadam Ocularist Centre Vadodara",
        "description": "The Kadam Ocularist Centre specializes in custom-made prosthetic eyes and scleral shells for a natural appearance. See our incredible before and after transformation results.",
        "keywords": "Ocularist Vadodara, artificial eye, prosthetic eye Gujarat, scleral shell"
    },
    "CorneaCentre.jsx": {
        "title": "Cornea Centre | Treatment for Corneal Disorders in Vadodara",
        "description": "Comprehensive diagnostics and treatments for corneal conditions including Keratoconus, corneal ulcers, and dry eye at Kadam Eye Hospital.",
        "keywords": "Cornea specialist Vadodara, Keratoconus treatment, dry eye clinic, corneal disorders"
    },
    "CorneaTransplant.jsx": {
        "title": "Corneal Transplant (Keratoplasty) | Kadam Eye Hospital",
        "description": "Expert Corneal Transplant surgery (Keratoplasty) at Kadam Eye Hospital. Restoring vision with advanced surgical procedures and post-operative care.",
        "keywords": "Cornea transplant Vadodara, Keratoplasty surgery, eye donation, cornea grafting"
    },
    "ContactUs.jsx": {
        "title": "Contact Kadam Eye Hospital | Book an Appointment in Vadodara",
        "description": "Get in touch with Kadam Eye Hospital. Find addresses, phone numbers, and directions for our Akota, Dandia Bazar, and Nizampura branches in Vadodara.",
        "keywords": "Contact Kadam Eye Hospital, eye hospital appointment Vadodara, Akota eye clinic, Nizampura eye clinic"
    }
}

for filename, data in seo_data.items():
    filepath = os.path.join(pages_dir, filename)
    if not os.path.exists(filepath):
        print(f"Skipping {filename}, not found.")
        continue

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Skip if useSEO is already injected
    if "useSEO(" in content:
        print(f"Already injected in {filename}")
        continue

    # 1. Add import statement
    import_statement = "import useSEO from '../hooks/useSEO'\n"
    # Find last import
    last_import_idx = content.rfind("import ")
    if last_import_idx != -1:
        end_of_last_import = content.find("\n", last_import_idx) + 1
        content = content[:end_of_last_import] + import_statement + content[end_of_last_import:]
    else:
        content = import_statement + content

    # 2. Add hook call inside component
    func_match = re.search(r'export default function \w+\(\) {', content)
    if func_match:
        func_start = func_match.end()
        
        hook_call = f"""
  useSEO({{
    title: '{data["title"]}',
    description: '{data["description"]}',
    keywords: '{data["keywords"]}'
  }})
"""
        content = content[:func_start] + hook_call + content[func_start:]
        
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Injected SEO into {filename}")
    else:
        print(f"Could not find function definition in {filename}")

print("SEO Injection Complete.")
