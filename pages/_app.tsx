import "styles/globals.css"
import "swiper/swiper.scss"

import { AppProps } from "next/app"
import { FC } from "react"

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default App
