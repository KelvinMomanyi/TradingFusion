import { createContext } from "react";

type ThemeContextValue = boolean;


const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);




export default ThemeContext
