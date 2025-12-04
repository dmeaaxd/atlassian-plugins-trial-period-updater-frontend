import { action, atom } from '@reatom/core';

export const viewAtom = atom<'card' | 'list'>('card');

export const toggleViewAction = action((ctx) => {
  viewAtom(ctx, ctx.get(viewAtom) === 'card' ? 'list' : 'card');
});
