import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app';
import Link from 'next/link';
import AltLayout from '../../components/layouts/AltLayout';
import useSwapi from '../../api/useSwapi';
import Head from 'next/head';

const LoadingMarkup = <div>loading...</div>
const ErrorMarkup = <div>failed to load</div>

const FirstPost: NextPageWithLayout = () => {
  const { data, isLoading, isError } = useSwapi()
  const bodyMarkup = isError ? (ErrorMarkup) : (isLoading ? LoadingMarkup : (<>
    <h1>First Post: {data.name}</h1>
    <h2>
      <Link href="/">Back to home</Link>
    </h2>
  </>))

  return (
    <>
    <Head>
      <title>First Post</title>
    </Head>
    {bodyMarkup}
    </>
  )
}

FirstPost.getLayout = function getLayout(page: ReactElement) {
  return (
    <AltLayout>
      {page}
    </AltLayout>
  )
}

export default FirstPost