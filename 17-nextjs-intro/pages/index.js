import Link from 'next/link';

function HomePage() {
  return (
    <>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/news/next-js">NextJs - clickBait</Link>
        </li>
        <li>Something - something</li>
      </ul>
    </>
  );
}

export default HomePage;
