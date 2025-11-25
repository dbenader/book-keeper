import { SearchResult, Work } from "@/types/OpenLibrary";
import axios from "axios";

const OpenLibraryService = {
        search: async (query: string, page?: number, limit?: number) => {
        const params = new URLSearchParams();

        params.set("q", query);
        params.set(
        "fields",
        "key,title,subtitle,cover_i,first_publish_year,author_name,subject,ratings_count,number_of_pages_median"
        );

        if (page) params.set("page", String(page));
        if (limit) params.set("limit", String(limit));
        else params.set("limit", "20");

        const url = `https://openlibrary.org/search.json?${params.toString()}`;
        const response = await axios.get<SearchResult>(url);
        return response.data;
    },
    getWork: async (workId: string) => {
        console.log('workId', workId)
        let url = `https://openlibrary.org/works/${workId}.json`
        console.log('url', url)
        let response = await axios.get<Work>(url)
        return response.data;
    },
}

export default OpenLibraryService;