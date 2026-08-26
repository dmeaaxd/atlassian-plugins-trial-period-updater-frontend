import './MainPage.pcss';

import { cnMixFlex } from '@consta/uikit/MixFlex';
import { cnMixSpace } from '@consta/uikit/MixSpace';

import { ListCard } from '##/components/ListCard';
import { Search } from '##/components/Search';
import { TypeFilter } from '##/components/TypeFilter';
import { ViewToggle } from '##/components/ViewToggle';
import { cn } from '##/utils';

const cnMainPage = cn('MainPage');

export const MainPage = () => {
  return (
    <div className={cnMixSpace({ p: '4xl', pT: 'xl' })}>
      <div
        className={cnMainPage('Controls', [
          cnMixSpace({ mB: 'xl', pB: 'm', pT: 'm' }),
          cnMixFlex({ gap: 's' }),
        ])}
      >
        <Search />
        <TypeFilter />
        <ViewToggle />
      </div>

      <ListCard />
    </div>
  );
};
