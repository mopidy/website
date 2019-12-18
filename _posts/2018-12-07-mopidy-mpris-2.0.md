---
title: Mopidy-MPRIS 2.0 released
tags:
  - mopidy
  - mpris
  - python
authors:
  - jodal
---

I've released [Mopidy-MPRIS](https://github.com/mopidy/mopidy-mpris) 2.0, the
first major update to Mopidy-MPRIS in about 3.5 years.

Mopidy-MPRIS is a Mopidy extension that makes [Mopidy](https://mopidy.com/)
controllable from other programs on the same machine through D-Bus. This makes
it possible to control Mopidy from various widgets in GNOME/KDE/etc, as well as
with keyboard media keys.

<!-- more -->

This release replaces the `python-dbus` D-Bus bindings with `python-pydbus` to
modernize the code base and prepare it for the move to Python 3. It also wires
up a lot of events so that various UI elements are immediately updated when the
server state changes.

As part of the release, the
[documentation](https://github.com/mopidy/mopidy-mpris/blob/master/README.rst)
has been greatly extended, including a survey of some MPRIS clients and tips on
how to run Mopidy-MPRIS on the system bus. Throughout the documentation, I've
added calls for help wherever something isn't working perfectly and I haven't
figured it out yet. Even with these rough spots, this is easily the best
Mopidy-MPRIS release so far.

For all the details, check out the
[changelog](https://github.com/mopidy/mopidy-mpris/blob/v2.0.0/CHANGELOG.rst).

---

*This blog post was originally published at
[jodal.no](https://jodal.no/2018/12/07/mopidy-mpris-2.0/).*
