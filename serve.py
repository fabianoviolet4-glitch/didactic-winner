"""
VERITAS AI - Institutional Document Intelligence Engine
Local Development Server
"""
import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def main():
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        url = f"http://localhost:{PORT}"
        print("=" * 65)
        print(" VERITAS AI — Institutional Document Intelligence Landing Page")
        print(f" Local Web Server running at: {url}")
        print(" Press Ctrl+C to terminate.")
        print("=" * 65)
        
        if "--open" in sys.argv or "-o" in sys.argv:
            webbrowser.open(url)
            
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server gracefully...")

if __name__ == "__main__":
    main()
