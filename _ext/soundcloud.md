---
layout: ext
name: Mopidy-SoundCloud
type: backend
dev:
  github: mopidy/mopidy-soundcloud
  circleci: true
  codecov: true
dist:
  pypi: Mopidy-SoundCloud
  apt-debian: mopidy-soundcloud
  apt-mopidy: mopidy-soundcloud
  arch-aur: mopidy-soundcloud
py3: prerelease
auth:
  button: https://connect.soundcloud.com/2/btn-connect-sc-l.png
  config:
    soundcloud:
      auth_token: Auth token
  scripts:
    - https://connect.soundcloud.com/sdk.js
    - /media/js/soundcloud-auth.js
---

A backend for playing music from the
[SoundCloud](https://soundcloud.com/) service.
