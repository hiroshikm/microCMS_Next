import { microcmsClient } from "../../../libs/microcms";
import MarkdownRenderer from "../components/MarkdownRenderer";

export default async function ArticlePage({
  params,
}: {
  params: { slug: string; id: string };
}) {
  const data = await microcmsClient.get({
    endpoint: "articles",
    queries: { filters: `slug[equals]${params.slug}` },
  });
  console.log(params.id);
  const article = data.contents[0];

  return (
    <div>
      <h1>{article.title}</h1>
      <MarkdownRenderer content={article.content} />
    </div>
  );
}
