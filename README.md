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
title: Mopidy-Foo          # Name of extension
type: backend              # One of "backend"/"frontend"/"mixer"/"web"

# Optional fields:
service: FooBar            # Name of the upstream service if any.
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
logo: /media/ext/foo.png   # Logo, e.g. of the music service
images:                    # List of images of the extension in use
  - /media/ext/foo.jpg
prerelease: false          # True when only a prerelease version is compatible
                           # with Mopidy 3.x
oauth:                     # OAuth integration for services that require tokens
  endpoint: https://example.com # Redirection endpoint to start OAuth flow
  origin: https://example.org   # Origin of callback page at end of OAuth flow
                                # Defaults to endpoint's origin if not set
  button:                       # Styling for auth button
    style: background: ...      # Inline CSS to apply to button.
    logo:
      url:                      # URL to logo to use
      style:                    # Inline CSS to apply to logo.
  config:                       # One or more config sections to fill with data
    section_name:               # Name of the config section
     - config_field             # Config field name
  note: Extra markdown info...  # Optional text adding more info
```

### OAuth authentication

The extension registry has support for integrating OAuth for service
integration. This works by opening a pop-up targeted at the configured
endpoint, during the flow we try polling with `postMessage` targeted at the
callback origin. Once the flow is complete, and your callback page loads it
should install an event listener that will reply to our polling. Once our code
has the data we close the pop-up for you.

``` javascript
      const data = {
        auth_token: ...,
        state: ...,
        error: ...,
        error_description: ...,
      };
      window.addEventListener('message', event => {
        if (event.origin === 'https://mopidy.com') {
          event.source.postMessage(data, event.origin);
        }
      });
```

Note that the field names in the data should be mapped to the expected config
field names. E.g. mapping `access_token` to `auth_token`. The `error` field is
an error code, and `error_description` a human friendly version of the same
error. `state` is there to pass back any initial state we might have sent to
the endpoint.
