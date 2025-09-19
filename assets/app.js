async function load(){
  const res = await fetch('data/manifest.json'); const data = await res.json();
  renderNav(data.secciones); renderCards(data.secciones);
  document.querySelector('#q').addEventListener('input',()=>renderCards(data.secciones));
}
function renderNav(secs){
  const nav=document.querySelector('#nav'); nav.innerHTML='';
  secs.forEach(s=>{
    const d=document.createElement('div'); d.className='section';
    d.innerHTML = `<h3>${s.codigo} ${s.titulo}</h3>
    <a class="btn" href="#${s.codigo}"><span>Ver documentos</span><span>›</span></a>`;
    nav.appendChild(d);
  });
}
function renderCards(secs){
  const q=(document.querySelector('#q').value||'').toLowerCase();
  const grid=document.querySelector('#grid'); grid.innerHTML='';
  secs.forEach(s=>{
    const head=document.createElement('div'); head.id=s.codigo;
    head.innerHTML = `<div class="header"><h2>${s.codigo} ${s.titulo}</h2><span class="badge">${(s.items||[]).length} docs</span></div>`;
    grid.appendChild(head);
    (s.items||[]).filter(it=>((it.titulo+' '+(it.tags||[]).join(' ')).toLowerCase()).includes(q)).forEach(it=>{
      const c=document.createElement('div'); c.className='card';
      c.innerHTML = `<div class="title">${it.titulo}</div>
        <div class="meta">${it.fecha||''}</div>
        <div class="tags">${(it.tags||[]).map(t=>`<span>#${t}</span>`).join(' ')}</div>
        <div><a class="btn" href="${it.ruta}" target="_blank">Abrir</a></div>`;
      grid.appendChild(c);
    });
  });
}
window.addEventListener('DOMContentLoaded',load);