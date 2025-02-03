import { PillarRowItem } from '@/search/core/types';
import { formatPillarName } from '@/search/utils/format-pillar-name';

import { PillarItem } from './pillar-item';
import { PillarLoadingWrapper } from './pillar-loading-wrapper';

interface Props {
  nav: string;
  pillar: string;
  pillarItems: PillarRowItem[];
  dropdownContent: React.ReactNode;
  hidePillar?: boolean;
}

export const PillarRow = (props: Props) => {
  const { nav, pillar, pillarItems, dropdownContent, hidePillar } = props;

  return (
    <PillarLoadingWrapper>
      <div className="flex flex-col gap-1">
        {!hidePillar && (
          <div className="text-accent2/90 pl-2 text-13 uppercase">
            <span>{formatPillarName(pillar, nav)}</span>
          </div>
        )}
        <div className="relative flex h-14 gap-4 overflow-hidden p-1">
          <div className="flex max-w-fit flex-wrap gap-4">
            {pillarItems.map(({ label, href, isActive }) => (
              <PillarItem
                key={label}
                isActive={isActive}
                pillar={pillar}
                label={label}
                href={href}
              />
            ))}
          </div>

          <div className="shrink-0 grow justify-end">{dropdownContent}</div>
        </div>
      </div>
    </PillarLoadingWrapper>
  );
};
