---
title: My Brand New Site
excerpt:
  I finally released my new personal website, complete with a blog and an RSS feed. In this post I talk about my goals for the rebuild and the tools I used to make it happen.
date: 2020-08-29
---

::: tldr
I utilized the TEA Stack (TailwindCSS, Eleventy, and AlpineJS) to create a simple, lean, and feature-packed new website!
:::

## Why Redesign?

As a web developer, your personal website is a reflection of you and a representation of your skillset. I was quite proud of my previous iteration, but I found it was lacking in a few key areas.

My last site iteration was only one page. That single page was also quite heavy on text and lacked imagery. Most importantly, it lacked my personality and the projects and sites I am most proud of! I am certain that prospective clients visited my site, saw no sustance, and dipped.

## Requirements and Goals

I had a few key goals in mind when I began the new iteration:

- Look amazing (obviously)
- Showcase my personality
- Showcase projects and websites
- Markdown-powered blog & content
- RSS Feed
- Minimal JS/CSS bundles
- Syntax highlighting in pages & posts
- App-like page routing, without a frontend framework
- Contain styles, structure, and functionality in templates as much as possible

## How I Built This

I pulled together a collection of awesome tools to make this site awesome. I call this set of tools the **TEA Stack** (patent pending 😉). The TEA stack includes [TailwindCSS](https://tailwindcss.com), [Eleventy](https://11ty.dev), and [AlpineJS](https://github.com/alpinejs/alpine). If you have not already, I suggest you give each of these tools a try. When combined, they are insanely powerful and delightful to work with.

I built a [starter template](https://github.com/mattwaler/tea-stack) repository on GitHub, so if you're looking to jump right into the stack, give it a spin and let me know how it goes!

## TailwindCSS

Tailwind is a phenomenal framework and I have far too many good things to say about it. This site is styled almost entirely by utility classes, with the minor exception of syntax highlighting and global defaults.

With the help of Tailwind, I was able to build this entire site with only **five** postcss files. This keeps my project scaffolding much leaner, while also allowing me to both build **and** style the site within my templates.

For example, here is a brief snippet of the hero element on this very page:

::: codeblock
```html
<section class="gradient-purple text-white py-8 lg:py-16">
  <div class="container max-w-screen-md mx-auto text-center">
    <p class="uppercase font-bold text-indigo-300 text-sm">{{ date | prettyDate }}</p>
    <h1 class="mt-2 text-2xl sm:text-3xl xl:text-4xl font-bold leading-none">
      {{ title }}
    </h1>
    <p class="mt-4 text-sm sm:text-base text-indigo-100">{{ excerpt }}</p>
  </div>
</section>
<span class="w-full h-12 block gradient-purple text-gray-100">
  {% include 'icons/waves.svg' %}
</span>
```
:::

### Tailwind Plugins

TailwindCSS has some fantastic plugins, from both the community and Tailwind Labs, that make life so much easier.

At the time of writing this, I am using these two great packages:

- [TailwindCSS Custom Forms](https://tailwindcss-custom-forms.netlify.app/) to style form inputs
- [TailwindCSS Debug Screens](https://joren.co/tailwindcss-debug-screens-demo/) to display the current breakpoint in development

## Eleventy

All pages on this site are **truly** statically generated at build time with Eleventy. What I mean by truly is that there is no pre-rendering, rehydrating, or any other funny business going on here.

Don't get me wrong, I think projects like Next, Gatsby, Nuxt, and Sapper are great. However, I believe the SSG aspects of these projects have major problems. Build times are atrocious, and the client-side JS bundles are massive even for tiny websites.

Here's a look at the result from running `npm run build` on my site:

::: codeblock
```bash
Copied 1 item and Processed 11 files in 0.38 seconds
```
:::

No JavaScript, no frameworks, just raw HTML.

> But now you don't get those dope-ass page transitions that feel like an app!

**Wrong!** [Turbolinks](https://github.com/turbolinks/turbolinks) to the rescue! Adding this to your finished bundle gives you buttery smooth page transitions between truly static pages, and harly adds any filesize to your bundle.

Eleventy ships with built-in Markdown compiling, global data files accessible in templates, and endless customization and configuration made buildin

### Plugins

- Syntax Highlighting
- RSS Feed

## AlpineJS

### Honorable Mention: Turbolinks

### The Best Bundler: Rollup

## Inspiration

- Heroicons
- TailwindCSS Blog
- Get Waves
- Blob Maker
- Massage Envy

