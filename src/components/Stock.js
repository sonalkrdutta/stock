import React, { useEffect, useState } from 'react'
import '../css/search.css'
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import FavoriteIcon from '@material-ui/icons/Favorite';

const DATA =
    [
        {
            "id": 1,
            "name": "MICROSOFT CORP",
            "symbol": "msft",
            "stock_exchange": {
                "name": "NASDAQ Stock Exchange",
                "acronym": "NASDAQ",
                "mic": "XNAS",
                "week_high": 200,
                "week_low": 120,
                "current_trading": 3.44,
                "country": "USA",
                "country_code": "US",
                "city": "New York",
                "website": "www.nasdaq.com",
                "timezone": {
                    "timezone": "America/New_York",
                    "abbr": "EST",
                    "abbr_dst": "EDT"
                }
            }
        },
        {
            "id": 2,
            "name": "MICRO tech",
            "symbol": "aaa",
            "stock_exchange": {
                "name": "NASDAQ Stock Exchange",
                "acronym": "NASDAQ",
                "mic": "XNAS",
                "week_high": 120,
                "week_low": 100,
                "current_trading": 2.44,
                "country": "USA",
                "country_code": "US",
                "city": "New York",
                "website": "www.nasdaq.com",
                "timezone": {
                    "timezone": "America/New_York",
                    "abbr": "EST",
                    "abbr_dst": "EDT"
                }
            }
        },
        {
            "id": 3,
            "name": "apple",
            "symbol": "aapl",
            "stock_exchange": {
                "name": "NASDAQ Stock Exchange",
                "acronym": "NASDAQ",
                "mic": "XNAS",
                "country": "USA",
                "week_high": 160,
                "week_low": 110,
                "current_trading": 5.44,
                "country_code": "US",
                "city": "New York",
                "website": "www.nasdaq.com",
                "timezone": {
                    "timezone": "America/New_York",
                    "abbr": "EST",
                    "abbr_dst": "EDT"
                }
            }
        }
    ]

function Stock() {
    const [search, setSearch] = useState()
    const [result, setResult] = useState([])
    const [favourite, setFavourite] = useState(false)


    // fetch('./stock.json').then(function (resp) {
    //     return resp.json();
    // })
    //     .then(function (data) {
    //         console.log(data.data.name);
    //     })
    const onSearch = () => {
        const arr = [];
        for (let userObject of DATA) {
            // console.log(userObject.symbol);
            if (search === userObject.symbol) {
                arr.push(userObject)
                break;
            }
        }
        setResult(arr)
    }
    return (
        <div className="img-fluid">
            <div className="container">
                <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="form"><span> <SearchIcon onClick={onSearch} /></span> <input type="text" className="form-control form-input" placeholder="Search anything..."
                            value={search} onChange={(e) => setSearch(e.target.value)} /></div >
                    </div>
                    {
                        result.map((list, i) => {
                            return (
                                <ul class="list-group align-items-center">
                                    <li class="list-group-item" key={i}>{list.name} {list.symbol} {list.stock_exchange.current_trading} {list.stock_exchange.week_high} {list.stock_exchange.week_low}<FavoriteIcon onClick={() => setFavourite(true)} style={favourite ? { color: 'red' } : { color: 'black' }} />
                                    </li>

                                </ul>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Stock
