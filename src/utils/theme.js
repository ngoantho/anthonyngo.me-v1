import { useContext, createContext } from "react"
const ThemeContext = createContext({})
const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ThemeContext.Provider
export default useTheme
