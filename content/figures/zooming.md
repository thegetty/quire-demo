---
title: "Zooming"
layout: page
order: 32
about: "This page features deep-zooming images. Insert the image with the `{% figure %}` shortcode. Add deep-zooming capabilities in the `figures.yaml` file either by adding a `manifest_id` and 'canvas_id` to point to external IIIF images or adding `zoom: true` to create your own."
documentation_link: https://quire.getty.edu/docs-v1/zooming-images/
---

## Self-Created Zooming Image

{% figure 'irises-zoom-true' %}

## External IIIF Zooming Image

{% figure 'irises-zoom' %}
