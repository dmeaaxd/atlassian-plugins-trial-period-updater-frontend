import { AnimateIconSwitcherProvider } from '@consta/icons/AnimateIconSwitcherProvider';
import { IconAllDone } from '@consta/icons/IconAllDone';
import { IconCopy } from '@consta/icons/IconCopy';
import { withAnimateSwitcherHOC } from '@consta/icons/withAnimateSwitcherHOC';
import { useCreateAtom } from '@consta/uikit/__internal__/src/utils/state/useCreateAtom';
import { Button } from '@consta/uikit/Button';
import { action } from '@reatom/core';
import { withConcurrency } from '@reatom/effects';
import { useAction, useAtom } from '@reatom/npm-react';
import { sleep } from '@reatom/utils';

type KeyCardButtonProps = Omit<
  React.HTMLAttributes<HTMLButtonElement>,
  'defaultChecked' | 'defaultValue' | 'children'
> & {
  copyText: string;
};

const AnimateIcon = withAnimateSwitcherHOC({
  startIcon: IconCopy,
  endIcon: IconAllDone,
  // transition: 200,
});

export const KeyCardButton = ({ copyText }: KeyCardButtonProps) => {
  const copiedAtom = useCreateAtom(false);

  const copyToClipboard = useAction(
    action(async (ctx) => {
      navigator.clipboard.writeText(copyText);
      copiedAtom(ctx, true);
      await ctx.schedule(() => sleep(500));
      copiedAtom(ctx, false);
    }).pipe(withConcurrency())
  );

  const [active] = useAtom(copiedAtom);

  return (
    <AnimateIconSwitcherProvider active={active}>
      <Button
        label="Скопировать"
        iconLeft={AnimateIcon}
        view="ghost"
        onClick={copyToClipboard}
      />
    </AnimateIconSwitcherProvider>
  );
};
