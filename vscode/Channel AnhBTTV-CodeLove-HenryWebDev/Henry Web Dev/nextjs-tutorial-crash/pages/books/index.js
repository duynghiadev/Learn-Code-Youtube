import Link from "next/link";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Layout from "../../components/Layout";
import { getBooks } from "../../lib/book";

const Books = ({ books }) => {
  return (
    <Layout>
      {books.map((book) => (
        <Card className="my-3 shadow" key={book.bookName}>
          <Card.Body>
            <Card.Title>{book.bookName}</Card.Title>
            <Card.Text>{book.bookContent}</Card.Text>
            <Link href="/">
              <Button variant="dark">Back</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Layout>
  );
};

// Du lieu phu thuoc vao moi request, nhung ma van tao ra HTML tinh cho front-end, nen van tot cho SEO
export const getStaticProps = async () => {
  const books = await getBooks();
  console.log(books);
  return {
    props: {
      books,
    },
  };
};

export default Books;
