import { Tabs } from '@consta/uikit/Tabs';
import { useAction, useAtom } from '@reatom/npm-react';

import { setTypeFilterAction, typeFilterAtom } from '##/models/list';

const typeItems = [
  { label: 'Все', value: 'ALL' },
  { label: 'Jira', value: 'JIRA' },
  { label: 'Confluence', value: 'CONFLUENCE' },
];

export const TypeFilter = () => {
  const [typeFilter] = useAtom(typeFilterAtom);
  const setTypeFilter = useAction(setTypeFilterAction);

  const current = typeItems.find((item) => item.value === typeFilter) ?? typeItems[0];

  return (
    <Tabs
      items={typeItems}
      value={current}
      onChange={(item) => setTypeFilter(String(item.value))}
      size="s"
    />
  );
};
