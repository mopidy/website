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
oauth:
  button: /media/images/spotify-log-in.png
  endpoint: https://auth.mopidy.com/spotify/
  config:
    spotify:
      - client_id
      - client_secret
  note: |
    If you are using [Mopidy-Spotify-Web](https://github.com/lfcabend/mopidy-spotify-web)
    you can use the same credentials in the `spotify_web` config section.
---

Extension for playing music from the [Spotify](https://spotify.com/) music
streaming service.
