const RecipePreferenceButtons = ({ parentCallBack }) => {
  // const onTrigger = (data) => {
  //     parentCallBack(data);
  //     console.log(data)
  // }

  return (
    //if i dont like meat is clicked, change i dont like meat to: im not a F*ing vegetarian
    <>
      {/* <button onClick={onTrigger("Didn't bite")}>I don't F*ing like that {console.log("I didnt like that was clicked")}</button> */}
      <button>I don't F*ing eat meat</button>
    </>
  );
};

export default RecipePreferenceButtons;
