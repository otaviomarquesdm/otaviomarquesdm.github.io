# Portfolio site

Portfolio published with GitHub Pages at https://otaviomarquesdm.github.io/.

## How it works

- Plain HTML and CSS with no build step. `styles.css` holds the shared styles and design tokens on `:root`.
- `index.html` is the home page, `work/index.html` is the project card grid, and each project is a page at `work/<slug>/index.html`.
- `work/projects.js` is the one list of projects. `work/work.js` uses it to draw the cards and the project sidebar.
- Pushing to `main` publishes the site. Treat every push as going live, and only push when asked.
- Use a separate branch for bigger redesigns.

## Adding a project

1. Copy `work/_template/` to `work/<slug>/`. GitHub Pages doesn't publish folders that start with `_`, so the template stays private.
2. In the copy, set `data-project` on `<body>` to the slug, then fill in the title, text, images and videos. Keep media files in the project folder.
3. Add an entry to `work/projects.js`.

## Design source

- Design file (styles, resume content): https://www.figma.com/design/DyxgfDdAGsKO42eaKjwlL0/Untitled?node-id=27-8
- Figma Sites file (Home page layout): https://www.figma.com/site/gqtC0gFdZihSzjg4dDpXFt/Portfolio?node-id=1-122
- The Figma connection can read the design file but not the Sites file. View the Sites file in a browser instead.
- Layout breakpoints follow Figma: desktop from 1280px, tablet 800–1279px, mobile under 800px.
- Resume content comes from the Resume frame in the design file (node 25:7).
