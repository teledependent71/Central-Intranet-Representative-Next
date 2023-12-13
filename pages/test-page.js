import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import authorsResource from '../resources/authors'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Central Intranet Representative</title>
          <meta
            property="og:title"
            content="test-page - Central Intranet Representative"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_rh6r7hk) => (
            <>
              <h1 id={context_rh6r7hk?.Name}>Heading</h1>
            </>
          )}
          initialData={props.contextRh6r7hkProp}
          persistDataDuringLoading={true}
          key={props?.contextRh6r7hkProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextRh6r7hkProp = await authorsResource({
      ...context?.params,
    })
    return {
      props: {
        contextRh6r7hkProp: contextRh6r7hkProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
