import { GraphQLClient } from "graphql-request"

export const client = new GraphQLClient("https://graphql.datocms.com/", {
  headers: {
    authorization: `Bearer ${process.env.DATOCMS_TOKEN}`,
  },
})

export const imageFragment = `
responsiveImage {
  srcSet
  webpSrcSet
  sizes
  src
  width
  height
  aspectRatio
  alt
  bgColor
  base64
}
`
export type imageFragmentType = {
  responsiveImage: {
    srcSet: string
    webSrcSet: string
    sizes: string
    src: string
    width: number
    height: number
    aspectRatio: number
    alt: string
    bgColor: string
    base64: string
  }
}
