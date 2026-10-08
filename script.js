{"@context":"https://schema.org","@type":"School","name":"Colégio Estadual do Campo Irmã Ambrósia Sabatovich","alternateName":"CEIAS","slogan":"Educando para a Comunidade"}

/* ===== DADOS ===== */
const DATA = {
  contato: { endereco: "R. Principal, s/n — Colônia Marcelino, São José dos Pinhais — PR, 83800-000", telefone: "", email: "", horarios: "", mapa: "", portalAlunos: "" },
  eventos: [
    { d: "2026-02-05", t: "Início das aulas", c: "eventos", desc: "Início do ano letivo — Calendário Escolar 2026 da SEED/PR" },
    { d: "2026-03-16", t: "Semana de combate à violência contra a mulher", c: "projetos", desc: "16 a 20 de março — Lei nº 14.164/2021" },
    { d: "2026-03-20", t: "Semana de combate à violência contra a mulher — encerramento", c: "projetos", desc: "16 a 20 de março — Lei nº 14.164/2021" },
    { d: "2026-04-03", t: "Paixão", c: "feriados", desc: "Feriado" },
    { d: "2026-04-05", t: "Páscoa", c: "feriados", desc: "Data indicada no Calendário Escolar 2026 da SEED/PR" },
    { d: "2026-04-21", t: "Tiradentes", c: "feriados", desc: "Feriado" },
    { d: "2026-05-01", t: "Dia do trabalho", c: "feriados", desc: "Feriado" },
    { d: "2026-05-14", t: "Término do 1º trimestre", c: "eventos", desc: "1º trimestre — 05/02 a 14/05 — 63 dias letivos" },
    { d: "2026-05-18", t: "Início do 2º trimestre", c: "eventos", desc: "2º trimestre — 18/05 a 04/09 — 68 dias letivos" },
    { d: "2026-06-04", t: "Corpus Christi", c: "feriados", desc: "Feriado" },
    { d: "2026-07-13", t: "Início do recesso escolar", c: "feriados", desc: "O calendário oficial marca período de recesso em julho." },
    { d: "2026-07-24", t: "Estudo e Planejamento", c: "eventos", desc: "Dia destinado ao Estudo e Planejamento, conforme marcação do calendário oficial." },
    { d: "2026-08-07", t: "Dia do Funcionário de Escola", c: "eventos", desc: "Data comemorativa indicada pela SEED/PR" },
    { d: "2026-08-11", t: "Dia do Estudante", c: "eventos", desc: "Data comemorativa indicada pela SEED/PR" },
    { d: "2026-09-04", t: "Término do 2º trimestre", c: "eventos", desc: "2º trimestre — 18/05 a 04/09 — 68 dias letivos" },
    { d: "2026-09-08", t: "Início do 3º trimestre", c: "eventos", desc: "3º trimestre — 08/09 a 18/12 — 70 dias letivos" },
    { d: "2026-09-07", t: "Independência", c: "feriados", desc: "Feriado" },
    { d: "2026-10-12", t: "Nossa Senhora Aparecida", c: "feriados", desc: "Feriado" },
    { d: "2026-10-13", t: "Dia do Professor", c: "eventos", desc: "Antecipado para 13 de outubro, conforme Calendário Escolar 2026 da SEED/PR" },
    { d: "2026-10-13", t: "Dia Internacional para a Redução do Risco e Desastre", c: "eventos", desc: "Data indicada pela SEED/PR" },
    { d: "2026-10-28", t: "Dia do Servidor Público", c: "eventos", desc: "Data comemorativa indicada pela SEED/PR" },
    { d: "2026-11-02", t: "Finados", c: "feriados", desc: "Feriado" },
    { d: "2026-11-15", t: "Proclamação da República", c: "feriados", desc: "Feriado" },
    { d: "2026-11-20", t: "Zumbi e Consciência Negra", c: "feriados", desc: "Feriado" },
    { d: "2026-12-18", t: "Término das aulas", c: "eventos", desc: "Término do 3º trimestre — 70 dias letivos" },
    { d: "2026-12-25", t: "Natal", c: "feriados", desc: "Feriado" }
  ],
  noticias: [],
  pessoas: [],
  fotos: [],
  faq: [],
  historia: [],
  numeros: []
};

const CATS = { eventos: "Eventos escolares", projetos: "Projetos e atividades", feriados: "Feriados e recessos", comunicados: "Comunicados", outros: "Outros" };
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const pad = n => String(n).padStart(2, "0");
const iso = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const MES = ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"];
const parte = s => { const [y, m, d] = s.split("-").map(Number); return { y, m, d }; };
const ev = () => [...DATA.eventos].sort((a, b) => a.d.localeCompare(b.d));
const hoje = iso(new Date());

/* ---- Visibilidade ---- */
const tem = { pessoas: DATA.pessoas.length, noticias: DATA.noticias.length, fotos: DATA.fotos.length, faq: DATA.faq.length, local: DATA.contato.endereco || DATA.contato.mapa };
function visibilidade() {
  $$("[data-needs]").forEach(el => { if (!tem[el.dataset.needs]) el.hidden = true; });
  [["equipe","pessoas"],["noticias","noticias"],["galeria","fotos"],["pedagogia","faq"],["localizacao","local"]].forEach(([id, k]) => { if (tem[k]) { const el = $("#" + id); if (el) el.hidden = false; } });
}

/* ---- Menu ---- */
function menu() {
  const b = $("#bMenu"), n = $("#nav");
  if (!b || !n) return;
  const set = o => { n.classList.toggle("open", o); b.setAttribute("aria-expanded", o); b.setAttribute("aria-label", o ? "Fechar menu" : "Abrir menu"); };
  b.onclick = () => set(!n.classList.contains("open"));
  n.onclick = e => { if (e.target.tagName === "A") set(false); };
  document.addEventListener("keydown", e => { if (e.key === "Escape") set(false); });
  const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) $$("#nav a").forEach(a => a.classList.toggle("on", a.hash === "#" + x.target.id)); }), { rootMargin: "-40\% 0px -55\% 0px" });   $$("main section[id]").forEach(s => io.observe(s));
}

/* ---- Acessibilidade ---- */
function acess() {
  const R = document.documentElement, K = "ceias-a11y";
  let p = { fs: 100, contraste: false, escuro: false, quieto: false };
  try { p = { ...p, ...JSON.parse(localStorage.getItem(K) || "{}") }; } catch (e) {}
  const aplica = () => {
    R.style.setProperty("--fs", p.fs + "%");
    R.classList.toggle("contraste", p.contraste); R.classList.toggle("escuro", p.escuro); R.classList.toggle("quieto", p.quieto);
    ["contraste", "escuro", "quieto"].forEach(k => {
      const el = $(`[data-a="${k}"]`);
      if (el) el.setAttribute("aria-pressed", p[k]);
    });
    try { localStorage.setItem(K, JSON.stringify(p)); } catch (e) {}
  };
  if (matchMedia("(prefers-color-scheme: dark)").matches && !localStorage.getItem(K)) p.escuro = true;
  const painel = $("#painel");
  if (painel) {
    painel.onclick = e => {
      const a = e.target.dataset.a; if (!a) return;
      if (a === "mais") p.fs = Math.min(150, p.fs + 10);
      else if (a === "menos") p.fs = Math.max(80, p.fs - 10);
      else if (a === "reset") p = { fs: 100, contraste: false, escuro: false, quieto: false };
      else p[a] = !p[a];
      aplica();
    };
    painel.onkeydown = e => { if (e.key === "Escape") { painel.hidden = true; const b = $("#bAcess"); if (b) { b.setAttribute("aria-expanded", "false"); b.focus(); } } };
  }
  const b = $("#bAcess");
  if (b && painel) {
    b.onclick = () => { const h = painel.hidden; painel.hidden = !h; b.setAttribute("aria-expanded", h); };
  }
  aplica();
}

/* ---- Estrelas do hero ---- */
function estrelas() {
  const container = $("#stars");
  if (!container) return;
  const pos = [[8,18,22,0],[22,62,16,1],[46,10,26,0],[70,70,18,0],[88,22,20,1],[94,58,14,0]];
  container.innerHTML = pos.map(([x,y,s,r],i) => `<svg class="${r ? "r" : ""}" style="left:${x}%;top:${y}%;width:${s}px;height:${s}px;animation-duration:${12 + i * 3}s" aria-hidden="true"><use href="#st"/></svg>`).join("");
}

/* ---- Agenda ---- */
const item = e => { const { d, m } = parte(e.d); return `<div class="dt ${e.c === "feriados" ? "f" : ""}">${d}<small>${MES[m-1]}</small></div><div><strong>${esc(e.t)}</strong><br>${esc(e.desc || CATS[e.c] || "")}</div>`; };
function agenda() {
  const fut = ev().filter(e => e.d >= hoje);
  const prox = $("#proxLista");
  if (prox) prox.innerHTML = fut.slice(0,5).map(e => `<li class="li">${item(e)}</li>`).join("") || "<li>Nenhum evento futuro cadastrado.</li>";
  
  const h = fut.filter(e => e.d === hoje).concat(fut.filter(e => e.d > hoje).slice(0, 1));
  const n = DATA.noticias[0];
  const hojeSec = $("#hoje"), hojeBox = $("#hojeBox");
  if ((h.length || n) && hojeSec && hojeBox) {
    hojeSec.hidden = false;
    hojeBox.innerHTML = h.map(e => `<div class="it">${item(e)}</div>`).join("") + (n ? `<div class="it"><div><strong>${esc(n.t)}</strong><br>${esc(n.resumo || "")}</div></div>` : "");
  }
}

/* ---- Calendário ---- */
function calendario() {
  const anoFixo = 2026;
  let mes = 1, vista = "grade", cat = "todas";
  const cats = ["todas", ...Object.keys(CATS).filter(c => DATA.eventos.some(e => e.c === c))];
  const filtros = $("#filtros");
  if (filtros) filtros.innerHTML = cats.map(c => `<button aria-pressed="${c === "todas"}" data-c="${c}">${c === "todas" ? "Todas" : CATS[c]}</button>`).join("");
  
  const listaEvents = () => ev().filter(e => cat === "todas" || e.c === cat);
  const eventosDoDia = k => listaEvents().filter(e => e.d === k);
  const nomeMes = m => new Date(anoFixo, m, 1).toLocaleDateString("pt-BR", { month: "long" });

  function desenha() {
    const elMes = $("#mes");
    if (elMes) elMes.textContent = `${nomeMes(mes)} de ${anoFixo}`;
    const E = listaEvents(), pre = `${anoFixo}-${pad(mes + 1)}`;
    
    if (vista === "grade") {
      const ini = new Date(anoFixo, mes, 1).getDay(), dias = new Date(anoFixo, mes + 1, 0).getDate();
      let h = ["D","S","T","Q","Q","S","S"].map(x => `<b aria-hidden="true">${x}</b>`).join("");
      h += '<span class="o" aria-hidden="true"></span>'.repeat(ini);
      for (let d = 1; d <= dias; d++) {
        const k = `${pre}-${pad(d)}`, es = E.filter(e => e.d === k), isHoje = k === hoje;
        const cls = (isHoje ? " hj" : "") + (es.length ? " ev" : "");
        const titulo = es.map(e => e.t).join("; ");
        h += es.length
          ? `<button class="${cls.trim()}" data-d="${k}" aria-label="${d} de ${nomeMes(mes)}: ${esc(titulo)}"><span>${d}</span><i>${esc(es.length > 1 ? `${es.length} eventos` : es[0].t)}</i></button>`
          : `<span class="${cls.trim()}" ${isHoje ? 'aria-label="Hoje"' : ''}><span>${d}</span></span>`;
      }
      const grade = $("#grade");
      if (grade) { grade.innerHTML = `<div class="g" role="grid" aria-label="${esc(nomeMes(mes))} de ${anoFixo}">${h}</div>`; grade.hidden = false; }
      const lista = $("#lista"); if (lista) lista.hidden = true;
    } else {
      const m = E.filter(e => e.d.startsWith(pre));
      const lista = $("#lista");
      if (lista) {
        lista.innerHTML = m.map(e => `<div class="li">${item(e)}</div>`).join("") || "<p>Nenhum evento cadastrado para este mês.</p>";
        lista.hidden = false;
      }
      const grade = $("#grade"); if (grade) grade.hidden = true;
    }
    const desteMes = E.filter(e => e.d.startsWith(pre));
    const detalhe = $("#detalhe");
    if (detalhe) {
      detalhe.textContent = desteMes.length ? `${desteMes.length} evento${desteMes.length > 1 ? 's' : ''} destacado${desteMes.length > 1 ? 's' : ''} neste mês. Clique em um dia marcado para ver os detalhes.` : "Nenhum evento especial destacado neste mês.";
    }
  }

  const prev = $("#prev"), next = $("#next");
  if (prev) prev.onclick = () => { if (--mes < 0) mes = 11; desenha(); };
  if (next) next.onclick = () => { if (++mes > 11) mes = 0; desenha(); };
  [["vGrade", "grade"], ["vLista", "lista"]].forEach(([id, v]) => {
    const btn = $("#" + id);
    if (btn) btn.onclick = () => { vista = v; $("#vGrade")?.setAttribute("aria-pressed", v === "grade"); $("#vLista")?.setAttribute("aria-pressed", v === "lista"); desenha(); };   });   if (filtros) filtros.onclick = e => { const c = e.target.dataset.c; if (!c) return; cat = c; $$('#filtros button').forEach(b => b.setAttribute('aria-pressed', b.dataset.c === c)); desenha(); };
  const grade = $("#grade");
  if (grade) grade.onclick = e => { const b = e.target.closest("[data-d]"); if (!b) return; const es = eventosDoDia(b.dataset.d); const det = $("#detalhe"); if (det) det.innerHTML = es.map(x => `<strong>${esc(x.t)}</strong>${x.desc ? ` — ${esc(x.desc)}` : ""}`).join("<br>"); };
  desenha();
}

/* ---- Equipe ---- */
function equipe() {
  const storageKey = "ceias_equipe_editavel_v1";
  const base = Array.isArray(DATA.pessoas) ? DATA.pessoas.map(p => ({ nome: p.nome || "", funcao: p.funcao || "", area: p.area || "", grupo: p.grupo || "Professores", bio: p.bio || "", foto: p.foto || "" })) : [];
  let saved = []; try { saved = JSON.parse(localStorage.getItem(storageKey) || "[]"); } catch (e) { saved = []; }
  let people = saved.length ? saved : base;
  const modal = $("#staffModal"), form = $("#staffForm"), fotoInput = $("#sfFoto"), preview = $("#staffPreview");
  let editIndex = -1, photoData = "";

  function persist() { try { localStorage.setItem(storageKey, JSON.stringify(people)); } catch (e) { alert("A foto é muito grande para o armazenamento do navegador."); } }
  function openModal(index = -1) {
    editIndex = index; photoData = index >= 0 ? (people[index].foto || "") : "";
    const title = $("#staffModalTitle"); if (title) title.textContent = index >= 0 ? "Editar profissional" : "Adicionar profissional";
    if (form) form.reset();
    if (index >= 0) {
      const p = people[index];
      if ($("#sfNome")) $("#sfNome").value = p.nome;
      if ($("#sfFuncao")) $("#sfFuncao").value = p.funcao;
      if ($("#sfGrupo")) $("#sfGrupo").value = p.grupo || "Professores";
      if ($("#sfArea")) $("#sfArea").value = p.area || "";
      if ($("#sfBio")) $("#sfBio").value = p.bio || "";
    }
    renderPreview();
    if (modal) { modal.hidden = false; modal.setAttribute("aria-hidden", "false"); setTimeout(() => $("#sfNome")?.focus(), 50); }
  }
  function closeModal() { if (modal) { modal.hidden = true; modal.setAttribute("aria-hidden", "true"); } editIndex = -1; photoData = ""; }
  function renderPreview() { if (preview) preview.innerHTML = photoData ? `<img src="${esc(photoData)}" alt="Prévia da foto">` : '<span>Prévia da foto</span>'; }
  
  if (fotoInput) {
    fotoInput.addEventListener("change", e => {
      const f = e.target.files && e.target.files[0]; if (!f) return;
      const r = new FileReader(); r.onload = () => { photoData = r.result; renderPreview(); }; r.readAsDataURL(f);
    });
  }

  function draw() {
    const eqFiltros = $("#eqFiltros"), eqLista = $("#eqLista"), semProf = $("#semProfissionais");
    if (!eqLista) return;
    const groups = ["Todos", ...new Set(people.map(p => p.grupo).filter(Boolean))];
    if (eqFiltros) eqFiltros.innerHTML = groups.map(g => `<button aria-pressed="${g === 'Todos'}" data-g="${esc(g)}">${esc(g)}</button>`).join("");
    
    const render = (filter = "Todos") => {
      const arr = people.map((p, i) => ({ p, i })).filter(x => filter === 'Todos' || x.p.grupo === filter);
      eqLista.innerHTML = arr.map(({ p, i }) => `<li><article class="staff-person"><div class="staff-photo ${p.foto ? '' : 'placeholder'}">${p.foto ? `<img class="staff-photo" src="${esc(p.foto)}" alt="Foto de ${esc(p.nome)}" loading="lazy">` : '+'}</div><div class="staff-person-body"><small>${esc(p.grupo || 'Equipe')}</small><h4>${esc(p.nome)}</h4><p><strong>${esc(p.funcao)}</strong>${p.area ? ` · ${esc(p.area)}` : ''}</p>${p.bio ? `<p class="staff-bio">${esc(p.bio)}</p>` : ''}<div class="staff-person-actions"><button class="staff-mini-btn" data-edit="${i}" type="button">Editar</button><button class="staff-mini-btn delete" data-del="${i}" type="button">Excluir</button></div></div></article></li>`).join("");
      eqLista.hidden = !arr.length;
      if (semProf) semProf.hidden = !!arr.length;
    };
    render();
    if (eqFiltros) eqFiltros.onclick = e => { const g = e.target.dataset.g; if (!g) return; $$("#eqFiltros button").forEach(b => b.setAttribute("aria-pressed", b.dataset.g === g)); render(g); };
    eqLista.onclick = e => {
      const ed = e.target.closest("[data-edit]"), del = e.target.closest("[data-del]");
      if (ed) openModal(+ed.dataset.edit);
      if (del) { const i = +del.dataset.del; if (confirm("Excluir este profissional?")) { people.splice(i, 1); persist(); draw(); } }
    };
  }

  ["abrirCadastro", "abrirCadastro2", "abrirCadastro3"].forEach(id => { const b = $("#" + id); if (b) b.onclick = () => openModal(); });   $$("[data-close-staff]").forEach(b => b.addEventListener("click", closeModal));
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const p = { nome: $("#sfNome")?.value.trim(), funcao: $("#sfFuncao")?.value.trim(), grupo: $("#sfGrupo")?.value, area: $("#sfArea")?.value.trim(), bio: $("#sfBio")?.value.trim(), foto: photoData };
      if (!p.nome || !p.funcao) return;
      if (editIndex >= 0) people[editIndex] = p; else people.push(p);
      persist(); closeModal(); draw();
    });
  }
  draw();
}

/* ---- Notícias ---- */
function noticias() {
  if (!tem.noticias) return;
  const r = q => {
    const m = DATA.noticias.filter(n => (n.t + n.resumo + (n.cat || "")).toLowerCase().includes(q.toLowerCase()));
    const notLista = $("#notLista");
    if (notLista) notLista.innerHTML = m.map(n => `<article>${n.img ? `<img src="${esc(n.img)}" alt="${esc(n.alt || "")}" loading="lazy">` : "<div></div>"}<div><p>${esc(n.d || "")} ${esc(n.cat || "")}</p><h3>${esc(n.t)}</h3><p>${esc(n.resumo || "")}</p>${n.texto ? `<details><summary>Ler completa</summary><p>${esc(n.texto)}</p></details>` : ""}</div></article>`).join("") || "<p>Nenhuma notícia encontrada.</p>";
  };
  r(""); const notBusca = $("#notBusca"); if (notBusca) notBusca.oninput = e => r(e.target.value);
}

/* ---- Galeria ---- */
function galeria() {
  if (!tem.fotos) return;
  let cat = "Todas", cur = [], idx = 0;
  const cs = ["Todas", ...new Set(DATA.fotos.map(f => f.cat).filter(Boolean))];
  const galFiltros = $("#galFiltros");
  if (galFiltros) galFiltros.innerHTML = cs.map(c => `<button aria-pressed="${c === "Todas"}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
  
  const draw = () => { cur = DATA.fotos.filter(f => cat === "Todas" || f.cat === cat); const galLista = $("#galLista"); if (galLista) galLista.innerHTML = cur.map((f, i) => `<li><button data-i="${i}" aria-label="Ampliar: ${esc(f.alt)}"><img src="${esc(f.src)}" alt="${esc(f.alt)}" loading="lazy"></button></li>`).join(""); };
  const show = i => { idx = (i + cur.length) % cur.length; const f = cur[idx]; const img = $("#lbImg"), cap = $("#lbCap"); if (img) { img.src = f.src; img.alt = f.alt; } if (cap) cap.textContent = f.legenda \vert{}\vert{} ""; };   draw();   if (galFiltros) galFiltros.onclick = e => { const c = e.target.dataset.c; if (!c) return; cat = c; $$("#galFiltros button").forEach(b => b.setAttribute("aria-pressed", b.dataset.c === c)); draw(); };
  const galLista = $("#galLista");
  if (galLista) galLista.onclick = e => { const b = e.target.closest("[data-i]"); if (!b) return; show(+b.dataset.i); $("#lb")?.showModal(); };
  const lbP = $("#lbP"), lbN = $("#lbN"), lb = $("#lb");
  if (lbP) lbP.onclick = () => show(idx - 1);
  if (lbN) lbN.onclick = () => show(idx + 1);
  if (lb) lb.onkeydown = e => { if (e.key === "ArrowLeft") show(idx - 1); if (e.key === "ArrowRight") show(idx + 1); };
}

/* ---- Conteúdo e Contato ---- */
function conteudo() {
  const faq = $("#faq"); if (faq) faq.innerHTML = DATA.faq.map(f => `<details><summary>${esc(f.p)}</summary><p>${esc(f.r)}</p></details>`).join("");
  if (DATA.historia.length) { const tl = $("#timeline"); if (tl) { tl.hidden = false; tl.innerHTML = DATA.historia.map(h => `<p><strong>${esc(h.ano)}</strong> — ${esc(h.texto)}</p>`).join(""); } }
  if (DATA.numeros.length) { const num = $("#numeros"); if (num) { num.hidden = false; num.innerHTML = DATA.numeros.map(n => `<div><dt>${esc(n.valor)}</dt><dd>${esc(n.rotulo)}</dd></div>`).join(""); } }
  
  const c = DATA.contato, L = [];
  if (c.endereco) L.push(esc(c.endereco)); if (c.telefone) L.push("Telefone: " + esc(c.telefone)); if (c.email) L.push(`E-mail: <a href="mailto:${esc(c.email)}">${esc(c.email)}</a>`); if (c.horarios) L.push("Horários: " + esc(c.horarios));
  if (tem.local) { const locBox = $("#locBox"); if (locBox) locBox.innerHTML = `<p>${L.join("<br>")}</p>` + (c.mapa ? `<iframe title="Mapa da escola" src="${esc(c.mapa)}" loading="lazy" style="width:100%;height:320px;border:0"></iframe>` : ""); }
  const conInfo = $("#conInfo"); if (conInfo) conInfo.innerHTML = L.length ? L.join("<br>") : "Para falar com a escola, use o canal oficial de atendimento do colégio.";
  const footContato = $("#footContato"); if (footContato) footContato.innerHTML = L.join("<br>");
  if (c.portalAlunos) { const linkAlunos = $("#linkAlunos"); if (linkAlunos) linkAlunos.innerHTML = `<a class="btnline" href="${esc(c.portalAlunos)}" rel="noopener">Portal oficial</a>`; }
  const ano = $("#ano"); if (ano) ano.textContent = new Date().getFullYear();
  
  const form = $("#form");
  if (form) {
    form.onsubmit = e => {
      e.preventDefault(); let ok = true;
      [["fn", "Informe seu nome."], ["fe", "Informe um e-mail válido."], ["fa", "Informe o assunto."], ["fm", "Escreva sua mensagem."]].forEach(([id, m]) => {
        const el = $("#" + id), errEl = $("#e-" + id);
        const bad = !el || !el.value.trim() || (id === "fe" && !el.validity.valid);
        if (errEl) errEl.textContent = bad ? m : "";
        if (el) el.setAttribute("aria-invalid", bad);
        if (bad) ok = false;
      });
      const formMsg = $("#formMsg");       if (formMsg) formMsg.textContent = ok ? "Este site ainda não envia mensagens. Entre em contato pelo canal oficial da escola." : "Corrija os campos indicados.";     };   } }  /* ---- Busca ---- */ function busca() {   const idx = () => [     ...$$("main section[id]:not([hidden])").map(s => ({ t: $("h2", s)?.textContent || s.id, x: s.textContent.replace(/\s+/g, " ").slice(0, 400), h: "#" + s.id })),
    ...DATA.eventos.map(e => ({ t: e.t, x: `${e.d} ${e.desc || ""}`, h: "#calendario" })),
    ...DATA.noticias.map(n => ({ t: n.t, x: n.resumo || "", h: "#noticias" })),
    ...DATA.pessoas.map(p => ({ t: p.nome, x: `${p.funcao || ""} ${p.area || ""}`, h: "#equipe" }))
  ];
  const bBusca = $("#bBusca"); if (bBusca) bBusca.onclick = () => { $("#busca")?.showModal(); $("#q")?.focus(); };
  const qInput = $("#q");
  if (qInput) {
    qInput.oninput = e => {
      const q = e.target.value.trim().toLowerCase();
      const m = q ? idx().filter(i => (i.t + " " + i.x).toLowerCase().includes(q)).slice(0, 8) : [];
      const res = $("#res");
      if (res) res.innerHTML = m.length ? m.map(i => `<li><a href="${i.h}">${esc(i.t)}</a></li>`).join("") : (q ? "<li>Nada encontrado.</li>" : "");
    };
  }
  const res = $("#res"); if (res) res.onclick = e => { if (e.target.tagName === "A") $("#busca")?.close(); };
}

/* ---- Inicialização ---- */
visibilidade(); menu(); acess(); estrelas(); agenda(); calendario(); equipe(); noticias(); galeria(); conteudo(); busca();

/* ============================================================
   CEIAS — INTERACTION ENGINE
   ============================================================ */
(function(){
  document.body.insertAdjacentHTML('afterbegin','<div id="ceias-progress"></div><div id="ceias-orbit"><span class="orbo1"></span><span class="orbo2"></span><span class="orbo3"></span></div><div id="ceias-cursor"></div><div id="ceias-cursor-dot"></div>');
  const hero = $('.hero');   if(hero){     hero.insertAdjacentHTML('beforeend','<div class="ceias-float f1"><i></i> Educação que transforma</div><div class="ceias-float f2"><i></i> Comunidade em movimento</div><div class="ceias-float f3"><i></i> Campo • Escola • Futuro</div><div class="ceias-float f4"><i></i> CEIAS</div><div class="ceias-scrollcue"><span></span>explore</div>');   }    const revealEls = $$('main section, .panel, .card, .news-card, .person, .gallery-item, .faq-item, .path-card, .stat-card, .hero-in');
  revealEls.forEach((el,i)=>{
    if(!el.hasAttribute('data-reveal') && !el.classList.contains('hero')) el.setAttribute('data-reveal', i%7===1?'left':i%7===4?'right':'');
  });
  const io = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -40px'});
  $$('[data-reveal]').forEach(e=>io.observe(e));$$
('.hero-in').forEach(e=>e.classList.add('revealed'));

  const prog = $('#ceias-progress');
  const scrollFX = ()=>{
    if(!prog) return;
    const h = document.documentElement.scrollHeight - innerHeight;
    prog.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + '%';
    document.body.style.setProperty('--scrollY', scrollY + 'px');
  };
  addEventListener('scroll', scrollFX, {passive:true});
  scrollFX();

  const cur = $('#ceias-cursor'), dot = $('#ceias-cursor-dot');
  let mx=0, my=0, cx=0, cy=0;
  if(dot && cur) {
    addEventListener('pointermove', e => { mx = e.clientX; my = e.clientY; dot.style.left = mx + 'px'; dot.style.top = my + 'px'; });
    (function loop(){
      cx += (mx - cx) * .18; cy += (my - cy) * .18;
      cur.style.left = cx + 'px'; cur.style.top = cy + 'px';
      requestAnimationFrame(loop);
    })();
  }
  $$('a,button,.btn,.card,.person,.gallery-item,.news-card,.path-card,.faq-item').forEach(el=>{     el.addEventListener('mouseenter',()=>document.body.classList.add('cursor-hover'));     el.addEventListener('mouseleave',()=>document.body.classList.remove('cursor-hover'));   });    if(matchMedia('(pointer:fine)').matches){     $$
('.card,.person,.news-card,.path-card,.stat-card,.gallery-item,.panel').forEach(el=>{
      el.setAttribute('data-tilt','');
      el.addEventListener('pointermove',e=>{
        const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
        el.style.transform=`perspective(900px) rotateX(${(-y*4).toFixed(2)}deg) rotateY(${(x*5).toFixed(2)}deg) translateY(-4px)`;
      });
      el.addEventListener('pointerleave',()=>el.style.transform='');
    });
  }

  $$('button,.btn,a[role="button"]').forEach(el => {     el.classList.add('ripple-host');     el.addEventListener('click', e => {       const r = el.getBoundingClientRect(), s = document.createElement('span'), d = Math.max(r.width, r.height);       s.className = 'ceias-ripple';       s.style.width = s.style.height = d + 'px';       s.style.left = (e.clientX - r.left - d / 2) + 'px';       s.style.top = (e.clientY - r.top - d / 2) + 'px';       el.appendChild(s);       setTimeout(() => s.remove(), 700);     });   });    const counters = $$
('[data-counter]');
  const co = new IntersectionObserver(entries => entries.forEach(e => {
    if(!e.isIntersecting) return;
    const el = e.target;
    const raw = el.dataset.counter || el.textContent;
    const m = String(raw).match(/([\d.,]+)/);
    if(!m) { co.unobserve(el); return; }
    const target = parseFloat(m[1].replace(/\./g,'').replace(',','.'));
    if(!isFinite(target)) { co.unobserve(el); return; }
    const prefix = String(raw).slice(0, m.index), suffix = String(raw).slice(m.index + m[0].length);
    let st = performance.now();
    const dur = 1300;
    const tick = t => {
      const p = Math.min(1, (t - st) / dur), v = target * (1 - Math.pow(1 - p, 3));
      el.textContent = prefix + (Number.isInteger(target) ? Math.round(v) : v.toFixed(1)) + suffix;
      if(p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    co.unobserve(el);
  }), {threshold: .7});
  counters.forEach(e => co.observe(e));

  const secs = $$('main section[id]'), links =$$('header a[href^="#"]');
  const activeIO = new IntersectionObserver(entries => entries.forEach(e => {
    if(e.isIntersecting){
      links.forEach(a => a.classList.toggle('is-current', a.getAttribute('href') === '#' + e.target.id));
    }
  }), {rootMargin: '-35% 0px -55%'});
  secs.forEach(s => activeIO.observe(s));

  if(hero && matchMedia('(pointer:fine)').matches){
    hero.addEventListener('pointermove', e => {
      const r = hero.getBoundingClientRect(), x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
      hero.querySelectorAll('.ceias-float').forEach((el, i) => el.style.transform = `translate(${x * (i + 1) * .006}px, ${y * (i + 1) * .004}px)`);
      const logo = hero.querySelector('.hero-logo');
      if(logo) logo.style.transform = `translate(${x * .008}px, ${y * .006}px) rotate(${x * .002}deg)`;
    });
    hero.addEventListener('pointerleave', () => {
      hero.querySelectorAll('.ceias-float').forEach(el => el.style.transform = '');
      const logo = hero.querySelector('.hero-logo');
      if(logo) logo.style.transform = '';
    });
  }

  $$('.panel, .card, .news-card, .person, .path-card, .stat-card').forEach(el => {     const parent = el.parentElement;     if(parent && parent.children.length > 2) parent.classList.add('reveal-stagger');   });$$
('.reveal-stagger').forEach(e => io.observe(e));
})();

window.addEventListener('error', function(){
  if(window.innerWidth <= 900){
    document.querySelectorAll('[data-reveal], .reveal-stagger > *').forEach(function(el){
      el.style.opacity = '1'; el.style.transform = 'none';
    });
  }
});

(function(){
  function revealAll(){ document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('revealed')); }
  setTimeout(revealAll, 1800);
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('revealed'); io.unobserve(e.target); } }), {threshold: .08, rootMargin: '0px 0px -30px'});
    document.querySelectorAll('main section,.ceias-hub-card,.story li,.paths>div').forEach((el, i) => {
      if(!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', '');
      el.style.transitionDelay = (Math.min(i % 5, 4) * 70) + 'ms';
      io.observe(el);
    });
  } else revealAll();

  if(matchMedia('(pointer:coarse)').matches){
    document.querySelectorAll('.ceias-hub-card,.story li,.paths>div').forEach(el => {
      el.addEventListener('touchstart', () => el.classList.add('touching'), {passive: true});
      el.addEventListener('touchend', () => setTimeout(() => el.classList.remove('touching'), 180), {passive: true});
    });
  }
})();

(function(){
  const root = document.documentElement;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  root.classList.add('motion-ready');
  const targets = [...document.querySelectorAll('section, .ceias-command, .ceias-facts, .fact, .command-item, .paths>div, .timeline, .nums, .calwrap, .people, .news, .gal, #locBox, #form')];
  targets.forEach(el => el.classList.add('reveal'));
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target); } }), {threshold: .08, rootMargin: '0px 0px -40px'});
    targets.forEach(el => io.observe(el));
  } else targets.forEach(el => el.classList.add('is-visible'));

  if(window.matchMedia('(max-width:700px)').matches){
    const dock = document.createElement('nav');
    dock.className = 'ceias-mobile-dock';
    dock.setAttribute('aria-label', 'Atalhos rápidos');
    dock.innerHTML = '<a href="#inicio"><i>⌂</i>Início</a><a href="#ensino"><i>▦</i>Ensino</a><a href="#calendario"><i>◷</i>Agenda</a><a href="#contato"><i>✦</i>Contato</a>';
    document.body.appendChild(dock);
  }

  if(window.matchMedia('(pointer:fine)').matches){
    const stage = document.querySelector('.home-logo-stage');
    if(stage){
      stage.addEventListener('pointermove', e => {
        const r = stage.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        stage.style.transform = `perspective(900px) rotateX(${(-y * 3).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg)`;
      });
      stage.addEventListener('pointerleave', () => stage.style.transform = '');
    }
  }
})();

(function(){
  function ready(){
    var eq = document.getElementById('equipe');
    if(eq) eq.hidden = false;
    document.querySelectorAll('a[href="#equipe"]').forEach(function(a){
      a.removeAttribute('data-needs');
      a.addEventListener('click', function(){
        var nav = document.getElementById('nav'), btn = document.getElementById('bMenu');
        if(nav && nav.classList.contains('open')){
          nav.classList.remove('open');
          if(btn) btn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready); else ready();
})();