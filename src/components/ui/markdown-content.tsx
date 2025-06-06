'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import 'highlight.js/styles/github-dark.css'
import { useMDXComponents } from '@/mdx-components'

export default function MarkdownContent({ markdown }: { markdown: string }) {
	const components = useMDXComponents()
	return (
		<ReactMarkdown
			remarkPlugins={[remarkGfm]}
			rehypePlugins={[rehypeHighlight, rehypeSlug]}
			components={components}
		>
			{markdown}
		</ReactMarkdown>
	)
}
