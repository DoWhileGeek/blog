---
layout:     post
title:      "Reducing render noise through image averaging"
date:       2014-12-24 12:12:00
---

<p>Physical rendering is heavy, And I'm not talking about problems with the
Earth's gravitational pull. I'm talking about processing power, and time needed
to create a beautiful rendering on a single node. It often puts me in a
position of choosing between fast and noisy, or slow and mostly artifact free.
One way to aleviate the pain is to use a renderfarm, like <a
href="https://www.sheepit-renderfarm.com/" target="_blank">Sheep It</a>, but
even then, they can impose things like 20 minute time limits.

<p>The solution I've found is image averaging. Rendering an image with a
randomized seed produces images with unique noise patterns. If you average the
data of every pixel across many images, it will even out the noise, and given enough frames, you
can get a pretty good looking image.</p>

<p>I wrote a proof of concept command line application called <i>Imgavg</i> (<a
href="https://github.com/DoWhileGeek/imgavg/" target="_blank">fork me on
github</a>) to test the effectiveness of my theory. In my tests, using a renderfarm and Imgavg
resulted in as much as a 14x speedup over rendering on my machine alone. Images available below for results.
I found it also works entertainingly well with completely random images,
as long as all the images are the same dimensions.

<p>
<img src="{{ site.baseurl }}/img/image_average.png" alt="example averaged image" class="img-responsive">
<span class="caption muted-text">Left: 1 frame, 40 samples. Right: 250 merged frames, 40 samples each.</span>
</p>

<p>Credit for the groot bust goes to <a href="http://www.thingiverse.com/Doodle_Monkey" target="_blank">Doodle_Monkey</a> on <a href="http://www.thingiverse.com/thing:478806/" target="_blank">Thingiverse</a>.
