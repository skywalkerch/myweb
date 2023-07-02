import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '知识星球',
    Svg: require('@site/static/img/computer-and-people-svgrepo-com.svg').default,
    description: (
      <>
       
      </>
    ),
  },
  {
    title: '人工智能',
    Svg: require('@site/static/img/ai-mi-algorithm-svgrepo-com.svg').default,
    description: (
      <>
      
      </>
    ),
  },
  {
    title: '疾驰人生',
    Svg: require('@site/static/img/walk-svgrepo-com.svg').default,
    description: (
      <>
   
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
