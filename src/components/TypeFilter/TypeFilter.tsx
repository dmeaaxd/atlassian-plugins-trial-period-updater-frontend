import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
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

  const current = typeItems.find((item) => item.value === typeFilter) ?? null;

  return (
    <ChoiceGroup
      name="type-filter"
      items={typeItems}
      value={current}
      onChange={(item) => setTypeFilter(item.value)}
      getItemLabel={(item) => item.label}
      size="m"
      view="primary"
      form="default"
    />
  );
};
