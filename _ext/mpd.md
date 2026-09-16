---
title: mopidy-mpd
logo: /media/ext/logo-mpd.png
type: frontend
dev:
  github: mopidy/mopidy-mpd
  github_actions: true
  codecov: true
  pep621: true
dist:
  pypi: mopidy-mpd
  apt-debian: mopidy-mpd
  apt-mopidy: mopidy-mpd
  arch-aur: mopidy-mpd
  fedora: mopidy-mpd
  homebrew:
    tap: mopidy/mopidy
    formula: mopidy-mpd
compat:
  mopidy4:
    status: supported
    since: "4.0.0"
    checked: 2026-09-16
---

Frontend that provides a full MPD server implementation
to make Mopidy available from MPD clients.
