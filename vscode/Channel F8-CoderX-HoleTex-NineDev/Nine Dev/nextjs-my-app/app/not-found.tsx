import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Opps...</h1>
      <h2>This page cannot be found 🤢</h2>
      <p>
        Go back to the <Link href="/">HomePage</Link>
      </p>
    </div>
  );
};

export default NotFound;
