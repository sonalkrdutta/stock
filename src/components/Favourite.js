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
            "symbol": "MSFT",
            "stock_exchange": {
                "name": "NASDAQ Stock Exchange",
                "acronym": "NASDAQ",
                "mic": "XNAS",
                "52_week_high": 200,
                "52_week_low": 120,
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
            "symbol": "AAA",
            "stock_exchange": {
                "name": "NASDAQ Stock Exchange",
                "acronym": "NASDAQ",
                "mic": "XNAS",
                "52_week_high": 120,
                "52_week_low": 100,
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
            "symbol": "AAPL",
            "stock_exchange": {
                "name": "NASDAQ Stock Exchange",
                "acronym": "NASDAQ",
                "mic": "XNAS",
                "country": "USA",
                "52_week_high": 160,
                "52_week_low": 110,
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

function Favourite() {
    const [search, setSearch] = useState()
    const [result, setResult] = useState([])

    const onSearch = () => {
        const arr = [];
        for (let userObject of DATA) {
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
                                <div key={i}>{list.name} <FavoriteIcon /></div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Favourite
