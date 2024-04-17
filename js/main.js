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