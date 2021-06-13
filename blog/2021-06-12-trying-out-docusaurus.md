---
title: Trying Out Docusaurus
author: Yousif Akbar
author_url: https://github.com/yhakbar
author_image_url: https://avatars.githubusercontent.com/u/11247449?s=400&u=f7d0e5d0d23bc0eab8d3f88adfa0367eeb5772d6&v=4
tags: [docusaurus]
description: Trying out docusaurus.
hide_table_of_contents: false
---

I was looking for a convenient documentation tool when I found Docusaurus. I immediately fell in love with the little dinosaur mascot when I saw it, so I decided to build this site using it.

![Docusaurus Homepage][homepage-screenshot]

## Fast Track Documentation

Going through the [fast track][fast-track] is a pretty nifty experience, given that the tutorial is running locally, and comes pre-baked with useful dummy content.

![Docusaurus Fast Track Docs][fast-track-screenshot]

This is what running `npx @docusaurus/init@latest init akbarsaurus classic` generates:

## Filesystem Structure

```bash
tree -L 2 -I node_modules
```

```bash
.
├── README.md
├── babel.config.js
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2019-05-30-welcome.md
├── build
│   ├── 404.html
│   ├── assets
│   ├── blog
│   ├── docs
│   ├── img
│   ├── index.html
│   ├── markdown-page
│   └── sitemap.xml
├── docs
│   ├── intro.md
│   ├── tutorial-basics
│   └── tutorial-extras
├── docusaurus.config.js
├── package-lock.json
├── package.json
├── sidebars.js
├── src
│   ├── components
│   ├── css
│   └── pages
└── static
    └── img

16 directories, 13 files
```

## Development Server

The development server that Docusaurus ships with is pretty convenient. It recompiles on save when editing any local files.

```bash
npx docusaurus start
```

```bash
Starting the development server...
Docusaurus website is running at: http://localhost:3000/

✔ Client
  Compiled successfully in 1.24s

```

## Adding New Paths

Adding a new path is as simple as adding a [docs/theming.md][docs-theming] file.

The development server automatically renders the changes, using the docs template to have it look like a structured page designed for documentation.

![Theming Documentation][docs-theming-screenshot]

Note the page navigation bar on the left and the table of contents on the right.

Also note that the page is reactive, so it should be pretty convenient to consume on mobile devices.

![Theming Documentation][docs-theming-reactive-screenshot]

## Adjusting docusaurus.config.js

This file contains most of the important metadata relevant to the site being built.

```yml
  title: 'Akbarsaurus',
  tagline: 'Theme toggle at top right corner.',
  url: 'https://akbarsaurus.yakbar.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yhakbar',
  projectName: 'akbarsaurus',
```

There are examples of some of the metadata being extracted in content on the homepage. Some of it uses metadata stored in a special data-bag named `customFields`. Docusaurus will throw an error if an arbitrary field is added to the config file, so this is how convenient, site-wide info can be shared out.

```yml
  customFields: {
    githubFileUrl: 'https://github.com/yhakbar/akbarsaurus/blob/main',
  }
```

## Wrapping Up Fast-Track

That's basically all that's required to have a site like this one running locally on a laptop. Tomorrow I'll tackle getting this deployed in the cloud.

[homepage-screenshot]: /img/docusaurus-homepage.png
[fast-track-screenshot]: /img/fast-track.png
[fast-track]: https://docusaurus.io/docs#fast-track
[docs-theming]: /docs/theming
[docs-theming-screenshot]: /img/docs-theming.png
[docs-theming-reactive-screenshot]: /img/docs-theming-reactive.png
