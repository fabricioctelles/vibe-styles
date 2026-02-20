# Sitemap Generator Template for Vibe Styles
# Usage: python3 scripts/generate-sitemap.py
# Output: app/sitemap.xml + app/sitemap-styles.xml

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
    Gera sitemap.xml para Vibe Styles
    Output: 2 arquivos
    - sitemap.xml: Página principal + páginas estáticas
    - sitemap-styles.xml: URLs dinâmicas dos 256 estilos
    """
    
    base_url = "https://vibe.ft.ia.br"
    today = datetime.now().strftime("%Y-%m-%d")
    
    # 1. Sitemap Principal
    sitemap_main = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">

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

</urlset>"""
    
    # 2. Carregar data.json para IDs dos estilos
    data_path = Path("app/data/data.json")
    
    if not data_path.exists():
        print(f"❌ Erro: {data_path} não encontrado")
        return False
    
    with open(data_path, 'r', encoding='utf-8') as f:
        styles = json.load(f)
    
    # 3. Sitemap Estilos (dinâmico)
    sitemap_styles = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
"""
    
    for style in styles:
        style_id = style.get('id', 1)
        slug = generate_slug(style.get('name', ''))
        style_url = f"{base_url}/{slug}"
        
        # Cada estilo usa screenshot se disponível
        image_url = f"{base_url}/app/screenshots/{style_id}.png"
        
        sitemap_styles += f"""
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
    
    sitemap_styles += """
</urlset>"""
    
    # 4. Escrever arquivos
    with open("app/sitemap.xml", 'w', encoding='utf-8') as f:
        f.write(sitemap_main)
    print(f"✅ Gerado: app/sitemap.xml")
    
    with open("app/sitemap-styles.xml", 'w', encoding='utf-8') as f:
        f.write(sitemap_styles)
    print(f"✅ Gerado: app/sitemap-styles.xml ({len(styles)} estilos)")
    
    # 5. Próximas etapas
    print(f"""
📋 Próximos passos:
1. Committar arquivos ao git:
   git add app/sitemap.xml app/sitemap-styles.xml robots.txt
   git commit -m "feat: adiciona sitemap e robots.txt para SEO"

2. Submeter ao Google Search Console:
   https://search.google.com/search-console
   → Sitemaps → Nova submissão
   → {base_url}/sitemap.xml
   → {base_url}/sitemap-styles.xml

3. Verificar indexação (após 24-48h):
   site:{base_url} (Google)
   site:{base_url} (Bing)

4. Monitorar em GSC:
   Coverage → Indexed pages
   Enhancements → Rich results (FAQPage)
""")
    
    return True

if __name__ == "__main__":
    generate_sitemap()
