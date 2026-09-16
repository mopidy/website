---
title: mopidy-soundcloud
service: SoundCloud
logo: /media/ext/icon-soundcloud.svg
type: backend
dev:
  github: mopidy/mopidy-soundcloud
  github_actions: true
  codecov: true
  pep621: true
dist:
  pypi: mopidy-soundcloud
  apt-debian: mopidy-soundcloud
  apt-mopidy: mopidy-soundcloud
  arch-aur: mopidy-soundcloud
  homebrew:
    tap: mopidy/mopidy
    formula: mopidy-soundcloud
oauth:
  button:
    style: "background-color: #FF3300; color: #FFF"
    logo:
      url: https://unpkg.com/simple-icons@latest/icons/soundcloud.svg
      style: "filter: invert(1)"
  endpoint: https://secure.soundcloud.com/connect?client_id=93e33e327fd8a9b77becd179652272e2&scope=non-expiring&response_type=code_and_token&redirect_uri=https://www.mopidy.com/soundcloud_callback
  origin: https://mopidy.com
  config:
    soundcloud:
      - auth_token
compat:
  mopidy4:
    status: supported
    since: "4.0.0"
    checked: 2026-09-16
---

A backend for playing music from the
[SoundCloud](https://soundcloud.com/) service.
