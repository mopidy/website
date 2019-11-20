# Mopidy website

This repo is the source for https://mopidy.com, hosted at GitHub Pages.

The documentation site, https://docs.mopidy.com, does not use this repo. It is
based on the `docs/` dir of the main Mopidy repo, and is hosted by [Read The
Docs](https://readthedocs.org/).


## Running locally

See the docs on [Testing your GitHub Pages site locally with Jekyll][1].

[1]: https://help.github.com/en/articles/testing-your-github-pages-site-locally-with-jekyll


## Deploying changes

To update https://mopidy.com, make changes to the source, commit, and push to
`git@github.com:mopidy/website.git`.

That's it.


## Extension registry

This extension registry is a community effort, and will never be complete
without your help.

To add or update an extension, use the existing extension definitions in the
`_ext/` directory for inspiration. Submit your update as a pull request on
this repo.

The source files for the Mopidy extension registry can be found in the
`_ext/` directory. Any related images are in the `media/ext/` directory.

The "front matter" part of the extension definitions is a YAML data structure
with the following fields:

``` yaml
# Required fields:
layout: ext                # Should always be "ext"
name: Mopidy-Foo           # Name of extension
type: backend              # One of "backend"/"frontend"/"mixer"/"web"

# Optional fields:
dev:                       # Development related fields
  github: mopidy/mopidy-foo     # GitHub repo
  circle: true                  # Whether using CircleCI
  travisci: false               # Whether using Travis CI
  codecov: true                 # Whether using Codecov code coverage
  coveralls: false              # Whether using Coveralls code coverage
dist:                      # Distribution related fields:
  pypi: Mopidy-Foo              # PyPI package name
  apt-debian: mopidy-foo        # Debian/Ubuntu package name
  apt-mopidy: mopidy-foo        # apt.mopidy.com package name
  arch-aur: mopidy-foo          # Arch Linux AUR package name
  homebrew:
    tap: mopidy/mopidy          # Homebrew tap name
    formula: mopidy-foo         # Homebrew formula name in above tap
images:                    # List of images of the extension in use
  - /media/ext/foo.jpg
py3: false                 # Python 3 support. One of true/false/"prerelease"
```
