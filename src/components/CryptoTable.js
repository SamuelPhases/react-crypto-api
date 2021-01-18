import React,{useState,useEffect} from 'react'
import './CryptoTable.css'
import  axios  from 'axios'
import Coins from './Coins'
import CryptoTableHeader from './CryptoTableHeader'

function CryptoTable() {

    let  url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d'
    
    // let url
    const urlPrice = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=price_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d'
    
    const urlVolumeDescend = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d'
    
    let urlVolumeAscend = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_asc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d'
    
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')
    const  [volume,setVolume]=useState(false)
    
    useEffect(() => {
        {
          volume && (
                url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d'
          )
        }
        axios.get(url).then(res => {
            setCoins(res.data)
            console.log(res.data)
        }).catch(err=>alert(err))
        
        // const sortCoins = ascendDescend(coins)
        // setCoins(sortCoins)
    }, [])
    
    const ascendDescend = (allCoins) => {
        // const sortCoins = [...allCoins]
        // console.log(allCoins)
        
        setVolume(true)
        console.log(123)
        
        // sortCoins.sort((a, b) => {
        //     if (a.current_price > b.current_price) {
        //         return -1;
        //     } else {
        //         return 1;
        //     }
        // })
        // return sortCoins;
    }
    function handleChange(e) {
        setSearch(e.target.value)

    }

    const filteredCoins = coins.filter(coin =>   
        coin.name.toLowerCase().includes(search.toLowerCase())

    )
    

    return (
        <div className='crypto--container'>
            <h1 className='logo'>
                CoinGecko Clone
            </h1>
            <h2>
                Top 100 Coins by Market Capitalization
            </h2>
            <form>
                <div className='form'>
                    <input type='text' name='name' id='name' autoComplete='' onChange={handleChange}/>
                {/* <label for='name' className='label--name' >
                    <span className='content--name'>Search</span>
                </label> */}
                </div>
            </form>
            <table>

                <CryptoTableHeader ascendDescend={ascendDescend} />

            {filteredCoins.map(coin => (
                
                <Coins
                    key={coin.id}
                    rank={coin.market_cap_rank}
                    name={coin.name}
                    imgSrc={coin.image}
                    symbol={coin.symbol}
                    price={coin.current_price}
                    priceChange1h={coin.price_change_percentage_1h_in_currency}
                    priceChange24h={coin.price_change_percentage_24h_in_currency}
                    priceChange7d={coin.price_change_percentage_7d_in_currency}
                    volume={coin.total_volume}
                    mktCap={coin.market_cap}
                />
                ))}
                </table>

        </div>
    )
}

export default CryptoTable
