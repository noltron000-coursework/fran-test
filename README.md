# noltron000.github.io

## Features

- Gatsby v2.0.0
- Configurable
  - Use the site.js to easily change the most important information
  - Google Fonts
  - Use the theme.js to configure your CSS
- Projects in Markdown
- Element Transitions with [React Overdrive](https://github.com/berzniz/react-overdrive)
- Image Grid with CSS Grid
- [HeroPatterns](http://www.heropatterns.com/) Header
- Emotion
- Google Analytics Support
- SEO
  - Sitemap
  - Schema.org JSONLD
  - OpenGraph Tags
  - Twitter Tags
- Offline Support
- WebApp Manifest Support
- Typography.js
- Responsive images
  - The right image size for every screen size
  - Traced SVG Loading (Lazy-Loading)
  - WebP Support

## Getting Started

Check your development environment! You'll need [Node.js](https://nodejs.org/en/), the [Gatsby CLI](https://www.gatsbyjs.org/docs/) and [node-gyp](https://github.com/nodejs/node-gyp#installation) installed. The official Gatsby website also lists two articles regarding this topic:

- [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/)
- [Check your development environment](https://www.gatsbyjs.org/tutorial/part-zero/)

To copy and install this starter run this command (with "project-name" being the name of your folder you wish to install it in):

```
gatsby new project-name https://github.com/LeKoArts/gatsby-starter-portfolio-emilia
cd project-name
npm run dev
```

### Adding a new project

- Create a new folder in `content/projects` with the current date (Format: YYYY-MM-DD)
- Create a new markdown file, add the frontmatter (use the same date format)
- Add text under the frontmatter (will be placed before the images)
- Add your images in the folder (they will automatically be placed in the document)

If you're still unsure have a look at the already existing examples.

### Adding new features/plugins

You can add other features by having a look at the official [plugins page](https://www.gatsbyjs.org/docs/plugins/)

### Building your site

```
npm run build
```

Copy the content of the `public` folder to your webhost or use a website like Netlify which automates that for you.

## Configuration

You can configure your setup in `config/site.js`.

You can also configure the styling by editing the `config/theme.js` file.