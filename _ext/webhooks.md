---
title: mopidy-webhooks
type: frontend
dev:
  github: paddycarey/mopidy-webhooks
  github_actions: true
dist:
  pypi: mopidy-webhooks
  arch-aur: mopidy-webhooks
compat:
  mopidy4:
    status: unsupported
    note: >
      Mopidy 4 does not load this extension.
    checked: 2026-09-16
---

Frontend that sends webhook notifications to a remote URL when Mopidy events
occur, for integrating Mopidy with external systems.
