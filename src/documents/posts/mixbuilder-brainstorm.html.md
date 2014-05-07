---
title: "5/7/2014 Linx MixBuilder Meetup"
author: "me"
---

In the wake of the previous brainstorm's success, a subset of us reconvened to discuss the design of the Mix Builder in more detail.

#### Attendees:
- Daniel Leja
- Chii Maene
- Isabella Granados
- Ginny McGinnis

# Major Topics:

## 1. MixBuilder `map` view
 - purpose: to select which songs/transitions are part of your mix
 - map has 2 core sections:
  + 'overview'/'list': section on left to display all tracks in mix at-a-glance
  + 'main'/'graph': main/center section to display selected track and other possible options
 - different 'main' views depending on which [song/transition] is selected:
  + `flower`: active when the last song of the mix is selected, this is the classic Linx view
  + `song edit`: active when selecting a song in the mix which is not the last song. prev song goes to top, next song goes to bottom, possible options to replace selected song are lined up in the center and connected to prev and next songs by lines indicating transitions (see included picture for reference).
  + `transition`: start and end song on top and bottom, all transition choices between them
   * NOTE: this has low priority since it won't be useful until we have lots transitions to choose from!

## 2. MixBuilder `timeline` view
 - similar to SoundBar's `wave` view
 - can be zoomed in/out
 - serves as a visual reference for how the mix will play out
  + left-to-right wave format appeals to users of soundcloud/DAW/traktor/etc
 - possibly offer editing capabilities, ie crossfader automation / wave positioning
 - waveforms will each have their own colors to distinguish breakpoints between songs/transitions

## 3. To Be Continued...
 - how to preview upNext [songs/transitons] in the mixbuilder
 - details of `timeline` view
  + how does it look
  + what functionality does it have
  + how does this play into the idea of a simple daw
 - 'list' view for mix
  + is this a subset of other views? ie timeline has a list below it, sort of like a track list?
  + is this necessary? it's easy to add in the code since playlists already exist
 - 'wave' view (as subset of 'list' view)?
  + for playlists (and mixes?)
  + good for at-a-glance previewing
  + also good for playback previewing



