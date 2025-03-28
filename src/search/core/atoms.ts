import { atom } from 'jotai';

import { LabeledItem } from './types';

export const pillarSearchInputItems = atom<LabeledItem[]>([]);

interface SearchQueryText {
  actual: string;
  debounced: string;
}

export const searchQueryAtom = atom<SearchQueryText>({
  actual: '',
  debounced: '',
});

export const isActiveSearchAtom = atom<boolean>(false);

export const hiddenPillarItemsAtom = atom<Record<string, string[]>>({});

export const isActiveAllFiltersAtom = atom<boolean>(false);

export type PillarFilterState = Record<
  string,
  { init: string; current?: string[] }
>;
export const currentFilterParamsAtom = atom<PillarFilterState>({});
