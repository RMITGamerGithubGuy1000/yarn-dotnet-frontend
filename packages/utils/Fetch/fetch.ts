import { Playlist, Song } from "@frontend/typing";

export async function fetchPlaylist(playlistId: string): Promise<Playlist> {
    const res = await fetch(`/api/songs/playlist/${playlistId}`);
    if (!res.ok) throw new Error("Failed to fetch playlist");
    return res.json();
}

export async function fetchAllSongs(): Promise<Song[]> {
    const res = await fetch(`/api/songs`);
    if (!res.ok) throw new Error("Failed to fetch songs");
    return res.json();
}