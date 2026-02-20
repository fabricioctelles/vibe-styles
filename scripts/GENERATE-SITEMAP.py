# Sitemap Generator for Vibe Styles
# Usage: python3 scripts/GENERATE-SITEMAP.py
# Output: app/sitemap.xml (combined: static pages + 256 style URLs with slugs)

import json
import unicodedata
import re
from datetime import datetime
from pathlib import Path
import os


def generate_slug(name):
    """
    Generates a URL-friendly slug from a style name.
    Python equivalent of the JavaScript generateSlug() in utils.js.
    """
    if not name:
        return ''
    slug = name.lower()
    slug = unicodedata.normalize('NFD', slug)
    slug = re.sub(r'[\u0300-\u036f]', '', slug)  # Remove diacritics
    slug = re.sub(r'[&/\\#,+()$~%.\'"":*?<>{}@!]', '', slug)  # Remove special chars
    slug = re.sub(r'\s+', '-', slug)  # Spaces to hyphens
    slug = re.sub(r'-+', '-', slug)  # Duplicate hyphens
    slug = slug.strip('-')  # Remove leading/trailing hyphens
    return slug

def generate_sitemap():
    """
    Generates a single combined sitemap.xml for Vibe Styles.
    Includes static pages (home, docs, github) AND all 256 style URLs with slugs.
    Output: app/sitemap.xml
    """
    
    base_url = "https://vibe.ft.ia.br"
    today = datetime.now().strftime("%Y-%m-%d")
    
    # Load data.json for style entries
    data_path = Path("app/data/data.json")
    
    if not data_path.exists():
        print(f"❌ Erro: {data_path} não encontrado")
        return False
    
    with open(data_path, 'r', encoding='utf-8') as f:
        styles = json.load(f)
    
    # Build combined sitemap
    sitemap = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <!-- Home Page -->
  <url>
    <loc>{base_url}/</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Documentation Pages -->
  <url>
    <loc>{base_url}/docs</loc>
    <lastmod>{today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>{base_url}/github</loc>
    <lastmod>{today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
"""
    
    # Add all style URLs with slugs
    for style in styles:
        style_id = style.get('id', 1)
        slug = generate_slug(style.get('name', ''))
        style_url = f"{base_url}/{slug}"
        image_url = f"{base_url}/app/screenshots/{style_id}.png"
        
        sitemap += f"""
  <url>
    <loc>{style_url}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>{image_url}</image:loc>
      <image:title>{style['name']} - {style['type']}</image:title>
    </image:image>
  </url>
"""
    
    sitemap += """
</urlset>"""
    
    # Write single combined sitemap
    with open("app/sitemap.xml", 'w', encoding='utf-8') as f:
        f.write(sitemap)
    print(f"✅ Gerado: app/sitemap.xml ({3 + len(styles)} URLs: 3 estáticas + {len(styles)} estilos)")
    
    # Cleanup: remove old separate styles sitemap if it exists
    styles_sitemap = Path("app/sitemap-styles.xml")
    if styles_sitemap.exists():
        styles_sitemap.unlink()
        print(f"🗑️  Removido: app/sitemap-styles.xml (agora integrado ao sitemap.xml)")
    
    print(f"""
📋 Próximos passos:
1. Committar arquivos ao git:
   git add app/sitemap.xml scripts/GENERATE-SITEMAP.py
   git commit -m "fix: merge style URLs into single sitemap.xml"

2. Submeter ao Google Search Console:
   https://search.google.com/search-console
   → Sitemaps → Nova submissão
   → {base_url}/sitemap.xml
""")
    
    return True

if __name__ == "__main__":
    generate_sitemap()
