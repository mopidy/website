---
title: mopidy-webdav
type: backend
dev:
  codeberg: Half-Shot/mopidy-webdav
dist:
  pypi: mopidy-webdav
compat:
  mopidy4:
    status: supported
    since: "0.1.0"
    checked: 2026-11-02
---

Mopidy extension for browsing and playing music stored on a WebDAV server, such as Nextcloud.

Tracks are fetched on demand and kept in a local cache, so music doesn't need to be synced to the
machine running Mopidy.
