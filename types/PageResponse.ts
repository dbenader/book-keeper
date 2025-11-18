export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;              // current page index
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}
