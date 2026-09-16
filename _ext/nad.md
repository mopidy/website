---
title: mopidy-nad
logo: /media/ext/logo-nad.png
type: mixer
dev:
  github: mopidy/mopidy-nad
  github_actions: true
  codecov: true
  pep621: true
dist:
  pypi: mopidy-nad
  homebrew:
    tap: mopidy/mopidy
    formula: mopidy-nad
compat:
  mopidy4:
    status: supported
    since: "4.0.0"
    checked: 2026-09-16
---

Mixer for controlling volume using an [NAD](https://nadelectronics.com/) amplifier.
Developed and tested with a NAD C355BEE.
