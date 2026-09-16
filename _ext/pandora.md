---
title: mopidy-pandora
logo: /media/ext/icon-pandora.svg
type: backend
dev:
  github: mopidy/mopidy-pandora
  github_actions: true
  codecov: true
  pep621: true
dist:
  pypi: mopidy-pandora
  arch-aur: mopidy-pandora
  homebrew:
    tap: mopidy/mopidy
    formula: mopidy-pandora
compat:
  mopidy4:
    status: supported
    since: "2.0.0"
    checked: 2026-09-16
---

A backend for playing music from the
[Pandora](https://www.pandora.com/) music streaming and radio service.
