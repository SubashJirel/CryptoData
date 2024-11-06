import React from 'react';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import { Link } from 'react-router-dom';

function Grid({ coin }) {
  const isNegative = coin.price_change_percentage_24h < 0;

  return (
    <Link to={`/coin/${coin?.id}`}>
      <div
        className={`flex flex-col gap-6 w-64 p-8 bg-backgroundClrCard rounded-lg 
                  transform transition-transform hover:scale-105 cursor-pointer 
                  ${
                    isNegative ? 'hover:border-redClr' : 'hover:border-greenClr'
                  } 
                  hover:border-2`}
      >
        <div className="flex items-center gap-4">
          <img
            src={coin.image}
            alt={`${coin.name} logo`}
            className="h-12 w-12 rounded-full"
          />
          <div className="flex flex-col gap-1">
            <p className="uppercase font-semibold m-0 text-textClr">
              {coin.symbol}
            </p>
            <p className="text-greyClr font-normal text-sm">{coin.name}</p>
          </div>
        </div>

        <div className="flex items-center justify-between w-full">
          {coin.price_change_percentage_24h >= 0 ? (
            <div className="flex items-center gap-3">
              <div className="border-2 border-greenClr rounded-full px-4 py-1 font-semibold text-greenClr hover:bg-greenClr hover:text-white transition-all duration-300">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="border-2 border-greenClr p-2 rounded-full text-greenClr hover:bg-greenClr hover:text-white transition-all duration-300">
                <TrendingUpRoundedIcon />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="border-2 border-redClr rounded-full px-4 py-1 font-semibold text-redClr hover:bg-redClr hover:text-white transition-all duration-300">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="border-2 border-redClr p-2 rounded-full text-redClr hover:bg-redClr hover:text-white transition-all duration-300">
                <TrendingDownRoundedIcon />
              </div>
            </div>
          )}
        </div>

        <p
          className={`font-semibold text-lg ${
            isNegative ? 'text-redClr' : 'text-greenClr'
          }`}
        >
          ${coin.current_price.toLocaleString()}
        </p>

        <p className="text-greyClr text-sm">
          Total Volume: {coin.total_volume.toLocaleString()}
        </p>
        <p className="text-greyClr text-sm">
          Market Capital: ${coin.market_cap.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}

export default Grid;
