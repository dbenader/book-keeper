import { Book } from "@/types/Book";
import api from "./api";
import { PageResponse } from "@/types/PageResponse";
import { BookListWithBooks } from "@/types/BookListWithBooks";
import { UserPreference } from "@/types/UserPreference";


const BookService = {
    getNytBestSellers: async () => {
        let response = await api.get<Partial<Book>>('/books/source/NYT');
        return response.data;
    },
    getListHighlights: async (source: string) => {
        let response = await api.get<Array<BookListWithBooks>>('/lists/source/NYT/highlights');
        return response.data;
    },
    rateBook: async (userId: string, bookId: string, preference: UserPreference) => {
        let response = await api.post(`/users/${userId}/books/${bookId}`, {
            userPreference: preference
        });

        return response.data;
    },
    getOnboardingBooks: async () => {
        let response = await api.get<PageResponse<Book>>('/books/source/onboarding', {
            params: {
                page: 0,
                size: 1000
            }
        });

        return response.data.content;
    }
}

export default BookService;