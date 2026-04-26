---
title: mopidy-podcast-itunes
type: backend
dev:
  github: tkem/mopidy-podcast-itunes
  github_actions: true
  codecov: true
dist:
  pypi: mopidy-podcast-itunes
  apt-debian: mopidy-podcast-itunes
  apt-mopidy: mopidy-podcast-itunes
  arch-aur: mopidy-podcast-itunes
  homebrew:
    tap: mopidy/mopidy
    formula: mopidy-podcast-itunes
---

This is an extension to the [mopidy-podcast](/ext/podcast/) backend that lets
you search and browse podcasts on [Apple Podcasts](https://podcasts.apple.com/),
using the [iTunes Search API](https://performance-partners.apple.com/search-api).
