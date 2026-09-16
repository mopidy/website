---
title: mopidy-raspberry-gpio
logo: /media/ext/icon-raspberry-gpio.svg
type: frontend
dev:
  github: pimoroni/mopidy-raspberry-gpio
  circleci: true
  codecov: true
dist:
  pypi: mopidy-raspberry-gpio
compat:
  mopidy4:
    status: unknown
    note: >
      Not tested.
    checked: 2026-09-16
---

Frontend for controlling Mopidy from GPIO signals on a Raspberry Pi.

This plugin is used by Pimoroni's
[Pirate Audio](https://shop.pimoroni.com/collections/pirate-audio) DACs
to play/pause, skip track, and adjust volume.
