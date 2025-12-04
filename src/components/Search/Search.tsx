import { TextField } from '@consta/uikit/TextField';
import { useAction, useAtom } from '@reatom/npm-react';

import { searchAtom, setSearchAtom } from '##/models/list';

type SearchProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'defaultChecked' | 'defaultValue' | 'onChange' | 'children'
>;
export const Search = (props: SearchProps) => {
  const [search] = useAtom(searchAtom);
  const setSearch = useAction(setSearchAtom);
  return (
    <TextField value={search} onChange={setSearch} id="search" {...props} />
  );
};
