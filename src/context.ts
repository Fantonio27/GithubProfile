import { createContext } from "react"
import { Username } from "./Type"

export const userContext = createContext<Username | null>(null)