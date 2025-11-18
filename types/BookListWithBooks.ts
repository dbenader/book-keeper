import { Book } from "./Book";

export type BookListWithBooks = {
    id: string;
    source: string;
    listName: string;
    listType: string;
    publishedDate: string;
    books: Book[]
}