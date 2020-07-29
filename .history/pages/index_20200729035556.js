import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi! I'm Ellis and this is my Next.js tutorial build. More of my projects on <a href="https://github.com/h-drew-ellis">Github</a>.</p>
        <p>
          This is just a simple tutorial website build for Next.js introduction or React SSR-Server Side Rendering. 
          Not much to see here.
           You can learn this build from {' '}
          <a href="https://nextjs.org/learn">Vercel</a>.
        </p>
      </section>
    </Layout>
  )
}
