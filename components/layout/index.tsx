import { FC } from "react"
import Header from "./header"

interface LayoutProps {
  disableHeader?: boolean
}

const Layout: FC<LayoutProps> = ({ children, disableHeader }) => (
  <>
    {!disableHeader && <Header />}

    <main className="flex flex-col items-center w-full min-h-screen">
      {children}
    </main>
  </>
)

export default Layout
