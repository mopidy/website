---
title: mopidy-scrobbler
type: frontend
dev:
  github: mopidy/mopidy-scrobbler
  github_actions: true
  codecov: true
  pep621: true
dist:
  pypi: mopidy-scrobbler
  apt-debian: mopidy-scrobbler
  apt-mopidy: mopidy-scrobbler
  arch-aur: mopidy-scrobbler
  homebrew:
    tap: mopidy/mopidy
    formula: mopidy-scrobbler
compat:
  mopidy4:
    status: supported
    since: "3.0.0"
    checked: 2026-09-16
---

Extension for scrobbling played tracks to [Last.fm](https://www.last.fm/) or [Libre.fm](https://libre.fm/).
