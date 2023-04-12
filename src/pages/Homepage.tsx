import loadable from '@loadable/component';
import React from 'react';

const Hero = loadable(() => import('@/components').then((mod) => mod.Hero));

const Homepage: React.FunctionComponent = () => {
  return <Hero />;
};

export default Homepage;
