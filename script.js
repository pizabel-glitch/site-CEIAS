/* ==========================================================================
   VARIÁVEIS DE DESIGN & TEMA (Inspirado na paleta acessível de Camila)
   ========================================================================== */
:root {
  --primary: #1e3a8a;          /* Azul profundo acessível */
  --primary-light: #eff6ff;    /* Fundo leve azul */
  --accent: #2563eb;           /* Destaque azul vibrante */
  --accent-hover: #1d4ed8;
  --text-main: #0f172a;        /* Contraste alto para texto */
  --text-muted: #475569;       /* Subtítulos visíveis */
  --bg-card: #ffffff;
  --bg-section: #f8fafc;
  --border-color: #e2e8f0;
  
  --badge-fest-bg: #fef3c7;
  --badge-fest-text: #92400e;
  --badge-cultura-bg: #f3e8ff;
  --badge-cultura-text: #6b21a8;

  --radius-lg: 20px;
  --radius-md: 12px;
  --radius-sm: 8px;
  
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  
  --focus-ring: 3px solid #2563eb;
}

/* Suporte para High Contrast / Dark Mode caso prefira */
@media (prefers-contrast: high) {
  :root {
    --text-main: #000000;
    --text-muted: #1a1a1a;
    --border-color: #000000;
  }
}

/* ==========================================================================
   RESET & ESTILOS BASE
   ========================================================================== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  background-color: var(--bg-section);
  color: var(--text-main);
  line-height: 1.6;
}

/* Acessibilidade: Foco visível via teclado */
:focus-visible {
  outline: var(--focus-ring);
  outline-offset: 3px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
}

/* ==========================================================================
   CABEÇALHO DA SEÇÃO (Visual Camila)
   ========================================================================== */
.section-header {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 3.5rem auto;
}

.badge-tag {
  display: inline-block;
  background-color: var(--primary-light);
  color: var(--accent);
  font-weight: 700;
  font-size: 0.875rem;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  margin-bottom: 1rem;
  border: 1px solid rgba(37, 99, 235, 0.15);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-main);
  margin-bottom: 1rem;
}

.section-title .highlight {
  color: var(--accent);
}

.section-description {
  font-size: 1.125rem;
  color: var(--text-muted);
}

/* ==========================================================================
   LAYOUT GRID (Calendário Izabel + Estilo Camila)
   ========================================================================== */
.events-grid-layout {
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 2rem;
  align-items: start;
}

@media (max-width: 900px) {
  .events-grid-layout {
    grid-template-columns: 1fr;
  }
}

/* ==========================================================================
   COMPONENTE: CALENDÁRIO INTERATIVO
   ========================================================================== */
.calendar-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow-md);
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.calendar-month {
  font-size: 1.25rem;
  font-weight: 700;
}

.calendar-nav {
  display: flex;
  gap: 0.5rem;
}

.btn-icon {
  background: var(--primary-light);
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.btn-icon:hover {
  background: var(--accent);
  color: #fff;
}

.calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: 700;
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
}

.day {
  background: transparent;
  border: none;
  aspect-ratio: 1;
  border-radius: var(--radius-sm);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-main);
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.day:hover:not(.empty) {
  background: var(--primary-light);
  color: var(--accent);
}

.day.has-event {
  background: var(--primary-light);
  color: var(--accent);
  font-weight: 800;
}

.dot-indicator {
  width: 5px;
  height: 5px;
  background-color: var(--accent);
  border-radius: 50%;
  position: absolute;
  bottom: 4px;
}

/* ==========================================================================
   COMPONENTE: FILTROS & CARD DE EVENTOS
   ========================================================================== */
.filters-bar {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.filter-btn {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.2s;
}

.filter-btn.active, .filter-btn:hover {
  background: var(--accent);
  color: #ffffff;
  border-color: var(--accent);
}

.events-cards-container {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.event-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  display: flex;
  gap: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.event-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: rgba(37, 99, 235, 0.3);
}

/* Data Badge */
.event-date-badge {
  background: var(--primary-light);
  border-radius: var(--radius-md);
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 75px;
  text-align: center;
  height: fit-content;
}

.day-number {
  display: block;
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--accent);
  line-height: 1;
}

.month-name {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: 0.05em;
}

/* Conteúdo */
.event-content {
  flex: 1;
}

.event-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
}

.category-badge {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
}

.category-badge.fest {
  background: var(--badge-fest-bg);
  color: var(--badge-fest-text);
}

.category-badge.cultura {
  background: var(--badge-cultura-bg);
  color: var(--badge-cultura-text);
}

.event-time {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
}

.event-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-main);
}

.event-description {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.event-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.75rem;
  border-top: 1px dashed var(--border-color);
}

.location-tag {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
}

.btn-action {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--accent);
  font-weight: 700;
  font-size: 0.85rem;
  padding: 0.4rem 0.85rem;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s;
}

.btn-action:hover {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}

@media (max-width: 600px) {
  .event-card {
    flex-direction: column;
    gap: 1rem;
  }
  .event-date-badge {
    width: 100%;
    flex-direction: row;
    gap: 0.5rem;
  }
  .day-number, .month-name {
    display: inline;
  }
}