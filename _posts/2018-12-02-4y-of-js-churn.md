---
title: "Four years of JavaScript churn: Mopidy.js 1.0"
tags:
  - mopidy
  - javascript
authors:
  - jodal
---

Yesterday, I released v1.0.0 of the [Mopidy.js](https://github.com/mopidy/mopidy.js)
JavaScript library. Even though the library serves as the basis for most Mopidy
web clients and has been in active use since 2013, this was the first release
in almost four years.

Four years is quite a long time in the world of JavaScript.

<!-- more -->

In the beginning of October, I [stopped
bundling](https://github.com/mopidy/mopidy/commit/1e0d7c6715dcf137759b272b6d5e1c0b77268c99)
Mopidy.js with the Mopidy Python project and thus had to update the Mopidy.js
documentation. While doing so, I tried to run the test suite, written using
[Buster.JS](https://github.com/busterjs), which has been abandoned for a few
years. To no avail, npm and Yarn were not able to install the library's
development dependencies.

After four years of standing still while the fast-moving world of JavaScript
sped on, I seemed forced to spend some time on modernizing the library and
it's development tooling to ensure that it would be maintainable going
forward.

I asked a couple of coworkers for advice on what to replace Buster.JS with that
could test a library in both Node.js and the browser, and what they would use
instead of Browserify today. I was quickly pointed towards
[Jest](https://jestjs.io/) for testing and [Parcel](https://parceljs.org/) for
zero-configuration builds.

Porting the full test suite--three times the size of the library--to Jest was
[work](https://github.com/mopidy/mopidy.js/commit/fc1bd39e6251fc7306c200b81d969d6784972830),
but mostly mechanical work. The only part I needed to read a bit up on was
Jest's [mocking capabilities](https://jestjs.io/docs/en/mock-functions)
compared to [Sinon.JS](https://sinonjs.org/).

# Modernizing development tooling

After getting the test suite running again the modernization continued.

JSHint and a [list of
rules](https://github.com/mopidy/mopidy.js/commit/6cec1fc5f46095b53693a76871eb673926bba73f)
were replaced with [ESLint](https://eslint.org/) and [Airbnb's style
guide](https://github.com/airbnb/javascript).

All code was reformatted with [Prettier](https://prettier.io/). This required
[almost no
configuration](https://github.com/mopidy/mopidy.js/commit/720f550991078073a56c36033d497bf027a2aadb),
once figuring out how to make ESLint and Prettier stay friends. However, the
experience of getting an entirely consistent code style without any effort is
priceless. I can accept most differences from my previous styles in exchange
for not having to do the work myself and not having to enforce that my
contributors and coworkers do the same. Formatters like Prettier,
[Black](https://black.readthedocs.io/), `gofmt`, and `rustfmt` are here to stay
and will probably be an integral part of all new programming languages.

The Mopidy.js code was originally hand-written ES5 using all the hard-learned
tricks of the trade from David Herman's splendid book [Effective
JavaScript](http://effectivejs.com/). At least it was splendid in 2013. Now it
was
[converted](https://github.com/mopidy/mopidy.js/commit/52e36e19a185a868b8bf50e443a3b7bd14d50853)
to a modern ES6 class with a single click in VS Code, passing all tests bar one:
you cannot instantiate an ES6 class without the `new` keyword.

Removing Buster.JS and JSHint reduced the project's Grunt setup a bit. The move
from Browserify for browser builds and Uglify for minification to Parcel lead
to the removal of Grunt entirely, and the replacement of [a monitor height or
two](https://github.com/mopidy/mopidy.js/commit/e2e2118003ec33421ce4ad40cf9116ac7908a896)
of Grunt config with the command `parcel build src/mopidy.js`.

# Reducing runtime dependencies

The time had now come to runtime dependencies.

The `faye-websocket` package was replaced with the
[ws](https://www.npmjs.com/package/ws) package, which made it possible to
replace our own Node.js/browser [compatibility
layer](https://github.com/mopidy/mopidy.js/commit/703d18b82c34ab779471aa0cb2e5d90a3c39cb26)
for WebSocket usage with
[isomorphic-ws](https://www.npmjs.com/package/isomorphic-ws).

Since the last release of Mopidy.js in 2015, ES6's Promise implementation has
become quite universally available. Thus,
[when](https://www.npmjs.com/package/when) could be replaced with Promise,
[shrinking](https://github.com/mopidy/mopidy.js/commit/23ecc224d642bac0ab5b411acc370906af510348)
the minified library from 42 kB to 12 kB.

[BANE](https://github.com/busterjs/bane), an event emitter library that was
part of the now-dead Buster.JS testing tool, was replaced with the
`EventEmitter` implementation from Node.js' standard library. Parcel
helpfully and entirely automatically included the `EventEmitter` implementation
from Node.js as part of the web bundle, without having to add a dependency on
[one of the npm packages](https://www.npmjs.com/search?q=events) that has
extracted this lib from the Node.js standard library.

# Making demo applications

Once everything was modernized, I added two demo applications to the project.

The
[web-based](https://github.com/mopidy/mopidy.js/commit/d600608034ae4362a02443441ce3ed5dfa7bdedc)
application is served by Parcel's web server. The configuration needed? Add
`parcel examples/web.html` as the `start` script in `package.json` and I was
done: `yarn start` now runs the demo web app on `http://localhost:1234`, with
automatic code reloading on source changes.

For the Node.js [console
application](https://github.com/mopidy/mopidy.js/commit/9db5a903024cae2d6aed7ec52a25919ad9af6b7a),
I quickly remembered that while promises are better than callbacks, they can
still quickly become quite mind-boggling to work with. Enter async/await,
spreading like wildfire from language to language the last few years, and
fully available in Node.js since 2017. You just have to remember to create all
the promises you need, and only then `await` them. This makes it possible for
the promises to be fulfilled in parallel instead of sequentially, avoiding that
the sequential round trip times to the server add up.

Somewhere around here I read a bit up on TypeScript and tested out porting the
library to TypeScript with great help from VS Code. Due to Mopidy.js' tiny static
API and quite large dynamic API, automatically generated based on the API
description retrieved from the server, this didn't seem a worthy path to go
down this time around. However, the experience was a good one, and I'll
probably revisit TypeScript in the future on other projects.

Finally, the Mopidy.js docs were
[moved](https://github.com/mopidy/mopidy.js/commit/20c0fdc13c9f5e4558e9a2205200fec51fd8abc3)
from the Mopidy docs to the Mopidy.js project and updated accordingly. Being
used to writing docs in [Sphinx](https://www.sphinx-doc.org/), Markdown's lack
of features like generating a table of contents can feel limiting. Of course,
[several](https://github.com/neilsustc/vscode-markdown) VS Code
extensions can automatically generate a ToC and keep it up to date every
time you save your file.

# Wrapping up

In the late 1990s, I tweaked JavaScript-based web calculators. In the 2000s I
surfed with JavaScript disabled and required apps we built to work without it.
From 2011 through 2015, I spent a small majority of my time in frontend
JavaScript. Since the summer of 2016, I've done very little, if any, JavaScript.

It seems that my relationship with and usage of JavaScript varies like the
tide, even if on another time scale. After a while away, JavaScript as of late
2018 seems to be in a lot better place than in 2015. The language is nicer.
The chore of project setup and maintenance is reduced. Tooling is better, and
way better integrated. I've felt the JavaScript fatigue before, but from my
perspective, it seems like many things are stabilizing in a quite good place.

I'd go as far as claiming that the exercise of modernizing Mopidy.js
and its development tooling was, at times, fun and inspiring.

Here's to four more years of Mopidy.js. Then I might be back with a port to
WebAssembly, implemented in Rust, or a language yet to be designed. We'll see!

---

*This blog post was originally published at
[jodal.no](https://jodal.no/2018/12/02/4y-of-js-churn/).*
