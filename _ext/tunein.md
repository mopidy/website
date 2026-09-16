---
title: mopidy-tunein
logo: /media/ext/tunein.png
type: backend
dev:
  github: mopidy/mopidy-tunein
  github_actions: true
  codecov: true
  pep621: true
dist:
  pypi: mopidy-tunein
  apt-debian: mopidy-tunein
  apt-mopidy: mopidy-tunein
  arch-aur: mopidy-tunein
  homebrew:
    tap: mopidy/mopidy
    formula: mopidy-tunein
compat:
  mopidy4:
    status: supported
    since: "2.0.0"
    checked: 2026-09-16
---

A backend for playing music from the
[TuneIn](https://tunein.com/) online radio service.
