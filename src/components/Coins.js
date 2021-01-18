import React from 'react'
import './Coins.css'
import StarBorderIcon from '@material-ui/icons/StarBorder';


function Coins({rank,name,imgSrc,symbol,price,priceChange1h,priceChange24h,priceChange7d,volume,mktCap}) {
    return (
            <tbody>
            <tr>
                    <td className='rank'>
                        {rank}
                    </td>
                <td className='spread--items'>
                    <div>

                    <img
                        src={imgSrc}
                        alt={name} />
                    {name}
                        </div>
                    <span className='color--font'>
                        {symbol}

                    </span>
                </td>
                    <td className='color--font'>
                        ${price?.toFixed(2)}
                    </td>
                <td>
                <span className={` price--hour  ${
                        priceChange1h  < 0 ?  'red--color'  : 'green--color' } 
                    `}>
                    {priceChange1h?.toFixed(1)}<span>
                            %
                            </span>
                    </span>    
                            
                    </td>
                <td>
                <span className={` price--hour  ${
                        priceChange24h  < 0 ?  'red--color'  : 'green--color' } 
                    `}>

                    {priceChange24h?.toFixed(1)}<span>
                            %
                            </span>
                    </span>
                    </td>
                            
                <td>
                    <span className={` price--hour  ${
                        priceChange7d  < 0 ?  'red--color'  : 'green--color' } 
                    `}>

                    {priceChange7d?.toFixed(1)}<span>
                            %
                            </span>
                    </span>
                            
                    </td>
                    <td className='color--font'>
                        ${volume?.toLocaleString()}
                    </td>
                    <td className='color--font'>
                        ${mktCap?.toLocaleString()}
                    </td>
                </tr>
            </tbody>
    )
}

export default Coins
