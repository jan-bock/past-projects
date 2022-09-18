import "./App.css";
import RecipeTitle from "./components/RecipeTitle";

let welcomeText = "";

const randomHello = () => {
  let randomNum = Math.floor(Math.random() * (5 - 1 + 1) + 1);

  switch (randomNum) {
    case 1:
      welcomeText = "WHY DON'T YOU EAT SOME F*ING";
      break;
    case 2:
      welcomeText = "TRY NOT TO F* UP SOME";
      break;
    case 3:
      welcomeText = "YOU F*ING BURNT IT LAST TIME... TRY NOT TO BURN SOME";
      break;
    case 4:
      welcomeText = "AREN'T YOU GETTING F*ING TIRED OF THIS... TRY SOME";
      break;
    case 5:
      welcomeText = "WHY DONT YOU GIVE THIS A F*ING TRY:";
      break;
  }
};

const App = () => {
  return (
    <>
      <h1>{[welcomeText, randomHello()]}</h1>
      <RecipeTitle />
    </>
  );
};

export default App;
