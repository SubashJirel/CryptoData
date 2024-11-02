import React from 'react';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import { Tooltip } from '@mui/material';
import { convertNumber } from '../../../functions/convertNumber';

function List({ coin }) {
  const isNegative = coin.price_change_percentage_24h < 0;

  return (
    <tr
      className="w-full px-4 py-3 mb-2 mx-auto flex justify-between items-center rounded-lg cursor-pointer
                 hover:bg-backgroundClrCard transition-all duration-300"
    >
      <Tooltip title="Coin Image">
        <td className="flex-shrink-0 w-1/5 text-center md:text-left">
          <img
            src={coin.image}
            alt={coin.name}
            className="h-12 w-12 rounded-full"
          />
        </td>
      </Tooltip>

      <Tooltip title="Coin Info" placement="bottom-start">
        <td className="w-1/5 flex flex-col gap-1 text-center md:text-left">
          <p className="uppercase font-semibold text-textClr text-xs sm:text-sm ">
            {coin.symbol}
          </p>
          <p className="text-greyClr text-xs sm:text-sm ">{coin.name}</p>
        </td>
      </Tooltip>

      <Tooltip
        title="Coin Price Percentage change In 24hrs"
        placement="bottom-start"
      >
        <td className="w-1/5 hidden vsm:flex items-center justify-center gap-2">
          <div
            className={`border-2 px-3 py-1 rounded-full font-semibold text-xs sm:text-sm 
                        ${
                          isNegative
                            ? 'border-redClr text-redClr'
                            : 'border-greenClr text-greenClr'
                        }
                        hover:bg-${
                          isNegative ? 'redClr' : 'greenClr'
                        } hover:text-white transition-all duration-300`}
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div
            className={`p-1 rounded-full  justify-center items-center hidden md:flex
                        ${
                          isNegative
                            ? 'border-redClr text-redClr'
                            : 'border-greenClr text-greenClr'
                        }
                        hover:bg-${
                          isNegative ? 'redClr' : 'greenClr'
                        } hover:text-white transition-all duration-300`}
          >
            {isNegative ? (
              <TrendingDownRoundedIcon />
            ) : (
              <TrendingUpRoundedIcon />
            )}
          </div>
        </td>
      </Tooltip>

      <Tooltip title="Coin Price In USD" placement="bottom-end">
        <td
          className={`w-1/5  text-xs sm:text-sm sm:font-semibold text-center ${
            isNegative ? 'text-redClr' : 'text-greenClr'
          } `}
        >
          ${coin.current_price.toLocaleString()}
        </td>
      </Tooltip>

      <Tooltip title="Coin Total Volume" placement="bottom-end">
        <td className="w-1/5 text-right text-greyClr text-xs sm:text-sm hidden lg:table-cell ">
          {coin.total_volume.toLocaleString()}
        </td>
      </Tooltip>

      <Tooltip title="Coin Market Capital" placement="bottom-end">
        <td className="w-1/5 text-right text-greyClr text-xs sm:text-sm hidden lg:table-cell ">
          ${coin.market_cap.toLocaleString()}
        </td>
      </Tooltip>

      <td className="text-greyClr text-xs sm:text-sm text-left lg:hidden ">
        ${convertNumber(coin.market_cap)}
      </td>
    </tr>
  );
}

export default List;
