/* =====================================================================
   DADOS EDITÁVEIS — substitua os exemplos pelas informações reais.
   Tudo o que está entre [COLCHETES] é um espaço reservado.
   ===================================================================== */

// Funcionários. grupo: Professores | Direção | Pedagogia | Secretaria | Apoio | Outros
// foto: caminho da imagem, ex.: "assets/equipe/maria.jpg" (vazio = espaço reservado)
const funcionarios = [
  {nome:"[NOME DO(A) DIRETOR(A)]", cargo:"Direção", grupo:"Direção", setor:"Direção", disciplina:"", foto:"", descricao:"[INSERIR DESCRIÇÃO]", extra:"[INFORMAÇÕES ADICIONAIS]"},
  {nome:"[NOME DO(A) PEDAGOGO(A)]", cargo:"Pedagogo(a)", grupo:"Pedagogia", setor:"Equipe pedagógica", disciplina:"", foto:"", descricao:"[INSERIR DESCRIÇÃO]", extra:"[INFORMAÇÕES ADICIONAIS]"},
  {nome:"[NOME DO(A) PROFESSOR(A) 1]", cargo:"Professor(a)", grupo:"Professores", setor:"Corpo docente", disciplina:"[DISCIPLINA]", foto:"", descricao:"[INSERIR DESCRIÇÃO]", extra:"[INFORMAÇÕES ADICIONAIS]"},
  {nome:"[NOME DO(A) PROFESSOR(A) 2]", cargo:"Professor(a)", grupo:"Professores", setor:"Corpo docente", disciplina:"[DISCIPLINA]", foto:"", descricao:"[INSERIR DESCRIÇÃO]", extra:"[INFORMAÇÕES ADICIONAIS]"},
  {nome:"[NOME DO(A) SECRETÁRIO(A)]", cargo:"Secretaria", grupo:"Secretaria", setor:"Secretaria", disciplina:"", foto:"", descricao:"[INSERIR DESCRIÇÃO]", extra:"[INFORMAÇÕES ADICIONAIS]"},
  {nome:"[NOME DO(A) FUNCIONÁRIO(A) DE APOIO]", cargo:"Apoio", grupo:"Apoio", setor:"Apoio escolar", disciplina:"", foto:"", descricao:"[INSERIR DESCRIÇÃO]", extra:"[INFORMAÇÕES ADICIONAIS]"}
];
const gruposFunc = ["Todos","Professores","Direção","Pedagogia","Secretaria","Apoio","Outros"];

// Notícias. categoria: Avisos | Escola | Projetos | Eventos | Alunos | Comunidade
const noticias = [
  {titulo:"[TÍTULO DA NOTÍCIA EM DESTAQUE]", categoria:"Escola", data:"[DATA]", imagem:"assets/noticia1.jpg", resumo:"[INSERIR RESUMO]", texto:"[INSERIR TEXTO COMPLETO DA NOTÍCIA]"},
  {titulo:"[TÍTULO DO AVISO]", categoria:"Avisos", data:"[DATA]", imagem:"", resumo:"[INSERIR RESUMO]", texto:"[INSERIR TEXTO COMPLETO]"},
  {titulo:"[TÍTULO DO PROJETO]", categoria:"Projetos", data:"[DATA]", imagem:"", resumo:"[INSERIR RESUMO]", texto:"[INSERIR TEXTO COMPLETO]"},
  {titulo:"[TÍTULO DA NOTÍCIA DA COMUNIDADE]", categoria:"Comunidade", data:"[DATA]", imagem:"", resumo:"[INSERIR RESUMO]", texto:"[INSERIR TEXTO COMPLETO]"}
];
const catsNoticias = ["Todos","Avisos","Escola","Projetos","Eventos","Alunos","Comunidade"];

// Eventos. data: "AAAA-MM-DD". tipo: Acadêmicos | Esportivos | Culturais | Reuniões | Outros
// (os exemplos abaixo usam o mês atual apenas para demonstrar o calendário)
const _m = new Date(), _p = n => `${_m.getFullYear()}-${String(_m.getMonth()+1).padStart(2,"0")}-${String(n).padStart(2,"0")}`;
const eventos = [
  {titulo:"[EVENTO DE EXEMPLO — ACADÊMICO]", data:_p(8), hora:"[HORÁRIO]", local:"[LOCAL]", tipo:"Acadêmicos", descricao:"[INSERIR DESCRIÇÃO]"},
  {titulo:"[EVENTO DE EXEMPLO — REUNIÃO]", data:_p(15), hora:"[HORÁRIO]", local:"[LOCAL]", tipo:"Reuniões", descricao:"[INSERIR DESCRIÇÃO]"},
  {titulo:"[EVENTO DE EXEMPLO — CULTURAL]", data:_p(22), hora:"[HORÁRIO]", local:"[LOCAL]", tipo:"Culturais", descricao:"[INSERIR DESCRIÇÃO]"}
];
const tiposEv = ["Todos","Acadêmicos","Esportivos","Culturais","Reuniões","Outros"];

// Galeria (Primavera Fest). Coloque as fotos em assets/galeria/
const galeria = [1,2,3,4,5].map(n => ({src:`assets/galeria/foto${n}.jpg`, legenda:"[INSERIR LEGENDA]", cat:"Primavera Fest"}));

// Galeria da Escola. cat: Escola | Projetos | Eventos | Primavera Fest | Atividades | Comunidade
const fotosEscola = [["Escola","escola1"],["Projetos","projeto1"],["Eventos","evento1"],["Primavera Fest","primavera1"],["Atividades","atividade1"],["Comunidade","comunidade1"],["Escola","escola2"],["Projetos","projeto2"]].map(([cat,n]) => ({cat, src:`assets/galeria/${n}.jpg`, legenda:"[INSERIR LEGENDA]"}));

// Primavera Fest — programação
const programacao = [
  {dia:"Dia 1", texto:"[INSERIR PROGRAMAÇÃO DO DIA 1]"},
  {dia:"Dia 2", texto:"[INSERIR PROGRAMAÇÃO DO DIA 2]"},
  {dia:"Dia 3", texto:"[INSERIR PROGRAMAÇÃO DO DIA 3]"}
];

// Ensino
const ensino = [
  {nivel:"Ensino Fundamental", desc:"[INSERIR DESCRIÇÃO]", mais:"Conteúdos: [INSERIR]. Projetos: [INSERIR]. Atividades: [INSERIR]. Documentos: [INSERIR LINKS]."},
  {nivel:"Ensino Médio", desc:"[INSERIR DESCRIÇÃO]", mais:"Conteúdos: [INSERIR]. Projetos: [INSERIR]. Atividades: [INSERIR]. Documentos: [INSERIR LINKS]."}
];

// Links das áreas do aluno e dos responsáveis (troque "#" pelo endereço real)
const linksAluno = [["Calendário","#eventos"],["Comunicados","#noticias"],["Atividades","#"],["Materiais","#"],["Projetos","#"],["Documentos","#"],["Links importantes","#"]];
const linksResp  = [["Comunicados","#noticias"],["Calendário","#eventos"],["Reuniões","#"],["Documentos","#"],["Contatos importantes","#contato"],["Informações pedagógicas","#pedagogia"]];

// Perguntas frequentes
const faq = [
  ["Como entrar em contato com a escola?","Use o formulário da seção Contato ou os telefones e o e-mail informados nela. [EDITAR RESPOSTA]"],
  ["Onde encontro os comunicados?","Na seção Notícias e Comunicados desta página. [EDITAR RESPOSTA]"],
  ["Onde vejo o calendário?","Na seção Eventos. [EDITAR RESPOSTA]"],
  ["Como obter informações pedagógicas?","Fale com a equipe pedagógica pelo Contato. [EDITAR RESPOSTA]"]
];

// Link do botão "Como chegar" (ex.: link do Google Maps)
const linkMapa = "#";

/* =====================================================================
   CÓDIGO — não é necessário editar daqui para baixo
   ===================================================================== */
const $ = (s, e = document) => e.querySelector(s), $$ = (s, e = document) => [...e.querySelectorAll(s)];
// Imagem com espaço reservado: se o arquivo não existir, aparece o bloco azul-claro
const ph = (src, alt, txt = "[FOTO]") => `<div class="ph"><span>${txt}</span>${src ? `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.remove()">` : ""}</div>`;
const norm = s => (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

/* Cabeçalho, menu, voltar ao topo */
const header = $("#header"), burger = $("#burger"), menu = $("#menu");
addEventListener("scroll", () => { header.classList.toggle("small", scrollY > 60); $("#topo").classList.toggle("show", scrollY > 500); }, {passive:true});
burger.onclick = () => { const o = menu.classList.toggle("open"); burger.setAttribute("aria-expanded", o); };
$$("#menu a").forEach(a => a.addEventListener("click", () => { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); }));
$("#topo").onclick = () => scrollTo({top:0});
$("#ano").textContent = new Date().getFullYear();

/* Seção atual destacada no menu */
const obs = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) $$("#menu a").forEach(a => a.toggleAttribute("aria-current", a.getAttribute("href") === "#" + e.target.id));
}), {rootMargin:"-40% 0px -55% 0px"});
$$("main section[id]").forEach(s => obs.observe(s));

/* Animação de entrada */
const rv = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); rv.unobserve(e.target); } }), {threshold:.1});
$$(".sec .wrap > *, .spring .wrap > *").forEach(el => { el.classList.add("rv"); rv.observe(el); });

/* Modal genérico */
const modal = $("#modal"); let voltaFoco = null;
function abrir(html) { voltaFoco = document.activeElement; $("#mBody").innerHTML = html; modal.hidden = false; $(".x", modal).focus(); }
function fechar() { modal.hidden = true; $("#lb").hidden = true; voltaFoco && voltaFoco.focus(); }
modal.addEventListener("click", e => { if (e.target === modal || e.target.classList.contains("x")) fechar(); });
$("#lb").addEventListener("click", e => { if (e.target.id === "lb" || e.target.classList.contains("x")) fechar(); });
addEventListener("keydown", e => {
  if (e.key === "Escape") fechar();
  if (!$("#lb").hidden) { if (e.key === "ArrowRight") foto(1); if (e.key === "ArrowLeft") foto(-1); }
});

/* Chips de filtro */
function chips(el, lista, cb) {
  el.innerHTML = lista.map((c, i) => `<button class="chip${i ? "" : " on"}" aria-pressed="${!i}">${c}</button>`).join("");
  el.onclick = e => { const b = e.target.closest(".chip"); if (!b) return; $$(".chip", el).forEach(x => { x.classList.toggle("on", x === b); x.setAttribute("aria-pressed", x === b); }); cb(b.textContent); };
}

/* Ensino */
$("#ensinoBox").innerHTML = ensino.map((e, i) => `<div class="card ${i ? "r" : ""}"><h3>${e.nivel}</h3><p>${e.desc}</p><button class="btn red" data-i="${i}">Saiba mais</button></div>`).join("");
$("#ensinoBox").onclick = e => { const b = e.target.closest("[data-i]"); if (b) { const x = ensino[b.dataset.i]; abrir(`<h3>${x.nivel}</h3><p>${x.mais}</p>`); } };

/* Funcionários */
let fGrupo = "Todos";
function rFunc() {
  const q = norm($("#buscaFunc").value);
  const l = funcionarios.map((f, i) => ({f, i})).filter(({f}) => (fGrupo === "Todos" || f.grupo === fGrupo) && norm([f.nome, f.cargo, f.setor, f.disciplina].join(" ")).includes(q));
  $("#gridFunc").innerHTML = l.length ? l.map(({f, i}) => `<button class="pessoa" data-i="${i}">${ph(f.foto, "Foto de " + f.nome)}<div class="t"><b>${f.nome}</b><br><small>${f.cargo}${f.disciplina ? " · " + f.disciplina : ""}</small></div></button>`).join("") : `<p class="vazio">Nenhum funcionário encontrado.</p>`;
}
chips($("#chipsFunc"), gruposFunc, g => { fGrupo = g; rFunc(); });
$("#buscaFunc").oninput = rFunc;
$("#gridFunc").onclick = e => { const b = e.target.closest("[data-i]"); if (!b) return; const f = funcionarios[b.dataset.i];
  abrir(`<div class="mph">${ph(f.foto, "Foto de " + f.nome)}</div><h3>${f.nome}</h3><p><b>Cargo:</b> ${f.cargo}<br><b>Setor:</b> ${f.setor}${f.disciplina ? `<br><b>Disciplina:</b> ${f.disciplina}` : ""}</p><p>${f.descricao}</p><p>${f.extra}</p>`); };
rFunc();

/* Calendário de eventos */
let mes = new Date(_m.getFullYear(), _m.getMonth(), 1), tEv = "Todos";
const dataBR = iso => iso.split("-").reverse().join("/");
const evHtml = e => `<h3>${e.titulo}</h3><p><b>Data:</b> ${dataBR(e.data)}<br><b>Horário:</b> ${e.hora}<br><b>Local:</b> ${e.local}<br><b>Tipo:</b> ${e.tipo}</p><p>${e.descricao}</p>`;
function rCal() {
  const y = mes.getFullYear(), m = mes.getMonth(), ini = mes.getDay(), n = new Date(y, m + 1, 0).getDate();
  $("#calTitulo").textContent = mes.toLocaleDateString("pt-BR", {month:"long", year:"numeric"});
  let h = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"].map(d => `<b>${d}</b>`).join("") + "<i></i>".repeat(ini);
  for (let d = 1; d <= n; d++) {
    const iso = `${y}-${String(m + 1).padStart(2,"0")}-${String(d).padStart(2,"0")}`, c = eventos.filter(e => e.data === iso && (tEv === "Todos" || e.tipo === tEv)).length;
    h += c ? `<button class="dia tem" data-d="${iso}" aria-label="${d}: ${c} evento(s)">${d}<em>${c}</em></button>` : `<span class="dia">${d}</span>`;
  }
  $("#calGrid").innerHTML = h;
  const pref = `${y}-${String(m + 1).padStart(2,"0")}`, l = eventos.filter(e => e.data.startsWith(pref) && (tEv === "Todos" || e.tipo === tEv));
  $("#evLista").innerHTML = l.length ? l.map(e => `<button data-e="${eventos.indexOf(e)}"><b>${dataBR(e.data)}</b> — ${e.titulo}</button>`).join("") : "<p>Nenhum evento neste mês.</p>";
}
$("#prev").onclick = () => { mes.setMonth(mes.getMonth() - 1); rCal(); };
$("#next").onclick = () => { mes.setMonth(mes.getMonth() + 1); rCal(); };
chips($("#chipsEv"), tiposEv, t => { tEv = t; rCal(); });
$("#calGrid").onclick = e => { const b = e.target.closest("[data-d]"); if (b) abrir(eventos.filter(x => x.data === b.dataset.d && (tEv === "Todos" || x.tipo === tEv)).map(evHtml).join("<hr>")); };
$("#evLista").onclick = e => { const b = e.target.closest("[data-e]"); if (b) abrir(evHtml(eventos[b.dataset.e])); };
rCal();

/* Primavera Fest: linha do tempo e galeria com lightbox */
$("#timeline").innerHTML = programacao.map(p => `<li><b>${p.dia}</b><br>${p.texto}</li>`).join("");
$("#gal").innerHTML = galeria.map((g, i) => `<button data-i="${i}" aria-label="Ampliar foto ${i + 1}">${ph(g.src, g.legenda)}</button>`).join("");
let fi = 0;
function foto(d) { fi = (fi + d + lista.length) % lista.length; const g = lista[fi]; $("#lbImg").src = g.src; $("#lbImg").alt = g.legenda; $("#lbCap").textContent = g.legenda; }
$("#gal").onclick = e => { const b = e.target.closest("[data-i]"); if (!b) return; voltaFoco = b; lista = galeria; fi = +b.dataset.i; foto(0); $("#lb").hidden = false; $("#lb .x").focus(); };
$("#lb .l").onclick = () => foto(-1); $("#lb .r").onclick = () => foto(1);

/* Notícias */
let nCat = "Todos";
function rNot() {
  const q = norm($("#buscaNot").value), l = noticias.map((n, i) => ({n, i})).filter(({n}) => (nCat === "Todos" || n.categoria === nCat) && norm(n.titulo + n.resumo).includes(q));
  const card = ({n, i}, big) => `<button class="n ${big ? "big" : ""}" data-i="${i}">${ph(n.imagem, n.titulo, "[IMAGEM]")}<div class="b"><span class="cat">${n.categoria}</span><small>${n.data}</small><h3>${n.titulo}</h3><p>${n.resumo}</p><span class="link-btn">Leia mais</span></div></button>`;
  $("#news").innerHTML = l.length ? card(l[0], true) + `<div class="side">${l.slice(1).map(x => card(x)).join("")}</div>` : "<p>Nenhuma notícia encontrada.</p>";
}
chips($("#chipsNot"), catsNoticias, c => { nCat = c; rNot(); });
$("#buscaNot").oninput = rNot;
$("#news").onclick = e => { const b = e.target.closest("[data-i]"); if (!b) return; const n = noticias[b.dataset.i]; abrir(`<div class="mph">${ph(n.imagem, n.titulo, "[IMAGEM]")}</div><span class="cat">${n.categoria}</span><small>${n.data}</small><h3>${n.titulo}</h3><p>${n.texto}</p>`); };
rNot();

/* Galeria em mosaico (usa o mesmo lightbox) */
let lista = galeria, gCat = "Todos";
const fGal = () => fotosEscola.filter(g => gCat === "Todos" || g.cat === gCat);
function rMos() { $("#mosaic").innerHTML = fGal().map((g, i) => `<button data-i="${i}" aria-label="Ampliar foto: ${g.cat}">${ph(g.src, g.legenda)}<i>${g.cat}</i></button>`).join(""); }
chips($("#chipsGal"), ["Todos","Escola","Projetos","Eventos","Primavera Fest","Atividades","Comunidade"], c => { gCat = c; rMos(); });
$("#mosaic").onclick = e => { const b = e.target.closest("[data-i]"); if (!b) return; voltaFoco = b; lista = fGal(); fi = +b.dataset.i; foto(0); $("#lb").hidden = false; $("#lb .x").focus(); };
rMos();

/* Painel do hero: próximos eventos e últimos comunicados (vêm dos arrays acima) */
$("#heroEv").innerHTML = [...eventos].sort((a, b) => a.data.localeCompare(b.data)).slice(0, 3).map(e => `<li><a href="#eventos"><b>${dataBR(e.data)}</b> — ${e.titulo}</a></li>`).join("") || "<li>Nenhum evento cadastrado.</li>";
$("#heroNot").innerHTML = noticias.slice(0, 3).map(n => `<li><a href="#noticias">${n.titulo}</a></li>`).join("") || "<li>Nenhum comunicado.</li>";

/* Áreas do aluno e dos responsáveis, FAQ, mapa */
const mkLinks = l => l.map(([t, h]) => `<a href="${h}">${t}</a>`).join("");
$("#linksAlunos").innerHTML = mkLinks(linksAluno); $("#linksResp").innerHTML = mkLinks(linksResp);
$("#faq").innerHTML = faq.map(([q, a]) => `<div class="it"><button aria-expanded="false">${q}<span aria-hidden="true">+</span></button><div class="ans"><div>${a}</div></div></div>`).join("");
$("#faq").onclick = e => { const b = e.target.closest("button"); if (!b) return; const it = b.parentElement, o = it.classList.toggle("open"); b.setAttribute("aria-expanded", o); b.lastChild.textContent = o ? "−" : "+"; };
$("#comoChegar").href = linkMapa; if (linkMapa !== "#") $("#comoChegar").target = "_blank";

/* Formulário: ainda sem envio — integre um serviço (ex.: Formspree) aqui */
$("#form").onsubmit = e => { e.preventDefault(); $("#formMsg").textContent = "O envio ainda não está configurado. Use o telefone ou o e-mail informados nesta seção."; };

