import Image from "next/image";

export async function MusicFetch() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: 'grant_type=client_credentials&client_id=4e8c83bc70bc47bca8d0124b8e36cff0&client_secret=e34c1e7bb4fc484c8865bb41eb9af474',
    })
    const token = await response.json()
    const bearer = `Bearer ${token?.access_token}`

    const res = await fetch('https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA', {
        headers: { Authorization: bearer },
    })
    const music = await res.json()
    return (
        <div className="grid grid-cols-4 gap-2">
            {music?.tracks?.map(track => (
                <div key={track.id} className="grid gap-2">
                    <Image src={track.album?.images?.[0]?.url} alt="track" width={track.album?.images?.[0]?.width} height={track.album?.images?.[0]?.height} />
                    {track.name && (
                        <p className="text-l font-semibold tracking-tight">{track.name}</p>
                    )}
                    {track.artists?.[0]?.name && (
                        <p className="text-sm text-muted-foreground">{track.artists?.[0]?.name}</p>
                    )}
                </div>
            ))}
        </div>
    )
}