---
title: Debian packaging of Mopidy
tags:
  - debian
  - python
  - mopidy
authors:
  - jodal
---

My first upload to Debian as a Debian Maintainer, Mopidy 0.19.4-3, landed in
Debian testing today, well in time for the upcoming freeze.

The new version adjusts the LSB facilities the sysvinit script depends on, to
make sure that DNS lookups, DBus (used by Mopidy-MPRIS), and Avahi (used for
Zeroconf service publishing) are available before Mopidy starts.

<!-- more -->

Most importantly, maybe, the new package adds a systemd service file. The
sysvinit init script included a custom action called "run", which is used to
run Mopidy subcommands with the same user and configuration as the system
service use. To replace this with something that can also be used on a system
running systemd, a new executable called `mopidyctl` has been added. The new
executable does the same: it runs Mopidy with the same user and
configuration as the init system uses to start Mopidy as a system service.

In short, `sudo service mopidy run config` now becomes `sudo mopidyctl config`,
both on systems running sysvinit and systems running systemd.

---

*This blog post was originally published at
[jodal.no](https://jodal.no/2014/10/28/debian-packaging/).*
