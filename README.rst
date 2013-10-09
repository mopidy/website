Mopidy website
==============

This repo is the source for the following web sites:

- http://www.mopidy.com hosted at GitHub Pages
- http://apt.mopidy.com hosted at Mopidy's Rackspace server

The documentation site, http://docs.mopidy.com, does not use this repo. It is
based on the ``docs/`` dir of the main Mopidy repo, and is hosted by `Read The
Docs <http://readthedocs.org/>`_.


Deploying changes
-----------------

To update www.mopidy.com, make changes to the source, commit, and push the
``gh-pages`` branch of this repo to
``git@github.com:mopidy/mopidy-website.git``. That's it.

To update apt.mopidy.com, make changes to the source, commit, push, and ask
`jodal <https://github.com/jodal>`_ or `adamcik <https://github.com/adamcik>`_
to deploy your changes.
