---
title: mopidy-yap
type: web
dev:
  github: dyj216/mopidy-yap
  pep621: true
dist:
  pypi: mopidy-yap
images:
  - /media/ext/yap.jpg
compat:
  mopidy4:
    status: supported
    since: "1.0.0"
    checked: 2026-11-27
---

Party web client where everyone shares the queue: guests search for and add
tracks, and vote to skip the current track, remove tracks from the queue, or
play one next. Built with React and MUI.

Inspired by [mopidy-party](/ext/party), hence the name: Yap stands for "yet
another party".

With Mopidy-Spotify or a Last.fm API key, autoplay keeps the music going with
recommended tracks when the queue runs out.
