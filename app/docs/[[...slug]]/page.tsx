import type { Metadata } from 'next';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';

import { source } from '@/app/source';

// The PageProps interface to define params as a Promise.
interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

// Make the page component async because params is a Promise.
export default async function Page({
  params,
}: PageProps) {
  // Await params to resolve it
  const { slug } = await params;

  // Fetch the page using the resolved slug
  const page = await source.getPage(slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

// Make generateMetadata async because it also involves async operations.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  // Await params to resolve it
  const { slug } = await params;

  const page = await source.getPage(slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
