---
layout: post
title: Bringing the Mopidy music server to the browser
tags:
  - api
  - mopidy
  - python
  - javascript
  - web
  - websocket
authors:
  - jodal
---

[Mopidy](https://mopidy.com/) is a music server written in
Python. It plays music from various sources, including local disk and Spotify.
Mopidy can be remote-controlled by, among others, <abbr title="Music Player
Daemon">MPD</abbr> clients.

In Mopidy 0.10, released in the middle of December, we added an HTTP frontend.
The HTTP frontend takes Mopidy's full core API and makes it available from
JavaScript in the browser. This means that you now can make your own web
clients for Mopidy in JavaScript, and Wouter van Wijk has already started on
[his client](https://github.com/pimusicbox/mopidy-musicbox-webclient) (*updated
link*).

I'd like to write a bit about how we made the HTTP client.

<!-- more -->

From the start, I was quite clear on having enough work to do on the server-side
of Mopidy. Thus, making my own client to test out REST APIs and to make
sure the APIs we exposed were usable was mostly out of the question. Also,
making a REST API would require us to spend huge amounts of time on figuring
out how to best remap our procedural "core API" to REST resources. When the
remapping would be complete, if ever, we would be stuck with the maintenance of
yet another API on top of the core API, with all the associated mismatches and
hacks required to match them up. We got enough of them in the MPD frontend.

Wouter had experimented a bit himself with making an HTTP frontend and
suggested that we should go for an <abbr title="Remote Procedure
Call">RPC</abbr> model. I was reluctant at first. RPC reminds me of SOAP, the
nineties, and other similar ideas that I don't exactly regard as the state of
the art.

After some thought, I figured that with an RPC API, I could probably make the
entire API on the server-side dynamically. In other words, I could get it done
in a lot less time than a REST API, and it would maintain itself. At least, it
would maintain itself to any degree such a thing is possible. If we added a new
method to the core API, it would immediately be available through the HTTP RPC
API. This would of course also mean that if we changed anything in the existing
core API, we'd break any web client that uses that part of the API. After some
discussion, we decided that we were OK with this drawback. After all, we intend
the core API to become quite stable with time, where time approximately equals
the release of v1.0. Also, the initial development work and future maintenance
work associated with making an RPC API were within our reach, without
distracting us for too long from work on the core code, the MPD and MPRIS
frontends, and the local storage and Spotify backends. You see, we already got
a healthy list of moving parts to keep oiled and working.

The part that got me excited on an RPC API (of all things to get
excited about) was the insight that if I added some introspection support to
the API, I could make a JavaScript library to rebuild the entire API in the
browser. So, instead of just providing a web service endpoint URL to potential
client providers, we could offer them a complete API in the browser. Ready for
development. Queue your first music track in a few minutes of development.
That's a good value proposition for aspiring client developers if you ask me.

So, I made a new HTTP frontend. It started a CherryPy web server. Then it
plugged ws4py into CherryPy, and we got a working WebSocket. Then I made my
custom RPC API, using JSON as the transport format. I sent messages from
Chrome's console, and music started playing. It worked. It wasn't tested, but I
was happy so far.

Then Thomas, my main co-developer, wise as always, pasted the URL to the
[JSON-RPC 2.0 specification](http://www.jsonrpc.org/specification). Humph, I
thought, not leaving it much chance. I read through the rather short spec and
concluded that it was really close to what I'd reinvented, minus support for
calls with both positional and named arguments at the same time.

Cutting it short, I spent the next day or so implementing JSON-RPC 2.0, this
time with tests. I plugged it into the HTTP frontend, and it worked.

Now you might say: Why didn't you use one of the 25 or so existing JSON-RPC
implementations on PyPI. Because there are 25 or so. How am I to review them in
less time than it takes to implement the perfect one for my needs? Many of the
alternatives provide examples of how to execute a Python file, and then
magically a web server will be running. That's not a selling point to me since
JSON-RPC got nothing to do with webservers or the message transport for that
matter. JSON-RPC is simply a mapping between a JSON format and method calls. It
should be implemented by some function/object that accepts JSON, makes the
required Python calls, and then returns the return values as JSON again. That's
it. No web server. Maybe some API introspection.

Digression aside, I'm considering extracting and releasing our JSON-RPC
adapter. Then it'll be N+1 [competing standards](https://xkcd.com/927/), eh, I
mean, implementations.

Next up was the JavaScript library. The main discussion here was actually where
to place the code in our pure-Python repo. Bikeshedding of easily reversible
decisions continues to be the easiest discussions to have. We ended on `js/` in
the root of the repo. How imaginative of us.

The first thing in any new JavaScript project is, of course, to set up
[Buster.JS](http://www.busterjs.org/) for testing. I also tried out the [Grunt
build tool](https://gruntjs.com/) for the first time. (My friend Pål recently
wrote an [introduction to Grunt](https://ruudud.github.io/2012/12/22/grunt/)
featured at HN and in JavaScript Weekly.) Buster.JS in combination with Grunt
and [PhantomJS](http://phantomjs.org/) was a delight. If you simply run
`grunt watch` and then modify a source file, your code is linted and tested
in a headless browser in second or so. This makes JavaScript development for
the browser feel like server-side development. If this sounds interesting,
check out [our JavaScript project
setup](https://github.com/mopidy/mopidy.js) (*updated link*).

TODO

- Mopidy.js usage examples
- Invitation to develop clients

---

### Note from August 2017

This is a blog post draft that was originally written in January 2013,
left unattended for 1689 days, and rediscovered and published unedited in
August 2017.

During the five years since Mopidy entered the browser with its HTTP JSON-RPC
API and the Mopidy.js JavaScript library, many successful Mopidy web
clients have been built on top of this foundation. The APIs themselves have
survived the test of time and have required minimal maintenance, just as I
hoped when implementing the APIs back in November 2012.

To quickly address the above TODOs from January 2013: Usage examples can
be found in the [Mopidy docs](https://docs.mopidy.com/en/latest/api/js/), and
an invitation to develop clients wasn't needed, as [a
dozen clients](https://docs.mopidy.com/en/latest/ext/web/) was made without
it.

---

*This blog post was originally published at
[jodal.no](https://jodal.no/2017/08/26/mopidy-in-the-browser/).*
