import React from 'react';
import Head from 'next/head';

export interface Props {
  title: string;
  description: string;
}

const PageInfo: React.FC<Props> = ({ title, description }: Props) => (
  <Head>
    <title>{`${title} - Окна Берта`}</title>
    <meta name="description" content={description} />
  </Head>
);

export default PageInfo;
