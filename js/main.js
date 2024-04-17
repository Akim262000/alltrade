// закрытие открытого collapse при открытии нового collapse
document.addEventListener('DOMContentLoaded', () => {
              
  const collapseElements = document.querySelectorAll('#target-container .collapse');
  collapseElements.forEach(collapseEl => {
    new bootstrap.Collapse(collapseEl, { toggle: false, parent: '#target-container' });
  })
  document.addEventListener('click', (e) => {
    if (!e.target.dataset.target) {
      return;
    }
    const collapseElement = document.querySelector(e.target.dataset.target);
    const collapse = bootstrap.Collapse.getInstance(collapseElement);
    collapse.toggle();
  });

});

// окрашивание svg при наведении
document.querySelectorAll("img.img-svg").forEach(function(img) {
  let imgClass = img.getAttribute("class");
  let imgURL = img.getAttribute("src");
  fetch(imgURL)
    .then(response => response.text())
    .then(data => {
      let parser = new DOMParser();
      let doc = parser.parseFromString(data, "application/xml");
      let svg = doc.querySelector("svg");
      if (typeof imgClass !== "undefined") {
        svg.setAttribute("class", imgClass + " replaced-svg");
      }
      svg.removeAttribute("xmlns:a");
      if (!svg.hasAttribute("viewBox") && svg.hasAttribute("height") && svg.hasAttribute("width")) {
        svg.setAttribute("viewBox", "0 0 " + svg.getAttribute("height") + " " + svg.getAttribute("width"));
      }
      img.parentNode.replaceChild(svg, img);
    });
});