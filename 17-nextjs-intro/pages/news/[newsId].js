import { useRouter } from 'next/router';

export const DetailsPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;

  return <div>more news page</div>;
};

export default DetailsPage;
