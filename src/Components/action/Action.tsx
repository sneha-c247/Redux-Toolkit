import {  createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    index: number
  }
export const fetchUserByName = createAsyncThunk(
    'fetchuser',
    async () => {
      try {
        const apiurl =import.meta.env.VITE_REACT_APP_API_URL;
        const response = await axios.get(`${apiurl}/posts`)
        const titles = response.data.map((item: Post,index: number) => <h1 key={index}>{item.title}</h1>);
        const oneTitle = titles[1]; // Get the title at the first index
        return oneTitle;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    },
  );