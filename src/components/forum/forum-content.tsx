'use client'

import DOMPurify from 'isomorphic-dompurify'
import MarkdownContent from '@/components/ui/markdown-content'

type ForumContentProps = {
	content: string
}

export default function ForumContent({ content }: ForumContentProps) {
	const isHtml = content.trimStart().startsWith('<')

	if (isHtml) {
		const clean = DOMPurify.sanitize(content)
		return <div dangerouslySetInnerHTML={{ __html: clean }} />
	}

	return <MarkdownContent markdown={content} />
}
