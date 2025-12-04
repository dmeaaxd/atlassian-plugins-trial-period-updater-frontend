import './ListCard.pcss';

import { Grid, GridItem } from '@consta/uikit/Grid';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import { useAtom } from '@reatom/npm-react';

import { KeyCard } from '##/components/KeyCard';
import { listAtom } from '##/models/list';
import { viewAtom } from '##/models/view';
import { cn } from '##/utils';

const cnListCard = cn('ListCard');
export const ListCard = () => {
  const [list] = useAtom(listAtom);
  const [view] = useAtom(viewAtom);

  if (view === 'card') {
    return (
      <Grid
        breakpoints={{ 0: { cols: 1, gap: 'l' }, 1200: { cols: 2, gap: 'l' } }}
      >
        {list.map((item, i) => (
          <GridItem key={i}>
            <KeyCard label={item.label} content={item.content} />
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
