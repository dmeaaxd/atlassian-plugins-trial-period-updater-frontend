import './ListCard.pcss';

import { Grid, GridItem } from '@consta/uikit/Grid';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import { useAction, useAtom } from '@reatom/npm-react';
import { useEffect } from 'react';

import { KeyCard } from '##/components/KeyCard';
import { listAtom, loadingAtom, loadPluginsAction } from '##/models/list';
import { viewAtom } from '##/models/view';
import { cn } from '##/utils';

const cnListCard = cn('ListCard');
export const ListCard = () => {
  const [list] = useAtom(listAtom);
  const [loading] = useAtom(loadingAtom);
  const [view] = useAtom(viewAtom);
  const loadPlugins = useAction(loadPluginsAction);

  useEffect(() => {
    loadPlugins();
  }, [loadPlugins]);

  if (loading && list.length === 0) {
    return <Text size="l">Загрузка...</Text>;
  }

  if (view === 'card') {
    return (
      <Grid
        breakpoints={{ 0: { cols: 1, gap: 'l' }, 1200: { cols: 2, gap: 'l' } }}
      >
        {list.map((item, i) => (
          <GridItem key={i}>
            <KeyCard
              label={item.label}
              content={item.content}
              imageUrl={item.imageUrl}
            />
          </GridItem>
        ))}
      </Grid>
    );
  }

  return (
    <div>
      {list.map((item, i) => (
        <div key={i}>
          <Text
            className={cnListCard('Text', [cnMixSpace({ mB: 'xs' })])}
            size="l"
            weight="bold"
            lineHeight="m"
          >
            {item.label}
          </Text>
          <Text
            className={cnListCard('Text', [cnMixSpace({ mB: 'l' })])}
            size="s"
            lineHeight="m"
            view="secondary"
          >
            {item.content}
          </Text>
        </div>
      ))}
    </div>
  );
};
