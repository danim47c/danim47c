/* eslint-disable jsx-a11y/alt-text */
import { useMemo, useRef } from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { GetStaticProps, NextPage } from "next"
import { gql } from "graphql-request"
import { client } from "src/datocms"
import { useRouter } from "next/dist/client/router"
import random from "random-number"

interface HomePageProps {
  about: {
    _allQuoteLocales: {
      locale: string
      value: string
    }[]
    _allQuoteAuthorLocales: {
      locale: string
      value: string
    }[]
  }
  allContacts: {
    id: string
    image: { url: string }
    url: string
  }[]
}

const HomePageQuery = gql`
  query HomePageQuery {
    about {
      _allQuoteLocales {
        locale
        value
      }
      _allQuoteAuthorLocales {
        value
        locale
      }
    }
    allContacts {
      id
      image {
        url
      }
      url
    }
  }
`

const HomePage: NextPage<HomePageProps> = ({
  allContacts: contacts,
  ...props
}) => {
  const { locale } = useRouter()

  const about = useMemo(
    () => ({
      quote: props.about._allQuoteLocales.find(
        (quote) => quote.locale === locale
      ).value,
      quoteAuthor: props.about._allQuoteAuthorLocales.find(
        (quoteAuthor) => quoteAuthor.locale === locale
      ).value,
    }),
    [props.about, locale]
  )

  const parallax = useRef()

  return (
    <>
      <Parallax ref={parallax} pages={2}>
        <ParallaxLayer offset={0}>
          <div className="z-50 px-2 py-1 text-center bg-light text-dark">
            &copy; 2021, Built by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/danim47c"
            >
              <u>@danim47c</u>
            </a>{" "}
            with{" "}
            <a target="_blank" rel="noreferrer" href="https://nextjs.org/">
              Next.js
            </a>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          factor={2}
          style={{
            backgroundImage: "url(/home/stars.svg)",
            backgroundSize: "cover",
          }}
        />

        {/* 1º Page */}
        <ParallaxLayer
          offset={0}
          speed={0.3}
          className="z-10 flex items-center justify-center"
        >
          <h1 className="text-6xl font-bold text-white md:text-8xl">
            danim47c
          </h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={-0.4}
          style={{
            display: "block",
            width: "10%",
            maxWidth: "160px",
            minWidth: "100px",
            marginLeft: "calc(100% - 200px)",
            marginTop: "10%",
          }}
        >
          <img src="/icon.webp" />
        </ParallaxLayer>

        {/* 2º Page */}
        <ParallaxLayer
          offset={0.7}
          speed={0.45}
          className="flex items-center justify-center"
        >
          <div className="flex flex-col items-end w-full max-w-screen-sm mx-12 text-light">
            <p className="text-3xl font-light">{`"${about.quote}"`}</p>
            <h6 className="self-end text-4xl">{about.quoteAuthor}</h6>
          </div>
        </ParallaxLayer>

        {contacts.map((contact, i) => (
          <ParallaxLayer
            offset={1.6 + 0.2 * i}
            speed={random({ min: 0.4, max: 0.6 })}
            key={contact.id}
            className="block"
          >
            <a target="_blank" rel="noreferrer" href={contact.url}>
              <img
                alt={contact.url}
                src={contact.image.url}
                width={256}
                height={256}
                className="w-32 h-32 text-light"
                style={{
                  marginLeft: `calc(${
                    (100 / (contacts.length + 1)) * (i + 1)
                  }% - 4rem)`,
                }}
              />
            </a>
          </ParallaxLayer>
        ))}
      </Parallax>
    </>
  )
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => ({
  props: await client.request(HomePageQuery),
})

export default HomePage
