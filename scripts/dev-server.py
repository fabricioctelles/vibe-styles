#!/usr/bin/env python3
"""
Dev server for Vibe Styles with slug URL rewriting.
Simulates NGINX slug routing locally.

Usage: python3 scripts/dev-server.py [port]
Default port: 8000
"""

import http.server
import os
import re
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
APP_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'app')

# Pattern matching slug URLs (same as nginx.conf)
SLUG_PATTERN = re.compile(r'^/[a-z0-9][a-z0-9-]*$')


class SlugRewriteHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=APP_DIR, **kwargs)

    def do_GET(self):
        # If path looks like a slug, serve detail.html instead
        path = self.path.split('?')[0]  # Remove query string
        if SLUG_PATTERN.match(path) and not os.path.exists(os.path.join(APP_DIR, path.lstrip('/'))):
            self.path = '/detail.html' + self.path[len(path):]  # Preserve query string if any
        return super().do_GET()

    def translate_path(self, path):
        # Let the parent handle it after our rewrite
        return super().translate_path(path)

    def end_headers(self):
        # Add CORS headers for local dev
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()


if __name__ == '__main__':
    print(f'🚀 Vibe Styles Dev Server')
    print(f'   http://localhost:{PORT}')
    print(f'   Serving from: {APP_DIR}')
    print(f'   Slug rewriting: enabled')
    print(f'   Press Ctrl+C to stop\n')

    with http.server.HTTPServer(('', PORT), SlugRewriteHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print('\n👋 Server stopped')
