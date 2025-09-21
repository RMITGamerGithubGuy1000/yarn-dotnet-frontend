export interface Song {
    id: string;
    title: string;
    artist: string;
    coverArt?: string;
    url: string;
};

export interface Playlist {
    id: string;
    name: string;
    songs: Song[];
}