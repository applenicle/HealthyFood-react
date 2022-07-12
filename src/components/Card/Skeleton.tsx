import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Card.module.scss';

const Skeleton = () => (
  <ContentLoader
    className={styles.block}
    speed={2}
    width={165}
    height={254}
    viewBox="0 0 165 254"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    {/* text */}
    <rect x="20" y="160" rx="6" ry="6" width="110" height="22" />
    {/* info */}
    <rect x="20" y="188" rx="6" ry="6" width="85" height="22" />
    {/* price */}
    <rect x="20" y="215" rx="9" ry="9" width="45" height="25" />
    {/* cart */}
    <rect x="115" y="215" rx="10" ry="10" width="28" height="28" />
    {/* img */}
    <rect x="20" y="15" rx="5" ry="5" width="124" height="124" />
  </ContentLoader>
);

export default Skeleton;
