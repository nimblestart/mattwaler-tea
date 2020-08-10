---
title: Switch Statements Exist in Nunjucks
excerpt: Despite not being in the docs, you can absolutely use switch statements in Nunjucks. In this blog post I show you how it's done!
date: 2020-03-15
---

TLDR: Clean up some conditional statements by using switch statements, not if-else blocks.

Despite being nowhere in the current documentation at the time of writing this, the switch statement, which can be very useful, is fully supported in Nunjucks. Here is an example below of how to use it.

{% raw %}
```twig
<!-- Conditional -->
{% set test = false %}

<!-- Switch -->
{% switch test %}
  {% case true %}
    <p>This is true</p>
  {% default %}
    <p>This is false</p>
{% endswitch %}

<!-- Output -->
<p>This is false</p>
```
{% endraw %}

Enjoy dryer conditional statements!
