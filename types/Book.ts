export interface Book {
  id: string;                 // UUID as string
  googleBooksId?: string | null;
  isbn10?: string | null;
  isbn13?: string | null;
  title?: string | null;
  author?: string | null;
  description?: string | null;
  genre?: string | null;
  tags?: string[] | null;
  publishedYear?: number | null;
  coverUrl?: string | null;
  averageRating?: number | null;
  ratingsCount?: number | null;
  publisher?: string | null;
  source?: string | null;
  createdAt: string;          // ISO-8601 string representing Instant
  updatedAt: string;          // ISO-8601 string representing Instant
}
