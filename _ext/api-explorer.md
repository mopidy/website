---
title: mopidy-api-explorer
type: web
dev:
  github: mopidy/mopidy-api-explorer
  github_actions: true
  codecov: true
  pep621: true
dist:
  pypi: mopidy-api-explorer
  homebrew:
    tap: mopidy/mopidy
    formula: mopidy-api-explorer
images:
  - /media/ext/api-explorer.jpg
compat:
  mopidy4:
    status: supported
    since: "2.0.0"
    checked: 2026-09-16
---

A web client that lets you explore Mopidy's JSON-RPC API, including the
available methods, their parameters, and the data they return. Useful when
developing Mopidy clients or extensions.
