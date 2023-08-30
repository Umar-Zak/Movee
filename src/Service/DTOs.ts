export interface SearchQuery {
    title: string
    year?: string
    plot?: string
}

// The api provides more fields than we have here. I didn't find
// them all necessary to show on the page
export interface Movie{
    Genre: string
    Awards: string
    Country: string
    Language: string
    Actors: string[]
    Released: string
    Director: string
    Plot: string
    Title: string
    Runtime: string
}