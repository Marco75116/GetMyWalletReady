import { create } from "zustand";

interface useTokensSearchStore {
    tokensSearch: string;
    setTokensSearch: (textSearch : string) => void;
    
}

export const useTokensSearch= create<useTokensSearchStore>((set)=>({
    tokensSearch: "",
    setTokensSearch: (textSearch : string) => set({tokensSearch:textSearch}),
   
}))