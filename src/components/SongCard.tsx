import Link from 'next/link'
import React from 'react'

export default function SongCard({artist}:any) {
  return (
    <li className='flex gap-4 flex-wrap'>
        {artist.map((item:any) => (
          <div key={item.id} className='border-2xl hover:shadow-yellow-200 hover:-translate-y-1 shadow-lg shadow-cyan-500/50 rounded-2xl h-120 grid self-center text-center border-amber-200 bg-gradient-to-r from-blue-900 to-black p-3 m-auto space-y-2 [&_span]:font-bold text-white'>
            <h3 className='text-2xl font-bold underline underline-offset-4 my-2 '>{item.name}</h3>
            <p><span>Popularity:</span>{item.popularity}</p>
            <img src={item.images[2].url} alt={item.name} className='rounded-full w-32 h-32 m-auto' />
            <p><span>Genres:</span>{item.genres.join(", ")}</p>
                <p><span>Followers:</span>{item.followers.total}</p>
                <p><span>URL:<br/></span><Link href={item.external_urls.spotify}>Click Here</Link></p>
          </div>
          ))}
    </li>
  )
}
