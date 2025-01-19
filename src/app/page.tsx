import Link from "next/link";
import { microcmsClient } from "../../libs/microcms";

export default async function Home() {
  const { contents } = await microcmsClient.get({
    endpoint: "articles",
  });
  console.log(contents);
  return (
    <main>
      <h1>サポートサイト</h1>
      <ul>
        {contents.map((article: any) => (
          <li key={article.id}>
            <Link href={`/${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
