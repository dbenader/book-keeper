export type SearchResultItem = {
  key: string;                     // e.g. "/works/OL82548W"
  title: string;

  subtitle?: string;

  cover_i?: number;                // cover ID (for covers API)
  first_publish_year?: number;

  isbn?: string[];                 // can be a *big* array
  author_name?: string[];          // ["J. K. Rowling", ...]
  subject?: string[];              // subjects/genres/tags

  ratings_count?: number;          // total number of ratings
  number_of_pages_median?: number; // median pages across editions
};


export type SearchResult = {
    numFound: number;
    start: number;
    numFoundExact: number;
    q: string;
    documentationUrl: string;
    docs: SearchResultItem[];
}


export interface Work {
  key: string;                           // "/works/OL82548W"
  title: string;
  description?: string | {
    value: string;
    type?: string;
  };

  covers?: number[];                     // IDs for covers.openlibrary.org

  links?: Array<{
    title: string;
    url: string;
    type?: {
      key: string;                       // "/type/link"
    };
  }>;

  subjects?: string[];
  subject_places?: string[];
  subject_people?: string[];

  first_publish_date?: string;           // "2003"
  created?: OpenLibraryTimestamp;
  last_modified?: OpenLibraryTimestamp;

  authors?: Array<{
    author: {
      key: string;                       // "/authors/OL23919A"
    };
    type?: {
      key: string;                       // "/type/author_role"
    };
  }>;

  excerpts?: Array<{
    excerpt: string;
    comment?: string;
    author?: {
      key: string;                       // "/people/..."
    };
  }>;

  type?: {
    key: string;                         // "/type/work"
  };

  latest_revision?: number;
  revision?: number;
}

export interface OpenLibraryTimestamp {
  type: string;                          // "/type/datetime"
  value: string;                         // "2025-07-07T20:25:12.456310"
}
