---
title: mopidy-listenbrainz
type: frontend
dev:
  github: suaviloquence/mopidy-listenbrainz
  github_actions: true
dist:
  pypi: mopidy-listenbrainz
  arch-aur: mopidy-listenbrainz
  homebrew:
    tap: mopidy/mopidy
    formula: mopidy-listenbrainz
logo: /media/ext/listenbrainz.svg
compat:
  mopidy4:
    status: supported
    since: "0.4.0"
    checked: 2026-09-16
---

Extension for recording song listens to [ListenBrainz](https://listenbrainz.org), a libre alternative to
Last.fm.  It also provides ListenBrainz-generated recommendation playlists to Mopidy.
