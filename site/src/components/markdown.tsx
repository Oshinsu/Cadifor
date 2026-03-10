import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownProps = {
  content: string;
};

export function Markdown({ content }: MarkdownProps) {
  return (
    <div className="prose prose-invert max-w-none prose-headings:font-serif prose-headings:text-stone-100 prose-p:text-stone-300 prose-strong:text-stone-100 prose-a:text-amber-300 prose-blockquote:border-l-amber-400 prose-blockquote:text-stone-300 prose-li:text-stone-300 prose-hr:border-stone-800 prose-code:text-amber-200 prose-pre:bg-stone-950">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
