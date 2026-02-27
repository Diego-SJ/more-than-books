'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import { Bold, Italic, List, ListOrdered, Link as LinkIcon } from 'lucide-react'
import { useEffect, useCallback } from 'react'

type ToolbarButtonProps = {
	onClick: () => void
	active?: boolean
	children: React.ReactNode
	title: string
}

function ToolbarButton({ onClick, active, children, title }: ToolbarButtonProps) {
	return (
		<button
			type="button"
			onClick={onClick}
			title={title}
			className={`p-1.5 rounded hover:bg-slate-200 transition-colors ${
				active ? 'bg-slate-200 text-primary' : 'text-slate-600'
			}`}
		>
			{children}
		</button>
	)
}

type RichTextEditorProps = {
	value: string
	onChange: (html: string) => void
	placeholder?: string
}

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
	const handleUpdate = useCallback(
		({ editor }: { editor: ReturnType<typeof useEditor> }) => {
			if (!editor) return
			const html = editor.getHTML()
			// Tiptap returns <p></p> for empty content
			onChange(html === '<p></p>' ? '' : html)
		},
		[onChange]
	)

	const editor = useEditor({
		immediatelyRender: false,
		extensions: [
			StarterKit,
			Link.configure({
				openOnClick: false,
				HTMLAttributes: { class: 'text-primary underline' },
			}),
			Placeholder.configure({
				placeholder: placeholder ?? 'Escribe aquí...',
			}),
		],
		content: value || '',
		onUpdate: handleUpdate,
		editorProps: {
			attributes: {
				class:
					'min-h-[150px] px-3 py-2 font-roboto text-sm text-foreground focus:outline-none prose prose-slate max-w-none',
			},
		},
	})

	// Sync external value changes (e.g. form reset)
	useEffect(() => {
		if (editor && !value && editor.getHTML() !== '<p></p>') {
			editor.commands.clearContent()
		}
	}, [value, editor])

	if (!editor) return null

	const setLink = () => {
		const url = window.prompt('URL del enlace:')
		if (url) {
			editor.chain().focus().setLink({ href: url }).run()
		} else {
			editor.chain().focus().unsetLink().run()
		}
	}

	return (
		<div className="border border-input rounded-md overflow-hidden bg-background w-full">
			{/* Toolbar */}
			<div className="flex items-center gap-0.5 px-2 py-1.5 border-b border-input bg-slate-50">
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleBold().run()}
					active={editor.isActive('bold')}
					title="Negrita"
				>
					<Bold size={16} />
				</ToolbarButton>
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleItalic().run()}
					active={editor.isActive('italic')}
					title="Cursiva"
				>
					<Italic size={16} />
				</ToolbarButton>
				<span className="w-px h-5 bg-slate-200 mx-1" />
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleBulletList().run()}
					active={editor.isActive('bulletList')}
					title="Lista"
				>
					<List size={16} />
				</ToolbarButton>
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleOrderedList().run()}
					active={editor.isActive('orderedList')}
					title="Lista numerada"
				>
					<ListOrdered size={16} />
				</ToolbarButton>
				<span className="w-px h-5 bg-slate-200 mx-1" />
				<ToolbarButton
					onClick={setLink}
					active={editor.isActive('link')}
					title="Enlace"
				>
					<LinkIcon size={16} />
				</ToolbarButton>
			</div>

			{/* Editor */}
			<EditorContent editor={editor} />
		</div>
	)
}
