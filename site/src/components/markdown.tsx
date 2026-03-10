import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownProps = {
  content: string;
};

export function Markdown({ content }: MarkdownProps) {
  return (
    <div className="prose prose-invert prose-imperial max-w-none prose-headings:font-serif prose-headings:tracking-wide prose-p:text-stone-300 prose-p:leading-[1.85] prose-li:text-stone-300 prose-li:leading-[1.85] prose-pre:bg-black/40">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
