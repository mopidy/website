---
title: mopidy-dleyna
logo: /media/ext/icon-dleyna.svg
type: backend
dev:
  github: tkem/mopidy-dleyna
  github_actions: true
  codecov: true
dist:
  pypi: mopidy-dleyna
  apt-debian: mopidy-dleyna
  apt-mopidy: mopidy-dleyna
compat:
  mopidy4:
    status: supported
    since: "3.0.0"
    checked: 2026-09-16
---

A backend that lets you play music from
[DLNA](https://www.dlna.org/) Digital Media Servers using the
[dLeyna](https://01.org/dleyna) D-Bus interface.

This extension lets you browse, search, and stream music from your NAS, PC,
or any other device running a UPnP/DLNA compliant media server. Compatible
devices are discovered automatically on your local network, so there is no
configuration needed.
