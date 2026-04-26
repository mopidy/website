---
title: mopidy-local
type: backend
dev:
  github: mopidy/mopidy-local
  github_actions: true
  codecov: true
dist:
  pypi: mopidy-local
  apt-debian: mopidy-local
  apt-mopidy: mopidy-local
  arch-aur: mopidy-local
  homebrew:
    tap: mopidy/mopidy
    formula: mopidy-local
---

Extension for playing music from your local music archive.

In contrast to [mopidy-file](/ext/file), mopidy-local builds an index of your
archive's metadata ahead of time, and can thus provide additional features
like search.

The music metadata is stored in a SQLite database. This lets you browse your
music collection by album, artist, composer and performer, and provides
full-text search capabilities based on SQLite's FTS modules. It also notices
updates via `mopidy local scan` while Mopidy is running, so you can scan
your media library periodically, for example from a cron job.

## History

This extension is the result of the merging of three old extensions:

- mopidy-local, which before Mopidy 3 used to be bundled with Mopidy itself.
- mopidy-local-sqlite, which was an alternative to the old default JSON file storage backend.
- mopidy-local-images, which provides album art embedded in local files to web clients.
