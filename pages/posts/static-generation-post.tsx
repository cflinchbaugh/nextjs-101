import Link from 'next/link';
import type { NextPageWithLayout } from '../_app';

type Planet = {
  name: string
}
const StaticGenerationPost: NextPageWithLayout = ({ planet } : {
  planet: Planet
}) => {
  return (
    <>
      <h1>First Post: {planet.name}</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://swapi.dev/api/planets/2/')
  const planet: Planet = await res.json()

  // By returning { props: { planets } }, the Blog component
  // will receive `planets` as a prop at build time
  return {
    props: {
      planet,
    },
  }
}

export default StaticGenerationPost