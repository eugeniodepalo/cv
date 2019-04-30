import Head from 'next/head';
import { Fragment } from 'react';

export default ({ title, children }: any) => {
  return (
    <Fragment>
      <Head>
        <title>Eugenio Depalo - {title}</title>
      </Head>

      {children}
    </Fragment>
  )
}
