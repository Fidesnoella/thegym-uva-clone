import Current from '@/components/sections/Current'
import Hero from '@/components/sections/Hero'
import MoreNews from '@/components/sections/News'
import Visit from '@/components/sections/Visit'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>University of Amsterdam</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Hero />
      <Current />
      <MoreNews />
      <Visit />
    </>
  )
}
