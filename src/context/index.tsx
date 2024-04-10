import {createContext, useEffect, useState, ChangeEvent} from 'react';



type DataContextValue = null;
interface StockData {
    [key: string]: {
        'transformed': string;
    };
}

type StockSymbol = {}
interface StockDataPoint {
    time: string;
    price: number;
}
export const DataContext = createContext<DataContextValue | null>(null);


 const DataProvider = ({children}:any) => {
    //@ts-ignore
    const [stockData, setStockData] = useState<StockData | null>(null);
    const [symbolData, setSymbolData] = useState<StockSymbol>({}) 
    const [finalData, setFinalData] = useState<StockDataPoint[] >([])
    const [selectedOption, setSelectedOption] = useState("IBM"); 

   
    const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>): void => {
       setSelectedOption(event.target.value); 
     };

    
        useEffect(() => {
            const fetchData = async () => {
                try {
                        const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${selectedOption}&interval=5min&apikey=RIBXT3XYLI69PC0Q`);
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        const data = await response.json();                      
                        setStockData(data['Time Series (5min)']);
                        setSymbolData(data['Meta Data'])
                        
                        const transformedData = Object.values(data['Time Series (5min)']).map(item => ({
                            //@ts-ignore
                            price: parseFloat(item['4. close'])
                        }));
                        
                        const originalData = Object.keys(data['Time Series (5min)']);
                        
                        const combinedData = transformedData.map((transformedItem, index) => ({
                            transformed: transformedItem,
                            original: originalData[index]
                        }));
                         //@ts-ignore
                        setFinalData(combinedData)
                } catch (error) {
                    console.error('There has been a problem with your fetch operation:', error);
                }
            };
    
            fetchData();
        }, [selectedOption]);

  return (
    //@ts-ignore
     <DataContext.Provider value={{stockData, finalData, symbolData, selectedOption, handleOptionChange}}>
        {children}
    </DataContext.Provider>
  )       
};

export default DataProvider;