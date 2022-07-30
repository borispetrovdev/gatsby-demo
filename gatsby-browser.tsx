import { WrapPageElementBrowserArgs } from "gatsby";

import * as React from "react"
import { Layout } from "./src/components/layout";
import "@fontsource/ibm-plex-sans"
import './src/styles/global.css'

export const wrapPageElement = ({ element, props }: WrapPageElementBrowserArgs  ) => {
  return (
    <Layout {...props}>
      {element}
    </Layout>
  )
}