export type SearchBasicRequestParams = {
    country: string;
    service: string;
    type: string;
    genre?: number;
    keyword?: string;
    page?: number;
    output_language?: string;
    language?: string;
}

export type SearchBasicResponseProps = {
    results: SearchBasicResponseResultProps[];
    total_pages: number;
} 

export type SearchBasicResponseResultProps = {
    age: number;
    cast: string[];
    genres: number[];
    imdbRating:number;
    imdbVoteCount:number;
    originalTitle: string;
    overview: string;
    posterURLs: PosterURLsResProps;
    streamingInfo: StreamingInfoProps;
    year: number;
} 

export type PosterURLsResProps = {
    92: string;
    154: string;
    185: string;
    342: string;
    500: string;
    780: string;
    original: string;
}

export type StreamingInfoProps = {
    netflix?: Region;
    prime?: Region;
}

export type Region = {
    br: RegionProps;
}

export type RegionProps = {
    added: number;
    leaving: number;
    link: string;
}