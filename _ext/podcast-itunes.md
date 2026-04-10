---
title: Mopidy-Podcast-iTunes
type: backend
dev:
  github: tkem/mopidy-podcast-itunes
  circleci: true
  codecov: true
dist:
  pypi: Mopidy-Podcast-iTunes
  apt-debian: mopidy-podcast-itunes
  apt-mopidy: mopidy-podcast-itunes
  arch-aur: mopidy-podcast-itunes
  homebrew:
    tap: mopidy/mopidy
    formula: mopidy-podcast-itunes
---

This is an extension to the [Mopidy-Podcast](/ext/podcast/) backend that lets
you search and browse podcasts on [Apple Podcasts](https://podcasts.apple.com/),
using the [iTunes Search API](https://performance-partners.apple.com/search-api).
