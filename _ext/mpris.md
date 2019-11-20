---
layout: ext
name: Mopidy-MPRIS
type: frontend
dev:
  github: mopidy/mopidy-mpris
  circleci: true
  codecov: true
dist:
  pypi: Mopidy-MPRIS
  apt-debian: mopidy-mpris
  apt-mopidy: mopidy-mpris
  arch-aur: mopidy-mpris
py3: prerelease
---

Frontend for controlling Mopidy through the
[MPRIS](https://www.freedesktop.org/wiki/Specifications/mpris-spec/)
D-Bus interface, for example using the Ubuntu Sound Menu.
