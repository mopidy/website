---
title: mopidy-jellyfin
logo: /media/ext/icon-jellyfin.svg
type: backend
dev:
  github: jellyfin/mopidy-jellyfin
dist:
  pypi: mopidy-jellyfin
  arch-aur: mopidy-jellyfin
compat:
  mopidy4:
    status: unreleased
    note: >
      Tracks without a date do not load.
    links:
      - https://github.com/jellyfin/mopidy-jellyfin/issues/154
    checked: 2026-09-16
---

A backend for playing audio files from [Jellyfin](https://jellyfin.org/), a fully open source and self-hosted media server.
