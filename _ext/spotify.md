---
title: Mopidy-Spotify
service: Spotify
logo: /media/ext/spotify.png
type: backend
dev:
  github: mopidy/mopidy-spotify
  circleci: true
  codecov: true
oauth:
  button:
    style: "background-color: #1ED760; color: #FFF"
    logo:
      url: https://unpkg.com/simple-icons@latest/icons/spotify.svg
      style: "filter: invert(1); width: 1.2rem"
  endpoint: https://auth.mopidy.com/spotify/
  config:
    spotify:
      - client_id
      - client_secret
---

Extension for playing music from the [Spotify](https://spotify.com/) music
streaming service. Mopidy-Spotify is currently only available from GitHub.
