---
layout: ext
title: Mopidy-dLeyna
type: backend
dev:
  github: tkem/mopidy-dleyna
  travisci: true
  coveralls: true
dist:
  pypi: Mopidy-dLeyna
  apt-debian: mopidy-dleyna
  apt-mopidy: mopidy-dleyna
py3: prerelease
---

A backend that lets you play music from
[DLNA](https://www.dlna.org/) Digital Media Servers using the
[dLeyna](https://01.org/dleyna) D-Bus interface.

This extension lets you browse, search, and stream music from your NAS, PC,
or any other device running a UPnP/DLNA compliant media server. Compatible
devices are discovered automatically on your local network, so there is no
configuration needed.
