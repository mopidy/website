---
title: mopidy-alsamixer
type: mixer
dev:
  github: mopidy/mopidy-alsamixer
  github_actions: true
  codecov: true
  pep621: true
dist:
  pypi: mopidy-alsamixer
  apt-debian: mopidy-alsamixer
  apt-mopidy: mopidy-alsamixer
  arch-aur: mopidy-alsamixer
compat:
  mopidy4:
    status: supported
    since: "3.0.0"
    checked: 2026-09-16
---

Extension for controlling volume on a Linux system using
[ALSA](https://www.alsa-project.org/).
