import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Bienvenido a nuestra documentación',
    description: (
      <><br />
     Bienvenido a nuestra Documentación donde te mostraremos cómo funciona nuestra instancia 😀 Saludos 😀.
      </>
    ),
  },
  {
    description: (
      <>
        <br />
         Red social privada:<br />
        En la actualidad, WhatsApp se considera la app de mensajería C2C más popular del mundo,
        superando a Messenger con más de 2.000 millones de usuarios..
      </>
    ),
  },
  {

    description: (
      <><br /><br />
     Nuestra plataforma está verificada por WhatsApp y Facebook. Una cuenta autentificada aparecerá en el canal de comunicación más utilizado.
      </>
    ),
  },
  {

    description: (
      <><br />
      Libere el poder de la red privada más fiable
      de la red privada más fiable para ofrecer un comercio y un servicio al cliente convencionales

      </>
    ),
  },
  {
    description: (
      <><br />
      Integración con diferentes canales:<br /><br />
    WhatsApp,  Facebook Messenger,  Facebook Wall(beta),  Instagram(beta),  Twiter (beta),  App Chat,  SMS,  Website,  BOT’s,  Telegram (beta).
      </>
    ),
  },
  {
    description: (
      <><br />
        Arquitectura de flujo de mensajes:<br />
        En la plataforma OmniQ se configuran los diferentes canales,
        se define el bot con el flujo de mensajes y la interación del cliente con la plataforma y
        finalmente se transfieren a la plataforma five9 para ser atendidos por un agente.

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
