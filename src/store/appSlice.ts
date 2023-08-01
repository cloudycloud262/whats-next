import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  showSidebar: boolean;
  modal:
    | "Create Playlist"
    | "Edit Playlist"
    | "Add Item"
    | "Delete Playlist"
    | "Remove Item"
    | "Edit Item"
    | "Logout"
    | "";
  nav: "Movies" | "Songs" | "Books" | "Games";
  activePlaylist: number;
}

const initialState: AppState = {
  showSidebar: true,
  modal: "",
  nav: "Movies",
  activePlaylist: 0,
};

export const appSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setShowSidebar: (state, action: PayloadAction<boolean>) => {
      state.showSidebar = action.payload;
    },
    setModal: (
      state,
      action: PayloadAction<
        | "Create Playlist"
        | "Edit Playlist"
        | "Add Item"
        | "Edit Item"
        | "Delete Playlist"
        | "Remove Item"
        | "Logout"
        | ""
      >
    ) => {
      state.modal = action.payload;
    },
    setNav: (
      state,
      action: PayloadAction<"Movies" | "Songs" | "Books" | "Games">
    ) => {
      state.nav = action.payload;
    },
    setActivePlaylist: (state, action: PayloadAction<number>) => {
      state.activePlaylist = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShowSidebar, setModal, setNav, setActivePlaylist } =
  appSlice.actions;

export default appSlice.reducer;