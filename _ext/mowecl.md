---
title: mopidy-mowecl
type: web
dev:
  github: sapristi/mopidy-mowecl
  github_actions:
    workflow: test.yaml
dist:
  pypi: mopidy-mowecl
images:
  - /media/ext/mowecl.png
compat:
  mopidy4:
    status: unsupported
    note: >
      Mopidy 4 does not load this extension.
    checked: 2026-09-16
---

Clean and ergonomic web client for Mopidy. The library, playlists, etc are accessible from a single tree view.
Not suitable for small screens.
