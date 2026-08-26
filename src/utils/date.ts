// Дата по МСК (UTC+3) — только число
export const fmtDate = (value: string): string =>
  new Date(value + 'Z').toLocaleDateString('ru-RU', { timeZone: 'Europe/Moscow' });
