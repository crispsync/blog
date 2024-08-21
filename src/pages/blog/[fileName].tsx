import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map((filename) => ({
    params: { fileName: filename.replace('.md', '') },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', `${params?.fileName}.md`),
    'utf-8'
  );

  const [meta, content] = markdownWithMeta.split('---').slice(1);
  const metaLines = meta.split('\n').filter(Boolean);
  const title = metaLines?.find((line) => line.startsWith('title:'))?.replace('title:', '').trim() ?? '';
  const date = metaLines?.find((line) => line.startsWith('date:'))?.replace('date:', '').trim() ?? '';

  return {
    props: {
      title,
      date,
      content,
    },
  };
};

const BlogPost: React.FC<BlogPostProps> = ({ title, date, content }) => {
  return (
    <article className="prose dark:prose-invert mx-auto mt-12">
      <h1>{title}</h1>
      <p><i>{date}</i></p>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
        {content}
      </ReactMarkdown>
    </article>
  );
};

export default BlogPost;
