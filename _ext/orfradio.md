---
title: mopidy-orfradio
logo: /media/ext/logo-orfradio.svg
type: backend
dev:
  github: mopidy/mopidy-orfradio
  github_actions: true
  codecov: true
  pep621: true
dist:
  pypi: mopidy-orfradio
  homebrew:
    tap: mopidy/mopidy
    formula: mopidy-orfradio
compat:
  mopidy4:
    status: supported
    since: "3.0.0"
    checked: 2026-09-16
---

Extension to access the [Austrian ORF radio stations](https://radiothek.orf.at/). It provides access to the live streams and the 7 day archive.
