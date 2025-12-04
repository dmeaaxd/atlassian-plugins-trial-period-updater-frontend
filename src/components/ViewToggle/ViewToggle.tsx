import { IconCardsCompact } from '@consta/icons/IconCardsCompact';
import { IconHamburger } from '@consta/icons/IconHamburger';
import { Button } from '@consta/uikit/Button';
import { useAction, useAtom } from '@reatom/npm-react';

import { toggleViewAction, viewAtom } from '##/models/view';

export const ViewToggle = () => {
  const [view] = useAtom(viewAtom);
  const toggleView = useAction(toggleViewAction);
  return (
    <Button
      onClick={toggleView}
      view="ghost"
      iconLeft={view === 'card' ? IconHamburger : IconCardsCompact}
      label={view === 'card' ? 'Текстовый вид' : 'Карточный вид'}
    />
  );
};
