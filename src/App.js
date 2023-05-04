import Forcast from "./components/Forcast";
import Inputs from "./components/Inputs";
import Tal from "./components/Tal";
import TempDetails from "./components/TempDetails";
import TopBtn from "./components/TopBtn";

const App = () => {

  return (
    <main className='mx-auto max-w-screen mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to blue-700 h-fit shadow-xl shadow-gray-400'>
      <TopBtn/>
      <Inputs/>

      <Tal/>
      <TempDetails/>
      <Forcast title='Hourly Forcast'/>
      <Forcast title='Daily Forcast'/>
    </main>
  );
}

export default App;
