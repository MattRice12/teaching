# Introduction

Long gone are the simpler days where we only had to build our webpages for computers. We now have to consider a variety of devices and screen sizes in which our webpage should be viewable.


# Media Queries

One solution to this problem is with the use of media queries. Media queries allow us to write custom CSS for defined screen sizes. In other words, with media queries we can write CSS that applies only to desktop or larger displays, other CSS that applies only to tablets, and other CSS that applies to mobile devices.


In their simplest form, media queries are wrappers for CSS that we would write elsewhere.

```
@media (min-width: 480px) {
  .header {
    height: 100px;
  }
}
```

The `@media` wraps our defined style, and sets a condition that must be met in order for the defined style to execute. In this situation, the condition is that the screen-width must be larger than `480px`. This screen-width is called a breakpoint. It is standard to use `min-width` over `max-width` since the default CSS is designed for your smallest breakpoints. Thus, your default styles apply to screen sizes less than the `480px` breakpoint. New styles inside this media query and for screen sizes larger than `480px` override the default CSS.

We build out our mobile breakpoints first through a process called `mobile-first development`. The utility of starting with mobile design is as follows:
  1. Since there is less real estate on a mobile screen, we only present the most important content. This simplifies our job when first building out the site.
  2. Faster page loading is more important on mobile devices since they are typically on slower internet connections and have slower processors. Thus, if the mobile breakpoint is set by default, the page has less loading to do.
  3. If your mobile site looks good, you get a okay looking tablet and desktop view out of the box. This minimizes the number of changes you need to make when building out the tablet and desktop views. On the other hand, if you go the route of `desktop-first development`, you will often times put in more work to get the mobile site looking good.


A discussion on all the breakpoints you need to consider is vast and a potential full-time job. I put a link at the bottom. For now, let's simplify. A safe bet for common breakpoints is as follows:
  1) Mobile (portrait and landscape) --> min-width: 320px, max-width: 767px;
  1) Tablet (portrait and landscape) --> min-width: 768px, max-width: 1023px;
  1) Desktop                         --> min-width: 1024px;

A larger example is as follows:

```
// default style
.header {
  height: 50px;
}

// media query override for tablet
@media (min-width: 768px) {
  .header {
    height: 150px;
  }
}

// media query override for desktop
@media (min-width: 1024px) {
  .header {
    height: 150px;
  }
}
```


# Further Reading:
  - Media Queries: https://css-tricks.com/logic-in-media-queries/
  - Breakpoints: https://responsivedesign.is/develop/browser-feature-support/media-queries-for-common-device-breakpoints/
