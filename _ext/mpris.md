---
title: mopidy-mpris
type: frontend
dev:
  github: mopidy/mopidy-mpris
  github_actions: true
  codecov: true
  pep621: true
dist:
  pypi: mopidy-mpris
  apt-debian: mopidy-mpris
  apt-mopidy: mopidy-mpris
  arch-aur: mopidy-mpris
compat:
  mopidy4:
    status: supported
    since: "4.0.0"
    checked: 2026-09-16
---

Frontend for controlling Mopidy through the
[MPRIS](https://www.freedesktop.org/wiki/Specifications/mpris-spec/)
D-Bus interface, for example using the Ubuntu Sound Menu.
