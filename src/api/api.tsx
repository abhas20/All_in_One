"use client"
import axios, { AxiosInstance } from 'axios'
import 'dotenv/config'
import { get } from 'http';
import { useEffect } from 'react';
require('dotenv').config();

const client_id=process.env.NEXT_PUBLIC_CLIENT_ID || ""
const client_secret=process.env.CLIENT_Secret || ""

// https://accounts.spotify.com/authorize

const redirect_uri=process.env.REDIRECT_URI || "http://127.0.0.1:3000/songs"
const scope=["user-read-currently-playing","user-read-playback-state","user-top-read"].join("%20")

const authEndpoint="https://accounts.spotify.com/authorize"
const tokenEndpoint="https://accounts.spotify.com/api/token"

export const handleAuth=async()=>{
    window.location.href=`${authEndpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=token&show_dialog=true`
}

export const getArtist=async(accessToken:string,list:string)=>{
    return axios.get(`https://api.spotify.com/v1/artists?ids=${list}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        }
    })
}

export const getTopArtists = async (accessToken: string, timeRange: string = 'medium_term', limit: number = 10) => {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/me/top/artists`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          time_range: timeRange, // Options: 'short_term', 'medium_term', 'long_term'
          limit, // The number of top artists to fetch
        },
      });
      return response.data; 
    } catch (error) {
      console.error('Error fetching top artists:', error);
      throw error;
    }
  };