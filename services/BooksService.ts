import { Book } from "@/types/Book";
import api from "./api";
import { PageResponse } from "@/types/PageResponse";
import { BookListWithBooks } from "@/types/BookListWithBooks";


const BookService = {
    getNytBestSellers: async () => {
        let response = await api.get<Partial<Book>>('/books/source/NYT');
        return response.data;
    },
    getListHighlights: async (source: string) => {
        let response = await api.get<PageResponse<BookListWithBooks>>(`/list/${source}/highlights`);
        return response.data;
    }
}

export default BookService;