// Action Creator

export const selectSong = song => {
  //return an actions
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
