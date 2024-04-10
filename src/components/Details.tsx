import React, { useContext,useState, useEffect } from "react";
import Card from "./Card";
import  ThemeContext  from "../context/ThemeContext";
import { DataContext } from "../context";
//@ts-ignore
type data = boolean[];

const Details: React.FC= () => {
  const [data, setData] = useState<boolean[]>([]);
  //@ts-ignore
  const { darkMode } = useContext(ThemeContext);
  //@ts-ignore
  const{symbolData} = useContext(DataContext)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = Object.values(symbolData);
        //@ts-ignore
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [symbolData]); 
  return (
    <Card>
     <ul className={`w-full h-96 flex flex-col justify-between divide-y ${darkMode ? "divide-gray-800 shadow-xl texl-white" : "divide-gray-200 shadow-md"} rounded-lg  p-6`}>

 
  {data ? (
    <>
      <li className="flex justify-between">
        <span className="font-semibold">Symbol:</span>
        <span>{data[1]}</span>
      </li>
      <li className="flex justify-between">
        <span className="font-semibold">Interval:</span>
        <span>{data[3]}</span>
      </li>
      <li className="flex justify-between">
        <span className="font-semibold">Last Refreshed:</span>
        <span>{data[2]}</span>
      </li>
      <li className="flex justify-between">
        <span className="font-semibold">Time Zone:</span>
        <span>{data[5]}</span>
      </li>
      <li className="flex justify-between">
        <span className="font-semibold">Output Size:</span>
        <span>{data[4]}</span>
      </li>
    </>
  ) :(
    <div>
      Loading...
    </div>
  )}
</ul>

    </Card>
  );
};

export default Details;
