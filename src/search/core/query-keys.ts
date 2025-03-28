import {
  GetPillarFiltersProps,
  GetPillarInfoProps,
  GetPillarInputLabelsProps,
  GetPillarItemsProps,
} from '@/search/core/types';

export const searchQueryKeys = {
  all: ['search'] as const,
  search: (query: string, nav?: string) =>
    [...searchQueryKeys.all, 'search', query, nav] as const,
  getPillarItems: (props: GetPillarItemsProps) =>
    [...searchQueryKeys.all, 'pillar-items', props] as const,
  getPillarInfo: (props: GetPillarInfoProps) =>
    [...searchQueryKeys.all, 'pillar-info', props] as const,
  getPillarInputLabels: ({ nav, pillars, inputs }: GetPillarInputLabelsProps) =>
    [
      ...searchQueryKeys.all,
      'pillar-input-labels',
      nav,
      pillars,
      inputs,
    ] as const,
  getPillarFilters: (props: GetPillarFiltersProps) =>
    [...searchQueryKeys.all, 'pillar-filters', props] as const,
};

export type SearchQueryKeys = typeof searchQueryKeys;
