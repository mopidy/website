---
title: Mopidy-Podcast
type: backend
dev:
  github: tkem/mopidy-podcast
  circleci: true
  codecov: true
dist:
  pypi: Mopidy-Podcast
  apt-debian: mopidy-podcast
  apt-mopidy: mopidy-podcast
  arch-aur: mopidy-podcast
  homebrew:
    tap: mopidy/mopidy
    formula: mopidy-podcast
py3: true
---

Extension for browsing RSS feeds of podcasts and stream the episodes.

This extension lets you browse podcasts distributed as RSS feeds and play
individual episodes in a variety of audio formats. Podcasts are mapped to
albums, while podcast episodes are shown as tracks in Mopidy, with metadata
converted to Mopidy's native data model where applicable. OPML 2.0
subscription lists and directories are also supported for multi-level
browsing.
