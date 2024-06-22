import Link from "next/link";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Jumbotron>
        <h1>My Next App</h1>
        <p>This is my Next.JS App</p>
        <p>
          <Link href="/posts">
            <Button variant="primary">Posts</Button>
          </Link>
        </p>
      </Jumbotron>
    </Layout>
  );
}
