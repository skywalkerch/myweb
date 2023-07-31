import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import GlobalMusicPlayer from '../javascripts/GlobalMusicPlayer';
import styles from './index.module.css';
 
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (

  <header className={clsx('hero hero--primary', styles.heroBanner)}>
   
    <div className='container'>
    <h1 style={{ fontSize: '40px' }} className="hero__title">{siteConfig.title}</h1>
  <p className="hero__subtitle">{siteConfig.tagline}</p>
  <Link
  className="button button--secondary button--lg"
  to="/docs/笔记/计算机/介绍"
  style={{ backgroundColor: '#81c8be',border:'2px solid #81c8be' }}
>
  从这里进去吧
</Link>

  </div>
  </header>
  );
}
// <HomepageFeatures />
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="skywalker的技术博客">
      <GlobalMusicPlayer />
      <HomepageHeader />
      <main>
      
      </main>
    </Layout>
  );
}
