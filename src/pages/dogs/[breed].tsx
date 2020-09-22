import React from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { Container } from '../../../styles/pages/Dogs';

interface DogsProps extends Object {
  data: string;
  breed: string;
}

function Dogs({ data, breed }: DogsProps) {
  return (
    <Container>
      <Head>
        <title>{breed}</title>
      </Head>
      <Link href="/">
        <a>Voltar</a>
      </Link>
      <img src={data} alt="dog image" />
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://dog.ceo/api/breed/${params.breed}/images/random`
  );
  const data = await res.json();

  return { props: { data: data.message, breed: params.breed } };
};

export default Dogs;
