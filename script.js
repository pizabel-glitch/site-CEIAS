document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  // ------------------------------------------------------------------
  // 1. Dados dos Funcionários da Escola
  // ------------------------------------------------------------------
  const equipe = [
    {
      nome: "Prof. Maria Silva",
      cargo: "Direção Geral",
      grupo: "Direção",
      foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      desc: "Gestão escolar e projetos comunitários."
    },
    {
      nome: "Prof. Carlos Andrade",
      cargo: "Pedagogo",
      grupo: "Direção",
      foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
      desc: "Acompanhamento e orientação dos alunos."
    },
    {
      nome: "Ana Paula Souza",
      cargo: "Profª. de Matemática",
      grupo: "Professores",
      foto: "https://images.unsplash.com/photo-1580894732413-801111b24539?auto=format&fit=crop&w=300&q=80",
      desc: "Ensino Fundamental e Médio."
    },
    {
      nome: "João Pedro Oliveira",
      cargo: "Prof. de História e Geografia",
      grupo: "Professores",
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      desc: "Estudos regionais e do campo."
    },
    {
      nome: "Roberto Mendes",
      cargo: "Secretaria Escolar",
      grupo: "Funcionários",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      desc: "Atendimento e documentação."
    }
  ];

  function renderEquipe(filtro = "todos") {
    const grid = document.getElementById("teamGrid");
    grid.innerHTML = "";

    const filtrados = filtro === "todos" 
      ? equipe 
      : equipe.filter(m => m.grupo === filtro);

    filtrados.forEach(membro => {
      const card = document.createElement("div");
      card.className = "staff-card";
      card.innerHTML = `
        <img src="${membro.foto}" alt="${membro.nome}" class="staff-avatar">
        <span class="staff-role">${membro.cargo}</span>
        <h3 class="staff-name">${membro.nome}</h3>
        <p class="staff-desc">${membro.desc}</p>
      `;
      grid.appendChild(card);
    });
  }

  // Filtros de Equipe
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      renderEquipe(e.target.dataset.filter);
    });
  });

  renderEquipe();

  // ------------------------------------------------------------------
  // 2. Calendário Escolar Interativo (SEED-PR)
  // ------------------------------------------------------------------
  const datasEspeciais = {
    "2026-02-02": { tipo: "planejamento", desc: "Estudo e Planejamento Pedagógico (Início dos Professores)" },
    "2026-02-03": { tipo: "planejamento", desc: "Estudo e Planejamento Pedagógico" },
    "2026-02-04": { tipo: "letivo", desc: "Início do 1º Semestre Letivo 2026" },
    "2026-02-16": { tipo: "recesso", desc: "Recesso Escolar (Carnaval)" },
    "2026-02-17": { tipo: "recesso", desc: "Feriado de Carnaval" },
    "2026-04-03": { tipo: "recesso", desc: "Sexta-feira Santa" },
    "2026-04-21": { tipo: "recesso", desc: "Feriado - Tiradentes" },
    "2026-05-01": { tipo: "recesso", desc: "Feriado - Dia do Trabalho" },
    "2026-07-06": { tipo: "conselho", desc: "Conselho de Classe - Fechamento do 1º Semestre" }
  };

  let mesAtual = 1; // Fevereiro (index 1)
  let anoAtual = 2026;

  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  function renderCalendario() {
    const grid = document.getElementById("calGrid");
    const title = document.getElementById("calMonthTitle");
    grid.innerHTML = "";
    
    title.textContent = `${meses[mesAtual]} de ${anoAtual}`;

    const primerDiaMes = new Date(anoAtual, mesAtual, 1).getDay();
    const totalDias = new Date(anoAtual, mesAtual + 1, 0).getDate();

    // Espaços em branco do início
    for (let i = 0; i < primerDiaMes; i++) {
      const empty = document.createElement("div");
      empty.className = "cal-day empty";
      grid.appendChild(empty);
    }

    // Gerar dias
    for (let dia = 1; dia <= totalDias; dia++) {
      const dayEl = document.createElement("div");
      dayEl.className = "cal-day";
      dayEl.textContent = dia;

      const mesFmt = String(mesAtual + 1).padStart(2, '0');
      const diaFmt = String(dia).padStart(2, '0');
      const chaveData = `${anoAtual}-${mesFmt}-${diaFmt}`;

      const diaSemana = new Date(anoAtual, mesAtual, dia).getDay();

      if (datasEspeciais[chaveData]) {
        const info = datasEspeciais[chaveData];
        dayEl.classList.add(`status-${info.tipo}`);
        dayEl.onclick = () => mostrarDetalhesDia(chaveData, info.desc);
      } else if (diaSemana !== 0 && diaSemana !== 6) {
        dayEl.classList.add("status-letivo");
        dayEl.onclick = () => mostrarDetalhesDia(chaveData, "Dia Letivo Regular");
      }

      grid.appendChild(dayEl);
    }
  }

  function mostrarDetalhesDia(data, info) {
    const box = document.getElementById("dayDetailBox");
    const dateEl = document.getElementById("detailDate");
    const textEl = document.getElementById("detailText");

    const [a, m, d] = data.split("-");
    dateEl.textContent = `${d}/${m}/${a}`;
    textEl.textContent = info;
    box.classList.remove("hidden");
  }

  document.getElementById("calPrev").onclick = () => {
    if (mesAtual > 0) { mesAtual--; renderCalendario(); }
  };

  document.getElementById("calNext").onclick = () => {
    if (mesAtual < 11) { mesAtual++; renderCalendario(); }
  };

  renderCalendario();
});