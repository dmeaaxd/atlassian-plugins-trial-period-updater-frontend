import './KeyCard.pcss';

import { PropsWithHTMLAttributesAndRef } from '@consta/uikit/__internal__/src/utils/types/PropsWithHTMLAttributes';
import { cnMixCard } from '@consta/uikit/MixCard';
import { cnMixFlex } from '@consta/uikit/MixFlex';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Spoiler } from '@consta/uikit/Spoiler';
import { Text } from '@consta/uikit/Text';
import { forwardRef } from 'react';

import { cn } from '##/utils';

import { KeyCardButton } from './KeyCardButton';

const cnKeyCard = cn('KeyCard');

type KeyCardProps = PropsWithHTMLAttributesAndRef<
  {
    label: string;
    content: string;
    imageUrl?: string;
  },
  HTMLDivElement
>;

export const KeyCard = forwardRef<HTMLDivElement, KeyCardProps>(
  ({ label, content, imageUrl }, ref) => {
    return (
      <div
        className={cnKeyCard(null, [
          cnMixCard({ border: true }),
          cnMixSpace({ p: 'l' }),
          cnMixFlex({ gap: 'l' }),
        ])}
        ref={ref}
      >
        <div className={cnKeyCard('Image', { noImage: !imageUrl })}>
          {imageUrl && <img src={imageUrl} alt={label} />}
        </div>
        <div className={cnKeyCard('Content')}>
          <Text
            size="l"
            weight="bold"
            as="h4"
            className={cnMixSpace({ mB: 'xs' })}
          >
            {label}
          </Text>

          <Spoiler
            className={cnKeyCard('Spoiler', [cnMixSpace({ pB: 'xs' })])}
            size="m"
            lineClamp={3}
          >
            {content}
          </Spoiler>
          <div className={cnMixFlex({ justify: 'flex-end' })}>
            <KeyCardButton copyText={content} />
          </div>
        </div>
      </div>
    );
  }
);
