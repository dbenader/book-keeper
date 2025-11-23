export interface Book {
  id: string;                 // UUID as string
  openLibraryWorkId: string;
  isbn13: string;
  title: string;
  author: string;
  description?: string | null;
  genres?: string[];
  subjects: string[];
  publishedYear?: number | null;
  coverUrl?: string | null;
  averageRating?: number | null;
  ratingsCount?: number | null;
  publisher?: string | null;
  source?: string | null;
  createdAt: string;          // ISO-8601 string representing Instant
  updatedAt: string;          // ISO-8601 string representing Instant
}
