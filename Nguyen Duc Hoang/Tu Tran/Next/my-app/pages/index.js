import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div>
        <h1 className={styles.title}>Home Page</h1>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam qui nostrum hic sequi
          labore, eligendi facere fugit unde, at accusantium atque accusamus ea quibusdam minima, ex
          expedita dolorum distinctio laboriosam.
        </p>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel optio, blanditiis est modi
          asperiores illum consequuntur numquam. Excepturi vitae earum aliquid! Ea, quo? Tempore
          optio itaque sit quae. Nihil, mollitia.
        </p>

        <Link legacyBehavior href='/coders/'>
          <a className='btn'>See All Coders</a>
        </Link>

        <style jsx>
          {`
            .btn {
              display: block;
              width: 150px;
              padding: 8px 0;
              margin: 20px auto;
              background: #ffbf49;
              border-radius: 4px;
              color: black;
              text-align: center;
            }
          `}
        </style>
      </div>
    </>
  )
}
