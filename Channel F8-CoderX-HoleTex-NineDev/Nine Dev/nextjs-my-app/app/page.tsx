import Link from "next/link";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        pariatur praesentium a harum optio fugiat, fugit sunt iste facere
        perspiciatis sapiente dolore architecto nesciunt dicta sint, voluptas
        atque. Nostrum, consectetur?
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iure rerum
        facilis doloremque sequi aliquid illo esse voluptatum voluptatem placeat
        explicabo totam odit enim laudantium, natus ad ex deleniti cum.
      </p>
      <Link href="/dashboard">
        <div className={styles.btn}>See List Nine Dev</div>
      </Link>
    </div>
  );
}
