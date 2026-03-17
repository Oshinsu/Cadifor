import type { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

type MarkdownProps = {
  content: string;
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function extractText(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(extractText).join("");
  if (children && typeof children === "object" && "props" in children) {
    return extractText((children as { props: { children: ReactNode } }).props.children);
  }
  return String(children ?? "");
}

const components: Components = {
  h2: ({ children }) => {
    const id = slugify(extractText(children));
    return <h2 id={id}>{children}</h2>;
  },
  h3: ({ children }) => {
    const id = slugify(extractText(children));
    return <h3 id={id}>{children}</h3>;
  },
};

export function Markdown({ content }: MarkdownProps) {
  return (
    <div className="prose prose-invert prose-imperial max-w-none prose-headings:font-serif prose-headings:tracking-wide prose-p:text-slate-300 prose-p:leading-[1.85] prose-li:text-slate-300 prose-li:leading-[1.85] prose-pre:bg-black/40">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
