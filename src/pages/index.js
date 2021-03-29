import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Welcome to our Documentation',
    description: (
      <>
        <br />
        Private Social Network:<br />
        Today WhatsApp is considered the most popular C2C
        messaging app in the world, surpassing Messenger with more than 2 billion users.
      </>
    ),
  },
  {

    description: (
      <><br /><br />
     Our platform is verified by WhatsApp and Facebook. An authenticated account will appear in the most used communication channel.
      </>
    ),
  },
  {

    description: (
      <><br /><br />
      Unleash the power of the most reliable private
      network to provide conventional commerce and customer service

      </>
    ),
  },
  {
    description: (
      <><br />
    WhatsApp,  Facebook Messenger,  Facebook Wall(beta),  Instagram(beta),  Twiter (beta),  App Chat,  SMS,  Website,  BOT’s,  Telegram (beta).
      </>
    ),
  },
  {
    description: (
      <><br />
        Message flow architecture:<br />
        In the OmniQ platform the different channels are configured,
        the bot is defined with the flow of messages and the client's interation with the platform and finally they are transferred to the five9 platform to be attended by an agent.

      </>
    ),
  },



];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Documentation
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
