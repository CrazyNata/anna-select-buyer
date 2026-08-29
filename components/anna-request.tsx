'use client';

import { useState } from 'react';
import { ArrowUpRight, Check, MessageCircle, Send, X } from 'lucide-react';

export type SiteTheme = 'quiet' | 'midnight' | 'postcard' | 'acid' | 'gallery' | 'playful';

export function RequestModal({
  open,
  onClose,
  theme,
}: {
  open: boolean;
  onClose: () => void;
  theme: SiteTheme;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!open) return null;

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const copyTemplate = async () => {
    const template = 'Привет, Анна! Хочу найти: [ссылка / фото / артикул]. Размер: __. Бюджет: __.';
    try {
      await navigator.clipboard.writeText(template);
    } catch {
      // Clipboard permissions are optional for this front-end concept.
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <dialog open className={`request-overlay request-overlay-${theme}`} aria-labelledby="request-title">
      <button className="request-backdrop" onClick={onClose} aria-label="Закрыть форму" />
      <div className="request-modal">
        <button className="request-close" onClick={onClose} aria-label="Закрыть">
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <p className="request-eyebrow">ANNA / SELECT</p>
            <h2 id="request-title">Что найдём<br /><i>для вас?</i></h2>
            <p className="request-lead">Пришлите ссылку, фото или просто опишите вещь. Анна проверит наличие и вернётся с деталями.</p>
            <form onSubmit={handleSubmit} className="request-form">
              <label>
                Что ищем?
                <textarea required placeholder="Например: жакет, артикул или ссылка на товар" rows={3} />
              </label>
              <div className="request-form-row">
                <label>
                  Размер
                  <input placeholder="S / 38 / one size" />
                </label>
                <label>
                  Бюджет
                  <input placeholder="€ или ₽" />
                </label>
              </div>
              <button className="request-submit" type="submit">Подготовить запрос <Send size={16} /></button>
            </form>
            <button className="copy-template" onClick={copyTemplate}>
              {copied ? <Check size={14} /> : <MessageCircle size={14} />}
              {copied ? 'Шаблон скопирован' : 'Скопировать шаблон сообщения'}
            </button>
          </>
        ) : (
          <div className="request-success">
            <span className="success-icon"><Check size={22} /></span>
            <p className="request-eyebrow">ГОТОВО К ОТПРАВКЕ</p>
            <h2 id="request-title">Запрос<br /><i>собран.</i></h2>
            <p>Осталось отправить его Анне в удобном мессенджере — она вернётся с наличием, видео и точной стоимостью.</p>
            <button className="request-submit" onClick={onClose}>Понятно <ArrowUpRight size={16} /></button>
          </div>
        )}
      </div>
    </dialog>
  );
}
