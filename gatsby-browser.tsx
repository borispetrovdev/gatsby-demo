import { WrapPageElementBrowserArgs } from "gatsby";

import * as React from "react"
import { Layout } from "./src/components/layout";
import './src/global.css'

export const wrapPageElement = ({ element, props }: WrapPageElementBrowserArgs  ) => {
  return (
    <Layout {...props}>
      {element}
    </Layout>
  )
}