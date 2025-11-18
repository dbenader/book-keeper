export type BookList = {
  id: string;
  source: string;
  listName: string;
  listType: string | null;
  publishedDate: string; // YYYY-MM-DD
  fetchedAt: string; // ISO timestamp
}
