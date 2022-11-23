import Head from 'next/head'
import Image from 'next/image'
import Home from '../Components/Home';


export default function Index() {
  return (
    <div>
      <Head>
        <title>Scroll app - Write Content and generate is an image to share on Twitter</title>
        <meta name="description" content="Generate perfect image of your content to share it on Twitter for easy readability." />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2286%22>📜</text></svg>" />
      </Head>

      <Home />
    </div>
  )
}
