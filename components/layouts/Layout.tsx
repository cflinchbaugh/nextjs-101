import Image from 'next/image';
import styles from './layout.module.scss';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <Link href="/">Home</Link>

        <div>
          Default Layout Navbar
        </div>

        <div className={styles.profile}>
          <Image
            src="/images/profile.jpg" // Route of the image file
            height={50} // Desired size with correct aspect ratio
            width={50} // Desired size with correct aspect ratio
            alt="Optimized Image Example"
          />
        </div>
      </div>

      <main>
        {children}
      </main>

      <footer>
        Footer
      </footer>
    </>
  )
}

export default Layout
