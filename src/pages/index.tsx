import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { Container } from '../../styles/pages/Home';

function Home() {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    async function getBreedList() {
      const res = await fetch('https://dog.ceo/api/breeds/list/all');
      const data = await res.json();

      const breedsList = Object.keys(data.message);
      setData(breedsList);
    }
    getBreedList();
  }, []);

  return (
    <Container>
      <Head>
        <title>Dogs breeds</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <Link href={`/dogs/${item}`}>
              <a>{item}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Home;
