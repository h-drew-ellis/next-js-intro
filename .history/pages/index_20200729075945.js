import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home ({ allPostsData }) {
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
       <h2 className={utilStyles.headingLg}>Blog</h2>
       <ul className={utilStyles.list}>
         {allPostsData.map(({ id, date, title}) => (
           <li className={utilStyles.listItem} key={id}>
             <Link href="/posts/[id]" as={`/posts/${id}`}>
               <a>{title}</a>
             </Link>
             <br />
             <small className={utilStyles.lightText}>
               <Date dateString={date} />
             </small>
           </li>
         ))}
       </ul>
      </section>
    </Layout>
  )
}
