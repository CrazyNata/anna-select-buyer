import type { ReactNode } from 'react';
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Eye,
  MapPin,
  MessageCircle,
  PackageCheck,
  Search,
  Send,
  Sparkles,
  Star,
} from 'lucide-react';

const images = {
  boutique:
    'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1600&q=88',
  shopper:
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=88',
  portrait:
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=88',
  racks:
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=88',
  store:
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=88',
};

function ArrowCta({
  children,
  onClick,
  className = '',
}: {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button className={`site-arrow-cta ${className}`} onClick={onClick}>
      <span>{children}</span>
      <ArrowUpRight size={16} />
    </button>
  );
}

export function QuietLuxurySite({ onRequest }: { onRequest: () => void }) {
  return (
    <div className="quiet-site">
      <header className="quiet-header">
        <a className="quiet-brand" href="../">
          <span className="quiet-brand-mark">A</span>
          <span>ANNA SELECT</span>
        </a>
        <nav className="quiet-site-nav" aria-label="Основная навигация">
          <a href="#service">Сервис</a>
          <a href="#process">Как это работает</a>
          <a href="#contact">Контакт</a>
        </nav>
        <button className="quiet-header-action" onClick={onRequest}>Ваш запрос <ArrowUpRight size={15} /></button>
      </header>

      <main>
        <section className="quiet-hero" aria-labelledby="quiet-title">
          <div className="quiet-hero-copy">
            <p className="site-eyebrow">PERSONAL BUYER · PRAGUE</p>
            <h1 id="quiet-title">Вещи,<br /><em>которые</em><br />находят вас.</h1>
            <p className="quiet-hero-lead">Анна находит, проверяет и отправляет в Россию то, что хочется рассмотреть ближе.</p>
            <div className="quiet-hero-actions">
              <ArrowCta onClick={onRequest}>Найти мою вещь</ArrowCta>
              <span><ClockIcon /> Ответ в течение дня</span>
            </div>
          </div>
          <div className="quiet-hero-image">
            <img src={images.boutique} alt="Светлый интерьер бутика в Праге" />
            <span className="quiet-image-stamp">CURATED<br />IN PRAGUE</span>
            <div className="quiet-image-meta"><span>50.0875° N</span><span>14.4213° E</span></div>
          </div>
        </section>

        <div className="quiet-trust-line"><span>PRAGUE / RUSSIA</span><span>Масс-маркет · Люкс · Редкие находки</span><span>№ 01</span></div>

        <section className="quiet-service-section" id="service">
          <div className="quiet-section-heading">
            <p className="site-eyebrow">ЧТО ДЕЛАЕТ АННА</p>
            <h2>Личный человек<br /><em>на месте.</em></h2>
          </div>
          <div className="quiet-service-list">
            <div className="quiet-service-item"><span>01</span><div><strong>Найти</strong><p>Любой товар по ссылке, фото, артикулу или описанию.</p></div><ArrowUpRight size={17} /></div>
            <div className="quiet-service-item"><span>02</span><div><strong>Показать</strong><p>Анна идёт в магазин и снимает вещь для вас вживую.</p></div><ArrowUpRight size={17} /></div>
            <div className="quiet-service-item"><span>03</span><div><strong>Отправить</strong><p>Выкупает, аккуратно упаковывает и отправляет в Россию.</p></div><ArrowUpRight size={17} /></div>
          </div>
        </section>

        <section className="quiet-process" id="process">
          <div className="quiet-process-card">
            <p className="site-eyebrow">ПРОСТОЙ ПРОЦЕСС</p>
            <div className="quiet-process-steps">
              <div><span>01</span><strong>Ссылка</strong><p>Вы присылаете вещь, которая нужна.</p></div>
              <div><span>02</span><strong>Видео</strong><p>Анна проверяет наличие и показывает детали.</p></div>
              <div><span>03</span><strong>Выкуп</strong><p>После подтверждения — покупка и отправка.</p></div>
            </div>
          </div>
          <div className="quiet-process-quote"><span>“</span><p>Можно просто написать: «Ищу такое» — я разберусь.</p><small>АННА, PRAGUE</small></div>
        </section>

        <section className="quiet-cta" id="contact">
          <p className="site-eyebrow">READY WHEN YOU ARE</p>
          <h2>Начнём с<br /><em>вашей хотелки?</em></h2>
          <ArrowCta onClick={onRequest}>Отправить запрос</ArrowCta>
        </section>
      </main>

      <footer className="quiet-footer"><span>ANNA SELECT</span><span>Prague ↔ Russia</span><span>2026</span></footer>
    </div>
  );
}

function ClockIcon() {
  return <span className="clock-icon" aria-hidden="true">◷</span>;
}

export function MidnightAtelierSite({ onRequest }: { onRequest: () => void }) {
  return (
    <div className="midnight-site">
      <header className="midnight-header">
        <a className="midnight-brand" href="../">ANNA<span>·</span>SELECT</a>
        <nav aria-label="Основная навигация"><a href="#edit">The edit</a><a href="#steps">The process</a><a href="#contact">Contact</a></nav>
        <button className="midnight-header-cta" onClick={onRequest}>Start a search <ArrowUpRight size={15} /></button>
      </header>

      <main>
        <section className="midnight-hero" aria-labelledby="midnight-title">
          <img src={images.portrait} alt="Fashion-портрет для обложки сервиса" />
          <div className="midnight-hero-shade" />
          <div className="midnight-hero-top"><span>PRAGUE / 50°05′N</span><span>PRIVATE SHOPPING SERVICE</span></div>
          <div className="midnight-hero-copy">
            <p className="midnight-eyebrow">YOUR EYES IN EUROPE</p>
            <h1 id="midnight-title">Нужна вещь?<br /><em>Я найду.</em></h1>
            <p>Персональный байер в Праге для тех, кто ценит время, детали и живой взгляд перед покупкой.</p>
            <ArrowCta onClick={onRequest} className="midnight-light-button">Поговорить с Анной</ArrowCta>
          </div>
          <div className="midnight-hero-index">02<span>/06</span></div>
          <div className="midnight-scroll"><ArrowDown size={15} /> Scroll to edit</div>
        </section>

        <section className="midnight-edit" id="edit">
          <div className="midnight-edit-intro"><p className="midnight-eyebrow">THE EDIT</p><h2>Вы присылаете<br /><span>направление.</span></h2><p>Анна превращает ссылку, скриншот или идею в конкретную покупку.</p></div>
          <div className="midnight-edit-grid">
            <div className="midnight-edit-card"><span className="edit-card-number">01</span><Search size={21} /><strong>Найду</strong><p>Искомый товар в нужном магазине.</p></div>
            <div className="midnight-edit-card midnight-edit-card-image"><img src={images.store} alt="Магазин в Праге" /><span>ON THE SHOP FLOOR</span></div>
            <div className="midnight-edit-card"><span className="edit-card-number">02</span><Eye size={21} /><strong>Покажу</strong><p>Сниму посадку, цвет и детали вживую.</p></div>
            <div className="midnight-edit-card midnight-edit-card-accent"><span className="edit-card-number">03</span><Send size={21} /><strong>Отправлю</strong><p>Организую выкуп и доставку в Россию.</p></div>
          </div>
        </section>

        <section className="midnight-steps" id="steps">
          <div className="midnight-step-heading"><span>PROCESS / 03</span><h2>Nothing<br /><em>complicated.</em></h2></div>
          <div className="midnight-step-list"><div><span>01</span><p>Ссылка или фото</p><ArrowRight size={15} /></div><div><span>02</span><p>Живое видео из магазина</p><ArrowRight size={15} /></div><div><span>03</span><p>Выкуп и отправка</p><ArrowRight size={15} /></div></div>
        </section>

        <section className="midnight-contact" id="contact"><div><p className="midnight-eyebrow">OPEN FOR REQUESTS</p><h2>Send me<br /><em>the thing.</em></h2></div><ArrowCta onClick={onRequest} className="midnight-light-button">Отправить запрос <ArrowUpRight size={15} /></ArrowCta></section>
      </main>

      <footer className="midnight-footer"><span>ANNA SELECT / PRAGUE</span><span>Mass market / Luxury / One request at a time</span><span>© 2026</span></footer>
    </div>
  );
}

export function PraguePostcardSite({ onRequest }: { onRequest: () => void }) {
  return (
    <div className="postcard-site">
      <aside className="postcard-rail">
        <a className="postcard-rail-brand" href="../">A<br /><span>BUYER</span></a>
        <div className="postcard-rail-middle"><span className="postcard-vertical">A PERSONAL SHOPPING LETTER FROM PRAGUE</span><strong>Praha</strong></div>
        <span className="postcard-rail-number">03 / 06</span>
      </aside>
      <div className="postcard-page">
        <header className="postcard-header"><span>FROM PRAGUE WITH CARE</span><nav><a href="#service">Service</a><a href="#steps">How it works</a></nav><button onClick={onRequest} aria-label="Открыть запрос"><MessageCircle size={18} /></button></header>
        <main>
          <section className="postcard-hero" aria-labelledby="postcard-title">
            <p className="postcard-eyebrow">БАЙЕР, КОТОРОМУ МОЖНО НАПИСАТЬ</p>
            <h1 id="postcard-title">Ваш человек<br /><em>в Праге.</em></h1>
            <p className="postcard-hero-lead">Анна зайдёт в магазин вместо вас, снимет всё на видео и выкупит нужное — от базовых вещей до знаковых покупок.</p>
            <div className="postcard-hero-actions"><ArrowCta onClick={onRequest} className="postcard-blue-button">Написать Анне</ArrowCta><span>Любой магазин по запросу <ArrowDownRight size={14} /></span></div>
          </section>

          <section className="postcard-feature-grid" id="service">
            <div className="postcard-photo postcard-photo-large"><img src={images.shopper} alt="Шопинг в европейском городе" /><span>LOOK AROUND</span></div>
            <div className="postcard-blue-tile"><span>ЧТО МОЖНО</span><strong>Любой<br />товар<br />по запросу.</strong><ArrowRight size={17} /></div>
            <div className="postcard-photo postcard-photo-small"><img src={images.racks} alt="Одежда на рейле" /></div>
            <div className="postcard-note-tile"><span>ЗАПИСКА № 03</span><p>Ссылка, фото, артикул или просто «хочу такое».</p></div>
          </section>

          <section className="postcard-steps" id="steps"><div className="postcard-step-title"><p className="postcard-eyebrow">КАК ЭТО РАБОТАЕТ</p><h2>Три шага<br /><em>до находки.</em></h2></div><div className="postcard-step-list"><div><span>01</span><strong>Ищем</strong><p>Вы присылаете идею или ссылку.</p></div><div><span>02</span><strong>Проверяем</strong><p>Анна идёт в магазин и показывает товар.</p></div><div><span>03</span><strong>Отправляем</strong><p>Выкуп, упаковка и путь в Россию.</p></div></div></section>

          <section className="postcard-bottom-cta"><span>POSTCARD FROM PRAGUE / 2026</span><h2>Прислать<br /><em>хотелку?</em></h2><ArrowCta onClick={onRequest} className="postcard-outline-button">Отправить запрос</ArrowCta></section>
        </main>
        <footer className="postcard-footer"><span>ANNA / BUYER</span><span>Prague → Russia</span><span>03</span></footer>
      </div>
    </div>
  );
}

export function AcidStreetSite({ onRequest }: { onRequest: () => void }) {
  return (
    <div className="acid-site">
      <div className="acid-ticker"><span>BUY · SHOW · SEND · BUY · SHOW · SEND · BUY · SHOW · SEND · </span><span>BUY · SHOW · SEND · BUY · SHOW · SEND · BUY · SHOW · SEND · </span></div>
      <header className="acid-header"><a className="acid-logo" href="../">A<span>!</span></a><nav><a href="#service">01 — Request</a><a href="#show">02 — Show</a><a href="#send">03 — Send</a></nav><button onClick={onRequest}>Start a search <ArrowUpRight size={16} /></button></header>
      <main>
        <section className="acid-hero" aria-labelledby="acid-title"><div className="acid-hero-copy"><p className="acid-eyebrow">YOUR EYES IN PRAGUE</p><h1 id="acid-title">Не ищи.<br /><span>Поручи.</span></h1><p>Ты кидаешь ссылку. Анна идёт, снимает, проверяет, выкупает.</p><button className="acid-yellow-button" onClick={onRequest}>Хочу вещь <ArrowUpRight size={18} /></button></div><div className="acid-hero-media"><img src={images.store} alt="Витрина магазина в Праге" /><span>LIVE FROM PRAGUE</span><b>04<br /><small>/06</small></b></div></section>
        <section className="acid-stats" id="service"><div><strong>01</strong><span>Ты кидаешь<br /><b>ссылку или фото</b></span></div><div><strong>02</strong><span>Анна показывает<br /><b>вещь вживую</b></span></div><div><strong>03</strong><span>Ты подтверждаешь<br /><b>и получаешь</b></span></div></section>
        <section className="acid-show" id="show"><div className="acid-show-title"><p className="acid-eyebrow">NO GUESSING</p><h2>Посмотри<br /><span>до покупки.</span></h2></div><div className="acid-show-card"><img src={images.racks} alt="Одежда в магазине" /><div><span>VIDEO CHECK / 02:14</span><strong>Цвет.<br />Размер.<br />Посадка.</strong><ArrowRight size={19} /></div></div></section>
        <section className="acid-send" id="send"><div className="acid-send-copy"><p className="acid-eyebrow">MASS MARKET + LUXURY</p><h2>Любой магазин.<br /><span>Одно сообщение.</span></h2><p>Напиши, что ищешь. Остальное — на Анне.</p></div><ArrowCta onClick={onRequest} className="acid-dark-button">Написать Анне</ArrowCta></section>
      </main>
      <footer className="acid-footer"><span>ANNA SELECT / PRAGUE↔RUSSIA</span><span>STAY CURIOUS <Sparkles size={13} /></span><span>© 2026</span></footer>
    </div>
  );
}

export function GallerySite({ onRequest }: { onRequest: () => void }) {
  return (
    <div className="gallery-site">
      <header className="gallery-header"><a href="../" className="gallery-logo">ANNA<span>·</span>BUYER</a><div className="gallery-location"><MapPin size={13} /> Prague, CZ</div><nav><a href="#offer">What I do</a><a href="#process">Process</a><a href="#contact">Request</a></nav><button onClick={onRequest} aria-label="Открыть запрос"><ArrowUpRight size={18} /></button></header>
      <main>
        <section className="gallery-hero" aria-labelledby="gallery-title"><div className="gallery-photo"><img src={images.boutique} alt="Светлый магазин в Праге" /><div className="gallery-photo-note"><span>FIELD NOTE / 05</span><strong>Seen.<br />Selected.<br />Sent.</strong></div><span className="gallery-photo-caption">A shop floor in Prague — 10:42</span></div><div className="gallery-hero-copy"><span className="gallery-index">05 / 06</span><p className="gallery-eyebrow">PERSONAL SHOPPING, EDITED</p><h1 id="gallery-title">Найдём<br /><em>ваше.</em></h1><p>Ссылка, артикул или фото — Анна проверит наличие, зайдёт в магазин и пришлёт живые кадры перед покупкой.</p><ArrowCta onClick={onRequest} className="gallery-outline-button">Отправить ссылку</ArrowCta><small>Anna / Prague ↔ Russia</small></div></section>
        <section className="gallery-offer" id="offer"><div><span>01</span><h2>Search</h2><p>Любая марка и любой товар по запросу.</p></div><div><span>02</span><h2>Show</h2><p>Фото и видео из магазина, чтобы видеть вещь честно.</p></div><div><span>03</span><h2>Ship</h2><p>Выкуп и отправка в Россию после подтверждения.</p></div></section>
        <section className="gallery-process" id="process"><div className="gallery-process-title"><p className="gallery-eyebrow">THE SIMPLE EDIT</p><h2>От идеи<br /><em>до двери.</em></h2></div><div className="gallery-process-list"><div><span>01</span><p>Пришлите ссылку или фото</p><Check size={15} /></div><div><span>02</span><p>Получите наличие и видео</p><Check size={15} /></div><div><span>03</span><p>Подтвердите выкуп</p><Check size={15} /></div></div></section>
        <section className="gallery-contact" id="contact"><div><span>READY TO LOOK?</span><h2>Ваша следующая<br /><em>находка — здесь.</em></h2></div><ArrowCta onClick={onRequest} className="gallery-white-button">Сделать запрос</ArrowCta></section>
      </main>
      <footer className="gallery-footer"><span>ANNA·BUYER</span><span>Prague — Russia</span><span>© 2026</span></footer>
    </div>
  );
}

export function PlayfulSelectSite({ onRequest }: { onRequest: () => void }) {
  return (
    <div className="playful-site">
      <header className="playful-header"><a href="../" className="playful-logo"><span className="playful-logo-star">✦</span><strong>anna select</strong></a><nav><a href="#why">Зачем байер</a><a href="#how">Как это работает</a><a href="#faq">FAQ</a></nav><button onClick={onRequest}>Найти вещь <ArrowUpRight size={16} /></button></header>
      <main>
        <section className="playful-hero" aria-labelledby="playful-title"><div className="playful-hero-copy"><div className="playful-pill">ПЕРСОНАЛЬНЫЙ БАЙЕР В ПРАГЕ</div><h1 id="playful-title">Хочу это.<br /><span>Анна найдёт.</span></h1><p>Масс-маркет, люкс и всё между ними — с живой проверкой в магазине и отправкой в Россию.</p><button className="playful-primary" onClick={onRequest}>Отправить ссылку <ArrowUpRight size={17} /></button><div className="playful-hero-foot"><span><Star size={14} fill="currentColor" /> По-человечески</span><span><MapPin size={14} /> Praha → RU</span></div></div><div className="playful-hero-art"><div className="playful-orbit" /><div className="playful-photo"><img src={images.shopper} alt="Шопинг в Праге" /></div><div className="playful-sticker playful-sticker-purple">show<br />me</div><div className="playful-sticker playful-sticker-yellow">any<br />thing!</div></div></section>
        <section className="playful-why" id="why"><div className="playful-section-title"><span>01</span><h2>Почему это<br /><em>удобно?</em></h2></div><div className="playful-why-grid"><div><span className="playful-icon purple"><Search size={20} /></span><h3>Найти редкое</h3><p>Если на сайте нет — проверим магазин.</p></div><div><span className="playful-icon yellow"><Eye size={20} /></span><h3>Увидеть вживую</h3><p>Видео и фото до того, как вы решите.</p></div><div><span className="playful-icon pink"><PackageCheck size={20} /></span><h3>Получить спокойно</h3><p>Выкуп и отправка в одной переписке.</p></div></div></section>
        <section className="playful-how" id="how"><div className="playful-how-image"><img src={images.racks} alt="Вещи на рейле в магазине" /><span>ANNA IS LOOKING</span></div><div className="playful-how-copy"><span className="playful-label">02 / КАК ЭТО РАБОТАЕТ</span><h2>Три простых<br /><span>сообщения.</span></h2><div className="playful-how-steps"><div><b>01</b><p>«Анна, хочу вот это» + ссылка</p></div><div><b>02</b><p>«Покажи, пожалуйста» — и она в магазине</p></div><div><b>03</b><p>«Беру» — дальше всё организуем</p></div></div><button className="playful-text-button" onClick={onRequest}>Начать переписку <ArrowRight size={16} /></button></div></section>
        <section className="playful-faq" id="faq"><div><span className="playful-label">03 / ВОПРОСЫ</span><h2>Можно<br /><em>спросить.</em></h2></div><div className="playful-faq-list"><details open><summary>Можно найти любой товар? <ChevronDown size={17} /></summary><p>Да — пришлите ссылку, фото, артикул или описание. Анна проверит, что реально найти в Праге.</p></details><details><summary>А если нужен другой размер? <ChevronDown size={17} /></summary><p>Анна уточнит наличие и покажет варианты в магазине.</p></details><details><summary>Отправляете в Россию? <ChevronDown size={17} /></summary><p>Да, способ и стоимость доставки обсуждаем отдельно после подтверждения покупки.</p></details></div></section>
        <section className="playful-cta"><div className="playful-cta-shape">✦</div><p className="playful-label">READY?</p><h2>Пришлите<br /><span>хотелку.</span></h2><button className="playful-primary playful-primary-dark" onClick={onRequest}>Найти мою вещь <ArrowUpRight size={17} /></button></section>
      </main>
      <footer className="playful-footer"><span>✦ anna select</span><span>Prague / Russia</span><span>Made with care · 2026</span></footer>
    </div>
  );
}
