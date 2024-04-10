import {useContext} from 'react';
import { DataContext } from '../context';
//@ts-ignore
import {Apple, Amazon,Tesla, Microsoft, Alphabet, Netflix, Nvidia, IBM} from '../assets/logos'

const DropDown= ()=>{
  const symbols = ['IBM', 'AAPL', 'GOOGL', 'MSFT', 'TSLA', 'AMZN', 'NFLX', 'NVDA']
  const companies = {
    IBM: {
      name: 'International Business Machines Corporation',
      logo: IBM
    },
    AAPL: {
      name: 'Apple Inc.',
      logo: Apple
    },
    GOOGL: {
      name: 'Alphabet Inc. (Class A)',
      logo: Alphabet
    },
    MSFT: {
      name: 'Microsoft Corporation',
      logo: Microsoft
    },
    TSLA: {
      name: 'Tesla, Inc.',
      logo: Tesla
    },
    AMZN: {
      name: 'Amazon.com, Inc.',
      logo: Amazon
    },
    NFLX: {
      name: 'Netflix, Inc.',
      logo: Netflix
    },
    NVDA: {
      name: 'NVIDIA Corporation',
      logo: Nvidia
    }
  };
  //@ts-ignore
  const {selectedOption, handleOptionChange, darkMode} = useContext(DataContext)
  return (
    <div className='p-4 h-10 flex gap-3'>
      <div>
       <select value={selectedOption} onChange={handleOptionChange}>

        {symbols.map((option, index) => (
          <option key={index} value={option} className='text-black'>
            {option}
          </option>
        ))}
      </select>
      </div>
     
      {selectedOption && (
        <div className='flex items-center py-3 gap-2'>
          <p className='text-lg text-slate-600 sm:block hidden'>
            { 
            //@ts-ignore
            companies[selectedOption].name
            }
            </p>
          <div className={`w-20 h-20 flex items-center ${ darkMode ?  'bg-black' : 'bg-transparent' } p-2`}>
             <img 
              //@ts-ignore
             src={companies[selectedOption].logo} className='w-16 h-10 object-cover'/>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown;

