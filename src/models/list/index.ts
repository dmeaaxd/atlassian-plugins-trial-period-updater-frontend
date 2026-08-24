import { action, atom } from '@reatom/core';
import { withConcurrency } from '@reatom/effects';
import { sleep } from '@reatom/utils';

type Plugin = {
  label: string;
  content: string;
  imageUrl?: string;
};

type PluginResponse = {
  name: string;
  type: string;
  image_hard_path: string;
  api_key: string;
};

const dataAtom = atom<Plugin[]>([]);
export const loadingAtom = atom(false);

export const loadPluginsAction = action(async (ctx) => {
  loadingAtom(ctx, true);
  try {
    const response = await ctx.schedule(() => fetch('/keys'));
    const plugins: PluginResponse[] = await response.json();
    dataAtom(
      ctx,
      plugins.map((plugin) => ({
        label: plugin.name,
        content: plugin.api_key,
        imageUrl: plugin.image_hard_path,
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

export const listAtom = atom((ctx) => {
  const search = ctx.spy(searchDebouncedAtom);

  const data = ctx.spy(dataAtom);
  return data.filter((item) =>
    item.label.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );
});
