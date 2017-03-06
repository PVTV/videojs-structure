# videojs-structure

This will update the default video structure, this is perfect when you need to work with react and need to add new component into the video plugin tag, you will have
two components zones: 

### `<script>` Tag
 <div data-vjs-player>
    <video id="videojs-structure-player" class="video-js vjs-default-skin" controls>
      <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
      <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm">
    </video>
    <div class="components-first-zone">Component Zone 1</div>
    <div class="components-second-zone">Component Zone 2</div>
  </div>
```js

## Default Component Tree

The default component structure of the Video.js player looks something like this:

## The Update Component Tree

The new component structure of the Video.js player looks something like this:

```tree
Player
├─┬ New Wrapper with Custom Class (Name will be the customClass parameter into the object parameters)
│ ├── MediaLoader (has no DOM element)
│ ├── PosterImage
│ ├── TextTrackDisplay
│ ├── LoadingSpinner
│ ├── BigPlayButton
│ ├─┬ ControlBar
│ │ ├── PlayToggle
│ │ ├── VolumeMenuButton
│ │ ├── CurrentTimeDisplay (hidden by default)
│ │ ├── TimeDivider (hidden by default)
│ │ ├── DurationDisplay (hidden by default)
│ │ ├─┬ ProgressControl (hidden during live playback)
│ │ │ └─┬ SeekBar
│ │ │   ├── LoadProgressBar
│ │ │   ├── MouseTimeDisplay
│ │ │   └── PlayProgressBar
│ │ ├── LiveDisplay (hidden during VOD playback)
│ │ ├── RemainingTimeDisplay
│ │ ├── CustomControlSpacer (has no UI)
│ │ ├── PlaybackRateMenuButton (hidden, unless playback tech supports rate changes)
│ │ ├── ChaptersButton (hidden, unless there are relevant tracks)
│ │ ├── DescriptionsButton (hidden, unless there are relevant tracks)
│ │ ├── SubtitlesButton (hidden, unless there are relevant tracks)
│ │ ├── CaptionsButton (hidden, unless there are relevant tracks)
│ │ ├── AudioTrackButton (hidden, unless there are relevant tracks)
│ │ └── FullscreenToggle
│ ├── ErrorDisplay (hidden, until there is an error)
│ └── TextTrackSettings
│ └── Component Zone 2 (will go the custom components into new wrapper)
├─ Component Zone 1 (will go the custom components)
```
## Table of Contents

<!-- START doctoc -->
<!-- END doctoc -->
## Installation

```sh
npm install --save videojs-structure
```

The npm installation is preferred, but Bower works, too.

```sh
bower install  --save videojs-structure
```

## Usage

To include videojs-structure on your website or web application, use any of the following methods.


### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-structure.min.js"></script>
<script>
  var player = videojs('my-video');

  player.structure({customClass: 'vjs-custom-wrapper',moveControl: true});
</script>
```
## Options

You can pass the customClass name for the new wrap video and moveControl true to move the controls video to new parent.
If you pass components like true will add a custom wrapper for your components like React or Angular.

### Browserify

When using with Browserify, install videojs-structure via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require('videojs-structure');

var player = videojs('my-video');

player.structure();
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'videojs-structure'], function(videojs) {
  var player = videojs('my-video');

  player.structure();
});
```

## License

MIT. Copyright (c) Jairo Campos Vargas


[videojs]: http://videojs.com/
