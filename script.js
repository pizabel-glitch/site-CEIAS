// Lista de eventos e disciplinas
const eventsData = [
  {
    id: 1,
    title: "Feira de Projetos & Inovação",
    subject: "Artes e Biologia",
    teacher: "Profª. Izabel & Prof. Carlos",
    date: "2026-10-10",
    time: "09:00 - 17:00",
    category: "Especial",
    location: "Pátio Principal",
    description: "Apresentação dos trabalhos práticos desenvolvidos pelos alunos no bimestre."
  },
  {
    id: 2,
    title: "Aulão de Revisão Histórica",
    subject: "História",
    teacher: "Profª. Camila",
    date: "2026-10-15",
    time: "08:00 - 12:00",
    category: "Escolar",
    location: "Auditório",
    description: "Revisão sobre o contexto histórico nacional e preparação para avaliações."
  },
  {
    id: 3,
    title: "Oficina de Leitura e Redação",
    subject: "Língua Portuguesa",
    teacher: "Profª. Izabel",
    date: "2026-10-20",
    time: "08:00 - 11:30",
    category: "Cultura",
    location: "Biblioteca",
    description: "Atividade focada na interpretação de texto e estruturação dissertativa."
  }
];

let currentDate = new Date(2026, 9, 1);
let currentFilter = "Todos";
let selectedDateStr = null;

const monthYearText = document.getElementById("calendar-month-year");
const daysGrid = document.getElementById("calendar-days-grid");
const eventsList = document.getElementById("events-list");
const prevBtn = document.getElementById("prev-month");
const nextBtn = document.getElementById("next-month");
const filterBtns = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("event-modal");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");

function init() {
  renderCalendar();
  renderEvents();
  setupListeners();
}

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthName = currentDate.toLocaleDateString("pt-BR", { month: "long" });
  monthYearText.textContent = `${monthName} ${year}`;

  daysGrid.innerHTML = "";

  const firstDayIndex = new Date(year, month, 1).getDay();
  const lastDay = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDayIndex; i++) {
    const emptySpan = document.createElement("span");
    emptySpan.className = "day empty";
    daysGrid.appendChild(emptySpan);
  }

  for (let day = 1; day <= lastDay; day++) {
    const dayBtn = document.createElement("button");
    dayBtn.className = "day";
    dayBtn.textContent = day;

    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

    if (eventsData.some(e => e.date === dateStr)) {
      dayBtn.classList.add("has-event");
    }

    if (selectedDateStr === dateStr) {
      dayBtn.classList.add("selected");
    }

    dayBtn.addEventListener("click", () => {
      selectedDateStr = selectedDateStr === dateStr ? null : dateStr;
      renderCalendar();
      renderEvents();
    });

    daysGrid.appendChild(dayBtn);
  }
}

function renderEvents() {
  eventsList.innerHTML = "";

  let filtered = eventsData.filter(e => {
    const matchesCategory = currentFilter === "Todos" || e.category === currentFilter;
    const matchesDate = !selectedDateStr || e.date === selectedDateStr;
    return matchesCategory && matchesDate;
  });

  if (filtered.length === 0) {
    eventsList.innerHTML = `<p style="text-align:center; padding: 2rem;">Nenhuma atividade cadastrada para a seleção.</p>`;
    return;
  }

  filtered.forEach(event => {
    const [y, m, d] = event.date.split("-");
    const monthShort = new Date(y, m - 1, d).toLocaleDateString("pt-BR", { month: "short" }).replace(".", "");

    const card = document.createElement("article");
    card.className = "event-card";
    card.innerHTML = `
      <div class="event-date-badge">
        <span class="day-number">${d}</span>
        <span class="month-name">${monthShort}</span>
      </div>
      <div class="event-content">
        <div class="event-meta">
          <span class="category-badge" data-cat="${event.category}">${event.category}</span>
          <span style="font-size:0.8rem;">🕒 ${event.time}</span>
        </div>
        <h3 class="event-title">${event.title}</h3>
        <div class="event-info-tags">
          <span>📚 ${event.subject}</span>
          <span>👨‍🏫 ${event.teacher}</span>
        </div>
        <p class="event-description">${event.description}</p>
        <div class="event-footer">
          <span class="location-tag">📍 ${event.location}</span>
          <button class="btn-action" onclick="openModal(${event.id})">Detalhes</button>
        </div>
      </div>
    `;
    eventsList.appendChild(card);
  });
}

window.openModal = function(id) {
  const event = eventsData.find(e => e.id === id);
  if (!event) return;

  const [y, m, d] = event.date.split("-");

  modalContent.innerHTML = `
    <span class="category-badge" data-cat="${event.category}">${event.category}</span>
    <h2 style="font-size: 1.4rem; margin: 0.5rem 0;">${event.title}</h2>
    <p style="color: #2563eb; font-weight: 700;">📚 Matéria: ${event.subject}</p>
    <p style="color: #475569; font-weight: 600;">👨‍🏫 Professor: ${event.teacher}</p>
    <p style="margin-top: 0.5rem;"><strong>Data:</strong> ${d}/${m}/${y} das ${event.time}</p>
    <p><strong>Local:</strong> ${event.location}</p>
    <p style="margin-top: 1rem; line-height: 1.5;">${event.description}</p>
  `;
  modal.classList.add("active");
};

function setupListeners() {
  prevBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });

  nextBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });

  filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterBtns.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      currentFilter = e.target.getAttribute("data-filter");
      renderEvents();
    });
  });

  modalClose.addEventListener("click", () => modal.classList.remove("active"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });
}

init();