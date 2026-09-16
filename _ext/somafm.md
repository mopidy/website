---
title: mopidy-somafm
type: backend
dev:
  github: AlexandrePTJ/mopidy-somafm
  circleci: true
  codecov: true
dist:
  pypi: mopidy-somafm
  apt-debian: mopidy-somafm
  apt-mopidy: mopidy-somafm
  arch-aur: mopidy-somafm
  homebrew:
    tap: mopidy/mopidy
    formula: mopidy-somafm
compat:
  mopidy4:
    status: supported
    since: "2.1.0"
    checked: 2026-09-16
---

A backend for playing music from the
[SomaFM](https://somafm.com/) radio channels.
