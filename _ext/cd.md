---
title: mopidy-cd
type: backend
dev:
  github: antosart/mopidy-cd
dist:
  pypi: mopidy-cd
  arch-aur: mopidy-cd-git
compat:
  mopidy4:
    status: unsupported
    note: >
      Mopidy 4 does not load this extension. It needs an older Python
      version.
    checked: 2026-09-16
---

Backend for playing audio CDs. Track metadata is looked up via
[MusicBrainz](https://musicbrainz.org/).
