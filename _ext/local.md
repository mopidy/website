---
layout: ext
title: Mopidy-Local
type: backend
dev:
  github: mopidy/mopidy-local
  circleci: true
  codecov: true
dist:
  pypi: Mopidy-Local
py3: prerelease
---

Extension for playing music from your local music archive.

In contrast to [Mopidy-File](/ext/file), Mopidy-Local builds an index of your
archive's metadata ahead of time, and can thus provide additional features
like search.

The music metadata is stored in a SQLite database. This lets you browse your
music collection by album, artist, composer and performer, and provides
full-text search capabilities based on SQLite's FTS modules. It also notices
updates via `mopidy local scan` while Mopidy is running, so you can scan
your media library periodically, for example from a cron job.

## History

This extension is the result of the merging of three old extensions:

- Mopidy-Local, which before Mopidy 3 used to be bundled with Mopidy itself.
- Mopidy-Local-SQLite, which was an alternative to the old default JSON file storage backend.
- Mopidy-Local-Images, which provides album art embedded in local files to web clients.
