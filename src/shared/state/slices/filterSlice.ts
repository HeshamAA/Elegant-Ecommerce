
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SortOption = 'price-low' | 'price-high' | 'newest' | 'popular' | 'rating' | 'name-asc' | 'name-desc';
export type ViewMode = 'grid' | 'list';

interface FilterState {
  category: string;
  subCategory: string | null;
  sortBy: SortOption;
  priceRange: [number, number];
  selectedSizes: string[];
  selectedColors: string[];
  selectedBrands: string[];
  searchQuery: string;
  viewMode: ViewMode;
}

const initialState: FilterState = {
  category: 'all',
  subCategory: null,
  sortBy: 'newest',
  priceRange: [0, 1000],
  selectedSizes: [],
  selectedColors: [],
  selectedBrands: [],
  searchQuery: '',
  viewMode: 'grid',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
      state.subCategory = null; // Reset subCategory when category changes
    },
    setSubCategory: (state, action: PayloadAction<string | null>) => {
      state.subCategory = action.payload;
    },
    setSortBy: (state, action: PayloadAction<SortOption>) => {
      state.sortBy = action.payload;
    },
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
    },
    toggleSize: (state, action: PayloadAction<string>) => {
      const size = action.payload;
      if (state.selectedSizes.includes(size)) {
        state.selectedSizes = state.selectedSizes.filter(s => s !== size);
      } else {
        state.selectedSizes.push(size);
      }
    },
    toggleColor: (state, action: PayloadAction<string>) => {
      const color = action.payload;
      if (state.selectedColors.includes(color)) {
        state.selectedColors = state.selectedColors.filter(c => c !== color);
      } else {
        state.selectedColors.push(color);
      }
    },
    toggleBrand: (state, action: PayloadAction<string>) => {
      const brand = action.payload;
      if (state.selectedBrands.includes(brand)) {
        state.selectedBrands = state.selectedBrands.filter(b => b !== brand);
      } else {
        state.selectedBrands.push(brand);
      }
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    toggleViewMode: (state) => {
      state.viewMode = state.viewMode === 'grid' ? 'list' : 'grid';
    },
    resetFilters: (state) => {
      return {
        ...initialState,
        category: state.category, // Keep the current category
        searchQuery: state.searchQuery, // Keep the search query
      };
    },
  },
});

export const {
  setCategory,
  setSubCategory,
  setSortBy,
  setPriceRange,
  toggleSize,
  toggleColor,
  toggleBrand,
  setSearchQuery,
  toggleViewMode,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
