---
title: mopidy-tidal
service: Tidal
logo: /media/ext/icon-tidal.svg
type: backend
dev:
  github: EbbLabs/mopidy-tidal
  github_actions:
    workflow: test.yml
  codecov: true
dist:
  pypi: mopidy-tidal
  arch-aur: python-mopidy-tidal
compat:
  mopidy4:
    status: in-progress
    note: >
      Mopidy 4 starts with this extension, but not everything
      works.
    links:
      - https://github.com/EbbLabs/mopidy-tidal/issues/152
    checked: 2026-09-16
---

Extension for playing music from the
[TIDAL](https://tidal.com/) music streaming service.