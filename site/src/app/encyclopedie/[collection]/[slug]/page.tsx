import { notFound } from "next/navigation";
import { Markdown } from "@/components/markdown";
import {
  encyclopaediaCollections,
  getCollection,
  getCollectionLabel,
  getEntry,
  type CollectionKey,
} from "@/lib/content";

type EntryPageProps = {
  params: Promise<{ collection: CollectionKey; slug: string }>;
};

export async function generateStaticParams() {
  return encyclopaediaCollections.flatMap((collection) =>
    getCollection(collection).map((entry) => ({
      collection,
      slug: entry.slug,
    })),
  );
}

export default async function EntryPage({ params }: EntryPageProps) {
  const { collection, slug } = await params;

  if (!encyclopaediaCollections.includes(collection)) {
    notFound();
  }

  const entry = getEntry(collection, slug);

  if (!entry) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 pb-24 pt-12">
      <div className="mb-10 rounded-[2rem] border border-white/8 bg-white/[0.03] p-8">
        <p className="text-xs uppercase tracking-[0.24em] text-amber-200">
          {getCollectionLabel(collection)}
        </p>
        <h1 className="mt-3 font-serif text-5xl text-stone-50">{entry.title}</h1>
        <p className="mt-4 text-sm uppercase tracking-[0.22em] text-stone-500">
          Source : {entry.sourcePath}
        </p>
      </div>
      <Markdown content={entry.body} />
    </main>
  );
}
