import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable";
import { calculateInvestmentResults } from "./util/investment";



function App() {
  const [investmentInput, setInvestmentInput] = useState({});
  function handleUserInput(id, value){
    setInvestmentInput(prevInput => ({
       ...prevInput,
       [id]: Number(value)
    }));
    
  }
  let results = investmentInput.duration >= 1 ? calculateInvestmentResults(investmentInput) : undefined;
  return (
    <>
      <Header />;
      <UserInput userUpdate={handleUserInput}/>;
      {results && <ResultsTable results={results}/>}
    </>
    
  );
}

export default App
