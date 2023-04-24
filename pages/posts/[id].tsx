import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app';
import AltLayout from '../../components/layouts/AltLayout';
import { useRouter } from 'next/router';

// Dynamic Routes Example
const PostDetails: NextPageWithLayout = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Post: {id}</p>
}

PostDetails.getLayout = function getLayout(page: ReactElement) {
  return (
    <AltLayout>
      {page}
    </AltLayout>
  )
}

export default PostDetails