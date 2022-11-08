import { SearchBasicRequestParams, SearchBasicResponseProps } from "./@types/api/searchBasic";
import { api } from "./services/api";

require('dotenv').config();

async function getAllMovies() {
    const reqParams: SearchBasicRequestParams = {
        country: 'br',
        service: 'netflix',
        type: 'movie',
        page: 1,
        output_language: 'en'
    }
    const response = await api.get<SearchBasicResponseProps>('/search/basic', { params: reqParams });
    console.log(response.data.results[0].streamingInfo.netflix.br.link)
}

getAllMovies()