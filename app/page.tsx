const routes = [
  { href: './quiet-luxury/', number: '01', title: 'Quiet luxury', note: 'Тёплый editorial для мягкого, персонального сервиса.', system: 'Claude', color: 'card-coral', image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=82' },
  { href: './midnight-atelier/', number: '02', title: 'Midnight atelier', note: 'Тёмный кинематографичный вариант с full-bleed hero.', system: 'Runway', color: 'card-black', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=82' },
  { href: './prague-postcard/', number: '03', title: 'Prague postcard', note: 'Городская открытка с асимметричной сеткой и письмом.', system: "Nothin'", color: 'card-blue', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=82' },
  { href: './acid-street/', number: '04', title: 'Acid street', note: 'Смелый mobile-first лейаут для быстрой переписки.', system: 'Binance', color: 'card-yellow', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=82' },
  { href: './the-gallery/', number: '05', title: 'The gallery', note: 'Строгая fashion-галерея с чёрно-белой иерархией.', system: 'Vercel', color: 'card-white', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=82' },
  { href: './playful-select/', number: '06', title: 'Playful select', note: 'Дружелюбный фиолетовый вариант с FAQ и карточками.', system: 'Canva', color: 'card-purple', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=82' },
];

export default function Home() {
  return (
    <main className="index-page">
      <header className="index-header">
        <a className="index-brand" href="./"><span>A</span><strong>ANNA SELECT</strong></a>
        <span className="index-meta">06 independent directions / Prague → Russia</span>
        <span className="index-meta index-meta-right">DesignMD moodboard</span>
      </header>
      <section className="index-intro">
        <p className="index-kicker">PERSONAL BUYER · PRAGUE</p>
        <h1>Шесть сайтов.<br /><em>Одна Анна.</em></h1>
        <p>Выберите направление для байера, который находит любую вещь, показывает её в магазине и отправляет в Россию.</p>
      </section>
      <section className="site-grid" aria-label="Шесть вариантов сайта">
        {routes.map((route) => (
          <a key={route.href} href={route.href} className={`site-card ${route.color}`}>
            <div className="site-card-image"><img src={route.image} alt="" /><span>{route.number}</span><span className="site-card-arrow">↗</span></div>
            <div className="site-card-copy"><div><strong>{route.title}</strong><small>{route.note}</small></div><span className="site-card-system">{route.system}</span></div>
          </a>
        ))}
      </section>
      <footer className="index-footer"><span>ANNA SELECT / ART DIRECTION BOARD</span><span>В каждом варианте есть форма запроса</span><span>2026</span></footer>
    </main>
  );
}
