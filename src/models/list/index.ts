import { action, atom } from '@reatom/core';
import { withConcurrency } from '@reatom/effects';
import { sleep } from '@reatom/utils';

import { data } from './data.mock';

const dataAtom = atom(data);

export const searchAtom = atom('');
const searchDebouncedAtom = atom('');
export const setSearchAtom = action(async (ctx, value: string | null) => {
  searchAtom(ctx, value || '');
  await ctx.schedule(() => sleep(500));
  console.log(value);
  searchDebouncedAtom(ctx, value || '');
}).pipe(withConcurrency());

export const listAtom = atom((ctx) => {
  const search = ctx.spy(searchDebouncedAtom);

  console.log(search);

  const data = ctx.spy(dataAtom);
  return data.filter((item) =>
    item.label.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );
});
