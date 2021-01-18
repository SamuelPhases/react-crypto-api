import React,{useState,useEffect} from 'react'
import Coins from './Coins'

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


function CryptoTableHeader({ascendDescend}) {

    return (
        
        <thead>
                <th>#</th>
                <th>Coin</th>
                <th>Price</th>
                <th onClick={ascendDescend}>1h
                </th>
                <th>24h
                </th>
                <th>7d
                </th>
                <th>24h Volume
                </th>
                <th>Mkt Cap
                </th>
            {/* </tr> */}
        </thead>
    )
}

export default CryptoTableHeader
