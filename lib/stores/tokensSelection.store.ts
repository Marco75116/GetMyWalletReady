import { create } from "zustand";
import { Token } from "../types/global.types";

interface useTokensSelectionStore {
    tokensSelection : Token[];
    setTokensSelection : (tokens : Token[]) => void;
    addTokenToSelection : (token : Token) => void;
    removeTokenToSelection : (token : Token) => void;
}

export const useTokensSelection= create<useTokensSelectionStore>((set)=>({
    tokensSelection: [],
    setTokensSelection: (tokens : Token[]) => set({tokensSelection:tokens}),
    addTokenToSelection: (token : Token) => set((state)=>({
        tokensSelection: [...state.tokensSelection,token]
    })),
    removeTokenToSelection: (tokenToRemove : Token) => set((state)=>({
        tokensSelection : state.tokensSelection.filter((token)=> token.address !== tokenToRemove.address)
    }))
}))