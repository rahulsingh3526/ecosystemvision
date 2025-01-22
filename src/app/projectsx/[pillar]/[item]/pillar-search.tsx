import { Spinner } from '@heroui/spinner';

import { DraggableWrapper } from '@/shared/components/draggable-wrapper';
import { SearchIcon } from '@/shared/components/icons/sidebar-search-icon';

import { PillarLoadingWrapper } from './pillar-loading-wrapper';
import { PillarSearchInputItem } from './pillar-search-input-item';
import { LabeledItem } from './types';

interface Props {
  labeledItems: LabeledItem[];
}

export const PillarSearch = ({ labeledItems: items }: Props) => {
  return (
    <PillarLoadingWrapper>
      <div className="flex w-fit min-w-96 max-w-6xl items-center gap-2 rounded-xl bg-white/10 px-3 py-1">
        <div className="flex items-center gap-2">
          <PillarLoadingWrapper
            className="size-6"
            shouldReduceOpacity={false}
            loadingIcon={<Spinner size="sm" color="white" />}
          >
            <SearchIcon />
          </PillarLoadingWrapper>
          <p>{'<PillarSearchInput />'}</p>
        </div>

        {items.length > 0 && (
          <DraggableWrapper>
            <div className="flex items-center gap-x-4">
              {items.map((item) => (
                <PillarSearchInputItem key={item.label} item={item} />
              ))}
            </div>
          </DraggableWrapper>
        )}
      </div>
    </PillarLoadingWrapper>
  );
};
