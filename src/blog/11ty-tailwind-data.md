---
title: Using Eleventy Data with TailwindCSS
excerpt: Keep your CSS output even smaller by avoiding apply directive, instead opting for a data file containing recycled utility class strings!
date: 2020-06-19
---

## TLDR:

Keep your CSS output even smaller by avoiding using the `@apply` tailwind directive, instead opting for an 11y data file containing the utility class strings!

## Rewriting Class Strings

Tailwind, and utilitarian CSS in general, is a battle-tested methodology to rapidly build safe-to-edit components without ever having to leave your template file.

However, the biggest complaint by far to this approach is the lack of abstraction and the appearance of "wetness" when inspecting the markup.

For example, take a look at this hero component from the awesome tool [tailblocks](https://mertjf.github.io/tailblocks/):

```html
<section class="text-gray-700 body-font">
  <div
    class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
  >
    <div
      class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
    >
      <h1
        class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
      >
        Before they sold out
        <br class="hidden lg:inline-block" />
        readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      <div class="flex justify-center">
        <button
          class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Button
        </button>
        <button
          class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
        >
          Button
        </button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        class="object-cover object-center rounded"
        alt="hero"
        src="https://dummyimage.com/720x600"
      />
    </div>
  </div>
</section>
```

> Utility class haters have left the chat.

## @apply... to the rescue?

##
