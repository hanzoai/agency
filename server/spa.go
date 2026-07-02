package main

import (
	"io/fs"
	"net/http"
	"strings"
)

// spaHandler serves the embedded Vite SPA. Hashed asset requests (a file that
// exists in the bundle) are served with an immutable long cache; every other
// path falls through to index.html so the client-side router (react-router)
// renders it, with no-cache so a deploy rolls out without a stale shell.
func spaHandler() http.Handler {
	root := spaFS()
	files := http.FileServer(http.FS(root))

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		p := strings.TrimPrefix(r.URL.Path, "/")
		if p == "" {
			p = "index.html"
		}

		if i := strings.LastIndexByte(p, '.'); i >= 0 && !strings.Contains(p[i:], "/") {
			if st, err := fs.Stat(root, p); err == nil && !st.IsDir() {
				w.Header().Set("Cache-Control", "public, max-age=31536000, immutable")
				files.ServeHTTP(w, r)
				return
			}
		}

		w.Header().Set("Cache-Control", "no-cache")
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		idx, err := fs.ReadFile(root, "index.html")
		if err != nil {
			http.Error(w, "agency SPA not built", http.StatusServiceUnavailable)
			return
		}
		_, _ = w.Write(idx)
	})
}
