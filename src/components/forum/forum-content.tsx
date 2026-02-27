'use client'

import MarkdownContent from '@/components/ui/markdown-content'

type ForumContentProps = {
	content: string
}

export default function ForumContent({ content }: ForumContentProps) {
	const isHtml = content.trimStart().startsWith('<')

	if (isHtml) {
		return <div dangerouslySetInnerHTML={{ __html: content }} />
	}

	return <MarkdownContent markdown={content} />
}
