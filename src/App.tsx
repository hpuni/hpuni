import { useState, useEffect } from "react";
import Footer from "./containers/Footer/Footer";
import Help from "./containers/Help/Help";
import ToDo from "./containers/ToDo/ToDo";
import Support from "./containers/Support/Support";
import History from "./containers/History/History";
import Repressions from "./containers/Repressions/Repressions";
import SpreadInfo from "./containers/SpreadInfo/SpreadInfo";
import Check from "./containers/Check/Check";
import Cooperate from "./containers/Cooperate/Cooperate";
import Main from "./containers/Main/Main";

function App() {
  const [data, setData] = useState<any>([]);
  const getData = () => {
    fetch("https://univer.honest-people.by/data/extreme.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Main />
      <Cooperate />
      <Check
        countries={data?.countries}
        cities={data?.cities}
        partners={data?.partners}
        belUnis={data?.belarusianUniversities}
      />
      <SpreadInfo />
      <Repressions universities={data?.belarusianUniversities} />
      <History stories={data?.stories} />
      <Support />
      <ToDo />
      <Help />
       <Footer /> 
    </>
  );
}

export default App;
