---
title: mopidy-webm3u
type: backend
dev:
  github: mgoltzsche/mopidy-webm3u
  github_actions:
    workflow: workflow.yml
dist:
  pypi: mopidy-webm3u
compat:
  mopidy4:
    status: unknown
    note: >
      Mopidy 4 starts with this extension. Playing music is not confirmed.
    checked: 2026-09-16
---

A backend for loading M3U playlists from an HTTP server.
For example it allows you to browse and listen to the playlists within your [Beets](https://beets.io/) music library, through Beets' [webm3u](https://github.com/mgoltzsche/beets-webm3u) plugin.
