import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'World',
    Svg: require('@site/static/tabler/world.svg').default,
    description: (
      <>
        ワールド製作などに関しての知見を集めるページです。
      </>
    ),
    btnText: 'Worldのページに移動',
    btnUrl: '/world/',
  },
  {
    title: 'Avatar',
    Svg: require('@site/static/tabler/user.svg').default,
    description: (
      <>
        アバター改変などに関しての知見を集めるページです。
      </>
    ),
    btnText: 'Avatarのページに移動',
    btnUrl: '/avatar/',
  },
  {
    title: 'Misc',
    Svg: require('@site/static/tabler/gizmo.svg').default,
    description: (
      <>
        その他の知見を集めるページです。
      </>
    ),
    btnText: 'Miscのページに移動',
    btnUrl: '/misc/',
  },
  /*{
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },*/
];

function Feature({Svg, title, description, btnText, btnUrl}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={btnUrl}>
            {btnText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row justify-content-md-center">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
