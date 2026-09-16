---
title: mopidy-funkwhale
logo: /media/ext/logo-funkwhale.svg
type: backend
dev:
  gitlab:
    instance: https://dev.funkwhale.audio
    repo: funkwhale/mopidy
dist:
  pypi: mopidy-funkwhale
compat:
  mopidy4:
    status: unsupported
    note: >
      This extension cannot be installed on the Python version that Mopidy
      4 needs.
    checked: 2026-09-16
---

A backend for playing music from a
[Funkwhale Server](https://funkwhale.audio/) library.
