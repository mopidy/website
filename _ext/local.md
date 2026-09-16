---
title: mopidy-local
logo: /media/ext/icon-local.svg
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
