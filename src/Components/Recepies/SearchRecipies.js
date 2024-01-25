import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import axios from "axios";
import RecipeCard from "./RecipeCard";

const SearchRecipies = () => {
    const [data, setData] = useState('');
    const [btndata, setBtnData] = useState([]);

    const InputEvent = (event) => {
        setData(event.target.value);
        console.log(event.target.value);
    }


    const YOUR_APP_ID = '5ae18e5d';
    const YOUR_APP_KEY = 'f4d76a9c20b1f491cd487df1a1f6ec2e';

    var apilink = `https://api.edamam.com/search?q=${data}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0`

    const searchedQuery = async () => {
        try {
            const response = await axios.get(apilink);
            setBtnData(response.data.hits);
            // console.log(response.data.hits);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <>
            <div className="container d-flex justify-content-center my-5 searchcontainer">
                <div className="searchicon" onClick={searchedQuery}>
                    <SearchIcon />
                </div>
                <div className="searchbox">
                    <input type="text" placeholder="Search Recipies" value={data} onChange={InputEvent}></input>
                </div>
            </div>
            <div className="container result">
                <div className="row ">
                        {btndata.length === 0 ? (
                            <LunchDiningIcon className="lunchicon" />
                        ) : (
                            btndata.map(item => (
                                <RecipeCard
                                    key={item.id}
                                    img={item.recipe.image}
                                    heading={item.recipe.label}
                                    link={item.recipe.url}
                                />
                            ))
                        )}
                </div>
            </div>
        </>
    )
}

export default SearchRecipies;

