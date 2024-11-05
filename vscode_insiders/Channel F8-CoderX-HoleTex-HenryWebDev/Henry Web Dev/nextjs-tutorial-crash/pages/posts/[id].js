import Link from "next/link";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Layout from "../../components/Layout";
import { getPostById, getPostIds } from "../../lib/post";
import spinnerStyles from "../../styles/Spinner.module.css";

const Post = ({ post }) => {
  const router = useRouter();

  // Nếu trang chưa tạo ra, isFallback của router luôn luôn là true (router === true)
  // Và trang tạm thời sau đây sẽ được render

  if (router.isFallback) {
    return (
      <Spinner
        animation="border"
        role="status"
        variant="dark"
        className={spinnerStyles.spinnerLg}
      >
        <span className="sr-only">LOADING....</span>
      </Spinner>
    );
  }

  // Khi getStaticProps() chạy xong lần đầu tiên
  // Các lần sau thì trang số 6 (ví dụ) sẽ được đưa vào danh sách prerendered
  return (
    <Layout>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Link href="/posts">
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};

// Lấy dữ liệu kiểu tĩnh, nhưng dữ liệu tĩnh nào thì còn phụ thuộc vào path params
export const getStaticPaths = async () => {
  const paths = await getPostIds(5);
  console.log(paths);

  return {
    paths,
    // fallback: false // bất kỳ path nào không returned bởi getStaticPaths sẽ tới trang 404
    fallback: true, // path nào không returned ngay lập tức sẽ show trang "tạm thời" => đợi getStaticProps chạy
    // => getStaticProps chạy xong => return trang hoàn chỉnh
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostById(params.id);

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
};

export default Post;
