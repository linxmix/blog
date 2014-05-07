---
uuid: ff0708d4-d748-43de-bd38-aa33f649b598
title: "5/6/2014 Linx MixBuilder Meetup"
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
  + NOTE: `transition` has low priority since it won't be useful until we have transitions to choose from!

### Future:
 - how to preview upNext [songs/transitons] in the mixbuilder

## 2. MixBuilder `timeline` view
 - similar to SoundBar's `wave` view
 - can be zoomed in/out
 - serves as a visual reference for how the mix will play out
  + left-to-right wave format appeals to users of soundcloud/DAW/traktor/etc
 - possibly offer editing capabilities, ie crossfader automation / wave positioning
 - waveforms will each have their own colors to distinguish breakpoints between songs/transitions

### Future:
 - details of `timeline` view
  + how does it look
  + what functionality does it have
  + how does this play into the idea of a simple daw

## 3. Let's Get Real: We Have No Transitions
 - spectrum bounded by 'all mixes have no transitions' and 'all mixes have all transitions'
  + 'build a mix tape' => 'build a mix'
 - we start at the 0 end, but Linx should still be useful as a MixBuilder in the respective ways of listener and DJ users.
  + aka MVP
  + DJ's can upload their own transitions to build mixes
  + Listeners can build/share/export 'mix tapes'
 - it will take a TON of transitions by a TON of DJ's to get to a reasonable number on the scale

### Future:
 - need to start thinking about how to appeal to / advertise to DJ's
  + transition requests?
  + start locally in the bay area with friend DJ's and friends of friends?

## 4. New Paradigms: Music players as 'mix builders' and 'DJing as a service'
 - users without technical skill can now build mixes
 - 'user-generated' mixes (Linx) are to music listeners what content-generators (Drupal, Wordpress) are to web bloggers
  + content generators bring benefit of a website to bloggers without need for programming skill, while bloggers who are also programmers can still roll their own websites for more control
  + 'user-generated' mixes bring the benefits of seamless mixes to listeners without need for DJing skill, while listeners who are also DJ's can still make their own mixes for more control
 - Licensing and public disclosure of code and design ideas
  + don't want to hand competition the tools to drown us
  + but also want to be open source
  + Linx lives and dies on its unique appeal to users. big names can crush linx if they move towards 'mix building' style of linx 

### Pitch:
Imagine you are a user cruising mixes for listen to, and you find a mix with a description to the effect of 'This mix was built by [username] at linx.dj. Build yours now!'. The first thing I would think is 'oh ****, i HAVE to try that out'. It's basically putting ads exactly where interested users are looking: people who are interested in mixes will find mixes that are built by linx... match made in heaven.

## 5. To Be Continued...
 - 'list' view for mix
  + is this a subset of other views? ie timeline has a list below it, sort of like a track list?
  + is this necessary? it's easy to add in the code since playlists already exist
 - 'wave' view (as subset of 'list' view)?
  + for playlists (and mixes?)
  + good for at-a-glance previewing
  + also good for playback previewing

# Resources

## Pictures/Drawings
<a href="http://imgur.com/BQBQcKf" title="Linx Meetup 5/1/14"><img src="http://i.imgur.com/BQBQcKf.jpg" alt="Linx Meetup 5/1/14" height="600" title="Hosted by imgur.com" /></a>


