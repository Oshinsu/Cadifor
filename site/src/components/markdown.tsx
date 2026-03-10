import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownProps = {
  content: string;
};

export function Markdown({ content }: MarkdownProps) {
  return (
    <div className="prose prose-invert max-w-none prose-headings:font-serif prose-headings:text-stone-100 prose-headings:leading-snug prose-h2:mt-12 prose-h2:border-b prose-h2:border-white/6 prose-h2:pb-4 prose-h2:text-3xl prose-h3:mt-8 prose-h3:text-xl prose-p:text-stone-300 prose-p:leading-8 prose-strong:text-stone-100 prose-a:text-violet-300 prose-a:no-underline hover:prose-a:text-violet-200 prose-blockquote:border-l-violet-400/40 prose-blockquote:text-stone-400 prose-blockquote:italic prose-li:text-stone-300 prose-hr:border-stone-800/50 prose-code:rounded-md prose-code:border prose-code:border-white/10 prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-violet-200 prose-code:before:content-none prose-code:after:content-none prose-pre:bg-stone-950 prose-pre:border prose-pre:border-white/8 prose-table:text-sm prose-th:text-stone-300 prose-th:font-semibold prose-td:text-stone-400 prose-tr:border-stone-800/50">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
