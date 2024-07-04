import { ReactNode, createContext, useEffect, useState } from "react"

interface ThemeTypes{
  theme: "light" | "dark";
  updateTheme: (theme: "light" | "dark") => void;
}
interface Props {
  children: ReactNode;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ThemeContext = createContext<ThemeTypes>({
  theme: "dark" || "light",
  updateTheme: () => {},
})


export const ThemeProvider = (props:Props) => {
  const [theme, setTheme] = useState<"light" | "dark">('light')

  const getPreferredTheme = () => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) return "dark";
    return "light";
  }

  const updateTheme = (newTheme:"light" | "dark")=> {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    const userPrefrence = savedTheme || getPreferredTheme();
    setTheme(userPrefrence);
    if (userPrefrence === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme,updateTheme  }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;