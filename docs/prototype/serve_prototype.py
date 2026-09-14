#!/usr/bin/env python3
"""PROTOTYPE server — one command:  python3 serve_prototype.py
Run from THIS directory (docs/prototype/). It serves from the
project repo root so the lesson markdown and design-system tokens resolve,
then opens the page in your browser.

No caching on purpose: the prototype changes fast and a stale app.js/style.css
is the classic way this goes wrong."""
import os
import socketserver
import threading
import webbrowser
from http.server import SimpleHTTPRequestHandler

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", ".."))
PORT = 8721
PROTO = "/docs/prototype/?lesson=1"


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def log_message(self, fmt, *args):
        pass


class Server(socketserver.TCPServer):
    allow_reuse_address = True
    allow_reuse_port = True
    daemon_threads = True


os.chdir(ROOT)
httpd = Server(("", PORT), Handler)
url = f"http://localhost:{PORT}{PROTO}"
print(f"PROTOTYPE — StudyDeck cards + ReelLearn rail. Open:\n  {url}\nPress Ctrl+C to stop.")
threading.Timer(0.5, lambda: webbrowser.open(url)).start()
try:
    httpd.serve_forever()
except KeyboardInterrupt:
    print("\nStopped.")