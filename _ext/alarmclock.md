---
title: mopidy-alarmclock
type: frontend
dev:
  github: DavisNT/mopidy-alarmclock
  github_actions: true
  coveralls: true
dist:
  pypi: mopidy-alarmclock
  arch-aur: mopidy-alarmclock
compat:
  mopidy4:
    status: unsupported
    note: >
      Mopidy 4 does not load this extension.
    checked: 2026-09-16
---

Frontend that turns Mopidy into an alarm clock, starting playback at a
configured time.
