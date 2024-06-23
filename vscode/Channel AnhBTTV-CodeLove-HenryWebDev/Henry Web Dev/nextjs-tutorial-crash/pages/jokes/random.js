import Link from "next/link";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Layout from "../../components/Layout";
import { getRandomJoke } from "../../lib/joke";

const Random = ({ joke }) => {
  return (
    <Layout>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>Here's your random joke for today</Card.Title>
          <Card.Text>{joke.value}</Card.Text>
          <Link href="/">
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};

// Dữ liệu phụ thuộc vào mỗi request, nhưng mà vẫn tạo ra HTML tĩnh cho front-end, nên vẫn tốt cho SEO
export const getServerSideProps = async () => {
  const joke = await getRandomJoke();

  if (!joke)
    return {
      notFound: true, // 404 page
    };

  // return {
  // 	redirect: {
  // 		destination: '/posts',
  // 		permanent: false
  // 	}
  // }

  return {
    props: {
      joke,
    },
  };
};

export default Random;
