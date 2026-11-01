// The one list of projects. It feeds the cards on the Work page and the
// sidebar on every project page. Newest first.
//
// Each entry looks like this:
//   {
//     slug: 'my-project',         // folder name: work/my-project/index.html
//     title: 'My Project',
//     summary: 'One line for the card.',
//     image: 'thumbnail.jpg',     // optional, inside the project folder
//   },
window.PROJECTS = [
  { slug: 'project-one', title: 'Project One', summary: 'Placeholder summary for this project.', image: '../placeholder-image.svg' },
  { slug: 'project-two', title: 'Project Two', summary: 'Placeholder summary for this project.', image: '../placeholder-image.svg' },
  { slug: 'project-three', title: 'Project Three', summary: 'Placeholder summary for this project.', image: '../placeholder-image.svg' },
  { slug: 'project-four', title: 'Project Four', summary: 'Placeholder summary for this project.', image: '../placeholder-image.svg' },
];
