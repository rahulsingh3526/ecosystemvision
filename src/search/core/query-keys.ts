import { GetPillarInfoProps, GetPillarItemsProps } from '@/search/core/types';

export const searchQueryKeys = {
  all: ['search'] as const,
  search: (query: string) => [...searchQueryKeys.all, 'search', query] as const,
  getPillarItems: (props: GetPillarItemsProps) =>
    [...searchQueryKeys.all, 'pillar-items', props] as const,
  getPillarInfo: (props: GetPillarInfoProps) =>
    [...searchQueryKeys.all, 'pillar-info', props] as const,
};

export type SearchQueryKeys = typeof searchQueryKeys;
