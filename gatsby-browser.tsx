import { WrapPageElementBrowserArgs } from "gatsby";
import styled from "styled-components";

import * as React from "react"
import { Layout } from "./src/components/layout";
// Wraps every page in a component

const PageWrapper = styled.div({
})

export const wrapPageElement = ({ element, props }: WrapPageElementBrowserArgs  ) => {
  return (
    <Layout {...props}>
      <PageWrapper>
        {element}
      </PageWrapper>
    </Layout>
  )
}