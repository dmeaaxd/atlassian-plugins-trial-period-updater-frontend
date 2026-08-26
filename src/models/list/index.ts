import { action, atom } from '@reatom/core';
import { withConcurrency } from '@reatom/effects';
import { sleep } from '@reatom/utils';

type Plugin = {
  label: string;
  content: string;
  imageUrl?: string;
  type: string;
};

type PluginResponse = {
  name: string;
  type: string;
  image_hard_path: string;
  api_key: string;
};

const dataAtom = atom<Plugin[]>([]);
export const loadingAtom = atom(false);

// Адрес бека из env (запекается при сборке). Пусто — запросы к своему origin
// (dev-прокси), иначе — напрямую к беку.
const backendUrl = import.meta.env.VITE_BACKEND_URL ?? '';

const toImageUrl = (path: string): string =>
  /^https?:\/\//.test(path) ? path : `${backendUrl}${path}`;

export const loadPluginsAction = action(async (ctx) => {
  loadingAtom(ctx, true);
  try {
    const response = await ctx.schedule(() => fetch(`${backendUrl}/keys`));
    const plugins: PluginResponse[] = await response.json();
    dataAtom(
      ctx,
      plugins.map((plugin) => ({
        label: plugin.name,
        content: plugin.api_key,
        imageUrl: toImageUrl(plugin.image_hard_path),
        type: plugin.type,
      }))
    );
  } finally {
    loadingAtom(ctx, false);
  }
}).pipe(withConcurrency());

export const searchAtom = atom('');
const searchDebouncedAtom = atom('');
export const setSearchAtom = action(async (ctx, value: string | null) => {
  searchAtom(ctx, value || '');
  await ctx.schedule(() => sleep(500));
  searchDebouncedAtom(ctx, value || '');
}).pipe(withConcurrency());

export const typeFilterAtom = atom<string>('ALL');

export const setTypeFilterAction = action((ctx, value: string) => {
  typeFilterAtom(ctx, value);
});

export const listAtom = atom((ctx) => {
  const search = ctx.spy(searchDebouncedAtom);
  const typeFilter = ctx.spy(typeFilterAtom);

  const data = ctx.spy(dataAtom);
  return data.filter(
    (item) =>
      item.label.toLocaleLowerCase().includes(search.toLocaleLowerCase()) &&
      (typeFilter === 'ALL' || item.type.toUpperCase() === typeFilter)
  );
});
