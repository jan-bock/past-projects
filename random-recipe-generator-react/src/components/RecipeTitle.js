import axios from "axios";
import { useState, useEffect } from "react";
import RecipePreferenceButtons from "./RecipePreferenceButtons";
import "../RecipeTitle.css";

const APIKEY = "***********Private API Key*************";
//const APIURL = `https://api.spoonacular.com/recipes/random?apiKey=${APIKEY}`;
//API info @:  https://spoonacular.com/food-api/console#Profile

const RecipeTitle = () => {
  const [title, setTitle] = useState("");
  const [url, setURL] = useState("");

  const getRecipeData = async () => {
    const returnedData = await axios
      .get(APIURL)
      .catch((error) => console.log("There was an", error));

    console.log("returnedData was: ", returnedData);
    console.log("title was: ", returnedData.data.recipes[0].title);
    console.log("sourceURL was: ", returnedData.data.recipes[0].sourceUrl);

    setTitle(returnedData.data.recipes[0].title.toUpperCase());
    setURL(returnedData.data.recipes[0].sourceUrl);
  };

  useEffect(() => {
    getRecipeData();
  }, []);

  function handleCallBack(callBackData) {
    // //if callBackData = "veggy", then set the URL tag to "vegetarian"
    // if (callBackData === "veggy") {
    //     APIURL = `https://api.spoonacular.com/recipes/random?apiKey=${APIKEY}tags=vegetarian`;
    // }
    // //if callBackData = "Didn't bite", then call the API again (getRecipe Data)
    // if (callBackData === "Didn't bite") {
    //     setURL(`https://api.spoonacular.com/recipes/random?apiKey=${APIKEY}`)
    // }
    callBackData = null;
    return callBackData;
  }

  return (
    <>
      <a className="recipe-title" href={url}>
        {title}
      </a>
      <br />
      <br />
      <RecipePreferenceButtons parentCallBack={handleCallBack} />
    </>
  );
};

export default RecipeTitle;
