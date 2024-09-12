import { ReactNode } from "react"

interface IContainerProps {
  children: ReactNode
}
export default function Container({ children }: IContainerProps) {
  return (
      <div className="w-auto grid-flow-col">
        {children}
      </div>
  )
}