(function () {
  var projects = window.PROJECTS || [];

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  var cards = document.getElementById('project-cards');
  if (cards) {
    document.getElementById('work-empty').hidden = projects.length > 0;
    projects.forEach(function (project) {
      var card = el('a', 'project-card');
      card.href = project.slug + '/index.html';

      var media = el('div', 'project-card-media');
      if (project.image) {
        var image = el('img');
        image.src = project.slug + '/' + project.image;
        image.alt = '';
        media.appendChild(image);
      }

      var body = el('div', 'project-card-body');
      body.appendChild(el('h2', 'project-card-title', project.title));
      body.appendChild(el('p', 'project-card-summary', project.summary));

      card.appendChild(media);
      card.appendChild(body);
      cards.appendChild(card);
    });
  }

  var nav = document.getElementById('project-nav');
  if (nav) {
    projects.forEach(function (project) {
      var link = el('a', '', project.title);
      link.href = '../' + project.slug + '/index.html';
      if (project.slug === document.body.dataset.project) {
        link.setAttribute('aria-current', 'page');
      }
      var item = el('li');
      item.appendChild(link);
      nav.appendChild(item);
    });
  }
})();
