import { useContext} from "react";
import ThemeContext from "../context/ThemeContext";
import Details from "./Details";
import Header from "./Header";
import StockChart from './StockChart'
import DropDown from "./DropDown";

const MainDashboard = () => {
  //@ts-ignore
   const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`w-full lg:h-[800px] h-auto ${darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"}`}    >
      <div className="w-full">
        <Header />
      </div>
      <div className="w-full flex items-start sm:pl-8 ">
        <DropDown/>
      </div>
      <div className="flex lg:flex-row flex-col gap-4 sm:px-8 px-0 sm:py-8 py-2">
        <div className="lg:w-2/3 w-full h-auto">
           <StockChart />
        </div>
        <div className="lg:w-1/3 w-full h-auto ">
          <Details />
        </div>
      </div>
    
    </div>
  );
};

export default MainDashboard;
