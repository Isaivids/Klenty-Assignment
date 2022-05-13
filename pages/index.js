import Head from 'next/head'
import Page from './components/Page'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="Klenty" content="Klenty Assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page/>
    </div>
  )
}
