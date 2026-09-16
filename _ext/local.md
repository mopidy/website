---
title: mopidy-local
type: backend
dev:
  github: mopidy/mopidy-local
  github_actions: true
  codecov: true
  pep621: true
dist:
  pypi: mopidy-local
  apt-debian: mopidy-local
  apt-mopidy: mopidy-local
  arch-aur: mopidy-local
  homebrew:
    tap: mopidy/mopidy
    formula: mopidy-local
compat:
  mopidy4:
    status: supported
    since: "4.0.0"
    checked: 2026-09-16
---

Backend for playing music from your local music archive. It scans your
files ahead of time, so that you can search, and browse by album, artist,
composer, performer, genre and year.

In contrast to [mopidy-file](/ext/file), which reads your folders as they
are, mopidy-local keeps an index of the metadata. The index lives in a
SQLite database, and the search uses SQLite's full-text search. Run
`mopidy local scan` to build it, and again whenever the collection
changes. Mopidy picks up a scan while it runs, so the scan can come from
a cron job.

## History

This extension is the result of the merging of three old extensions:

- mopidy-local, which before Mopidy 3 used to be bundled with Mopidy itself.
- mopidy-local-sqlite, which was an alternative to the old default JSON file storage backend.
- mopidy-local-images, which provides album art embedded in local files to web clients.
