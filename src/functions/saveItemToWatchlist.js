// import { toast } from "react-toastify";
import { toast } from 'react-toastify';

export const saveItemToWatchlist = (e, id) => {
  e.preventDefault();
  let watchlist = JSON.parse(localStorage.getItem('watchlist'));

  if (watchlist) {
    if (!watchlist.includes(id)) {
      watchlist.push(id);
    } else {
      console.log('remove it');
    }
  } else {
    watchlist = [id];
  }
  localStorage.setItem('watchlist', JSON.stringify(watchlist));
};
