---
title: mopidy-youtube
logo: /media/ext/icon-youtube.svg
type: backend
dev:
  github: natumbri/mopidy-youtube
  circleci: true
  codecov: true
dist:
  pypi: mopidy-youtube
  arch-aur: mopidy-youtube
compat:
  mopidy4:
    status: supported
    since: "4.0.2"
    note: >
      This extension does not load on every system.
    links:
      - https://github.com/natumbri/mopidy-youtube/pull/265
    checked: 2026-09-16
---

A backend for playing music from the
[YouTube](https://www.youtube.com/) service.
