---
title: mopidy-bandcamp
type: backend
dev:
  github: impliedchaos/mopidy-bandcamp
  github_actions:
    workflow: CI.yml
  codecov: true
dist:
  pypi: mopidy-bandcamp
  arch-aur: mopidy-bandcamp
logo: /media/ext/icon-bandcamp.svg
compat:
  mopidy4:
    status: unreleased
    note: >
      Albums come up empty.
    links:
      - https://github.com/impliedchaos/mopidy-bandcamp/issues/26
    checked: 2026-09-16
---

A backend for searching, browsing, and playing the free 128kbps MP3 streams from
[bandcamp](https://www.bandcamp.com/).
