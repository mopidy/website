---
layout: ext
name: Mopidy-Spotify
type: backend
dev:
  github: mopidy/mopidy-spotify
  circleci: true
  codecov: true
dist:
  pypi: Mopidy-Spotify
  apt-mopidy: mopidy-spotify
  arch-aur: mopidy-spotify
  homebrew:
    tap: mopidy/mopidy
    formula: mopidy-spotify
py3: prerelease
auth:
  button: /media/images/spotify-log-in.png
  config:
    spotify:
      client_id: Client ID
      client_secret: Client Secret
  scripts:
    - /media/js/spotify-auth.js

---

Extension for playing music from the [Spotify](https://spotify.com/) music
streaming service.
