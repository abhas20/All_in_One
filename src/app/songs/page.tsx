"use client"

import {getArtist, getTopArtists, handleAuth } from '@/api/api';
import SongCard from '@/components/SongCard';
import { Button } from '@/components/ui/button';

import ClipLoader from "react-spinners/ClipLoader";
import React, { startTransition, useEffect, useState, useTransition } from 'react'



export default function page() {
  const [artist,setArtist]=useState([]);
  const artistId=["3yMmYEklQ7gLOZXEFNd3xr","06HL4z0CvFAxyc27GXpf02","1wRPtKGflJrBx9BmLsSwlU","4YRxDV8wJFPHPTeXepOstw","4tuJ0bMpJh08umKkEXKUI5"].join(",")
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [pending, setPending] = useTransition();


  useEffect(() => {
    startTransition(async () => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const params = new URLSearchParams(hash.substring(1)); 
        const token = params.get('access_token');

        if (token) {
          setAccessToken(token);
        }
      }
    }
  })
  }, []);
  if(pending){
    return <div className='flex justify-center items-center h-screen'><h1 className='text-3xl text-center pb-3 font-[rog] font-bold mb-10'><ClipLoader color={"#123abc"}/></h1></div>
  }
  
  const showArtist = async () => {
    if (accessToken) {
      try {
        console.log(artistId)
        const res = await getArtist(accessToken, artistId);
        console.log(res.data); 
      } catch (error) {
        console.error('Failed to fetch albums:', error);
      }
    } else {
      console.error('Access token is missing');
    }
  };
  
  const topArtist = async () => {
    if (accessToken) {
      try {
        const res = await getTopArtists(accessToken,'medium_term', 10);
        console.log(res.items);
        setArtist(res.items);
      } catch (error) {
        console.error('Failed to fetch albums:', error);
      }
    }
    else {
      console.error('Access token is missing');
    }
  };
  return (
    <div>
       {!accessToken ? (
        <div className='flex flex-col justify-center items-center h-screen'>
          <h1 className='text-3xl text-center pb-3 font-[rog] font-bold mb-10'>Login to Spotify</h1>
          <p className='text-center text-2xl'>To view your top artists: </p><br/>
        <Button variant={'default'} onClick={handleAuth}>Login with Spotify</Button>
        </div>
      ) : (
        <div>
         <h2 className='m-auto text-3xl text-center pb-3 font-[rog] font-bold mb-10'>Explore Your Favourite artists</h2>
         <div className='container flex justify-center items-center flex-wrap lg:[&_div]:w-1/4 md:[&_div]:1/3 [&_div]:1/2 gap-8  m-auto mb-40'>
         <SongCard artist={artist}/>
         <div className='flex flex-col justify-center items-center'>
        <h2 className='text-2xl'>Discover Your Top 10 Artists:</h2><br/>
        <Button onClick={topArtist}>Your Top Artist</Button>
         </div>
         </div>
         
        </div>
      )}
      
    </div>
  )
}
