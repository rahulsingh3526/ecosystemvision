import { Fragment } from 'react';

import { Skeleton } from '@heroui/skeleton';

import { Divider } from '@/shared/components/divider';

import { SearchResultLayout } from '@/search/components/search-result';

export const SearchResultsSkeleton = () => {
  return (
    <div className="flex flex-col gap-8 px-2 pb-8  md:px-8 lg:pl-12">
      <div className='glow-background top-0 lg:w-[calc(100vw-236px)]'></div>
      <div className='bg-gradient-to-r top-0 from-[#070708] to-[#101012] h-screen fixed left-[236px] z-[999] w-6'></div>
      {Array.from({ length: 5 }).map((_, i) => (
        <Fragment key={i}>
          <Divider />
          <SearchResultLayout
            label={<Skeleton className="h-5 w-20 rounded-md" />}
            items={
              <>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-9 w-40 rounded-lg" />
                ))}
              </>
            }
          />
        </Fragment>
      ))}
    </div>
  );
};
