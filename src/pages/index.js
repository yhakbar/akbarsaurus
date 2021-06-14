import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function getBlobLink(url) {
  const { siteConfig } = useDocusaurusContext();
  if (url[0] !== '/') url = '/' + url
  return `${siteConfig.customFields.githubFileUrl}${url}`
}

function getFolderLink(url) {
  const { siteConfig } = useDocusaurusContext();
  if (url[0] !== '/') url = '/' + url
  return `${siteConfig.customFields.githubFolderUrl}${url}`
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            fontSize: '20px',
          }}>
          <p>Exploring Docusaurus:</p>
          <p>It has built in <Link to="/blog">blog</Link> support.</p>
          <p>It also has built in <Link to="/docs">documentation</Link> support.</p>
          <p>This page is rendered from a <Link to={getBlobLink('/src/pages/index.js')}>javascript file</Link> using React.</p>
          <p>The blog and doc pages are written in Markdown (<Link to={getFolderLink('docs')}>docs</Link> + <Link to={getFolderLink('blog')}>blog</Link>).</p>
          <p>Check out the <Link to="/blog/2021/06/12/trying-out-docusaurus">first blog post</Link> for a walk-through of how this site was created.</p>
        </div>
      </main>
    </Layout >
  );
}
