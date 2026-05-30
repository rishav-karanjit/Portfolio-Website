const list = document.getElementById('til-list');
const filters = document.querySelectorAll('.til-filter');
let activeFilter = 'all';

function render() {
  list.innerHTML = TIL
    .filter(e => activeFilter === 'all' || e.category === activeFilter)
    .map(e => `
      <article class="til-item">
        <div class="til-meta">
          <time class="til-date">${e.date}</time>
          <span class="til-tag">${e.tag}</span>
        </div>
        <h2 class="til-heading">${e.heading}</h2>
        <p class="til-body">${e.body}</p>
      </article>`).join('');
}

render();
filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    render();
  });
});
