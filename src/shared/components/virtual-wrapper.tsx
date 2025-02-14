'use client';

import { useRef } from 'react';

import { useVirtualizer } from '@tanstack/react-virtual';

const OVERSCAN = 5;
const ESTIMATE_SIZE = 500;

export const useVirtualWrapper = (count: number) => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const virtualizer = useVirtualizer({
    count,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ESTIMATE_SIZE,
    overscan: OVERSCAN,
    scrollMargin: parentRef.current?.offsetTop ?? 0,
    initialRect: {
      width: ESTIMATE_SIZE,
      height: ESTIMATE_SIZE * 20,
    },
  });
  const items = virtualizer.getVirtualItems();

  return { parentRef, virtualizer, items };
};

interface Props {
  count: number;
  children: (index: number) => JSX.Element;
}

export const VirtualWrapper = ({ count, children }: Props) => {
  const { parentRef, virtualizer, items } = useVirtualWrapper(count);

  const getTotalSize = virtualizer.getTotalSize();
  const translateY = items[0]
    ? items[0].start - virtualizer.options.scrollMargin
    : 0;

  return (
    <div ref={parentRef}>
      <div className="relative my-4 lg:my-8 mx-4 lg:mx-8" style={{ height: getTotalSize }}>
        <div
          className="absolute left-0 top-0 w-full"
          style={{ transform: `translateY(${translateY}px)` }}
        >
          {items.map((item) => (
            <div
              key={item.key}
              data-index={item.index}
              ref={virtualizer.measureElement}
            >
              {children(item.index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
