package main

import (
	"embed"
	"io/fs"
)

// staticFS holds the built Vite SPA. At docker build time the Vite output
// (dist/) is copied into ./static, overwriting the committed placeholder
// index.html. `all:` includes files whose names start with "_" or "." so
// Vite's hashed assets under _assets/ are embedded too.
//
//go:embed all:static
var staticFS embed.FS

// spaFS returns the embedded SPA rooted at the static/ directory.
func spaFS() fs.FS {
	sub, err := fs.Sub(staticFS, "static")
	if err != nil {
		panic("agency: embedded static/ missing: " + err.Error())
	}
	return sub
}
