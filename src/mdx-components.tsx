import { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
// other imports...

export function useMDXComponents(): MDXComponents {
	return {
		a: ({ children, href }: any) => (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="text-primary hover:underline font-roboto"
			>
				{children}
			</a>
		),
		// hr: (props: React.ComponentProps<typeof Divider>) => (
		// 	<Divider
		// 		style=
		// 		{...props}
		// 	/>
		// ),
		h1: (props: any) => <h1 className="font-roboto text-3xl font-bold mt-4 mb-2" {...props} />,
		h2: (props: any) => <h2 className="font-roboto text-2xl font-bold mt-4 mb-2" {...props} />,
		h3: (props: any) => <h3 className="font-roboto text-xl font-bold mt-4 mb-2" {...props} />,
		h4: (props: any) => <h4 className="font-roboto text-lg font-bold mt-4 mb-2" {...props} />,
		h5: (props: any) => <h5 className="font-roboto text-base font-bold mt-4 mb-2" {...props} />,
		h6: (props: any) => <h6 className="font-roboto text-sm font-bold mt-4 mb-2" {...props} />,
		p: (props: any) => <p className="font-roboto text-base font-normal my-4" {...props} />,
		img: (props: any) => (
			<Image
				width={500}
				height={500}
				rel="blog post"
				{...(props as ImageProps)}
				alt="blog post"
				className="mx-auto"
			/>
		),

		code: (props: any) => (
			<code
				className="font-mono text-sm bg-gray-100 p-2 rounded-md max-w-full overflow-auto inline-block"
				{...props}
			/>
		),
		del: (props: any) => <del className="font-roboto text-base font-normal my-4" {...props} />,
		blockquote: (props: any) => (
			<blockquote className="font-roboto text-base font-normal my-4 p-4 py-2 bg-gray-100 border-l-4 border-primary italic">
				{props.children}
			</blockquote>
		),
		ul: (props: any) => (
			<ul className="font-roboto text-base font-normal my-4 list-disc pl-4" {...props} />
		),
		li: (props: any) => <li className="font-roboto text-base font-normal my-2" {...props} />,
		ol: (props: any) => (
			<ol className="font-roboto text-base font-normal my-4 list-decimal pl-4" {...props} />
		),
		pre: (props: any) => (
			<pre
				className="font-mono text-sm bg-gray-100 p-2 rounded-md max-w-full overflow-auto block"
				{...props}
			/>
		),
		em: (props: any) => <em className="font-roboto text-base font-normal my-4" {...props} />,
		strong: (props: any) => <strong className="font-roboto text-base font-bold my-4" {...props} />,
		table: (props: any) => (
			<table
				className="table-auto w-full my-4 overflow-hidden border border-gray-200 divide-gray-200"
				{...props}
			/>
		),
		thead: (props: any) => (
			<thead className="bg-gray-100 border-b border-gray-200 divide-gray-200" {...props} />
		),
		tbody: (props: any) => <tbody className="bg-white divide-y divide-gray-200" {...props} />,
		tr: (props: any) => <tr className="divide-y divide-gray-200" {...props} />,
		th: (props: any) => <th className="font-roboto text-base font-bold p-3" {...props} />,
		td: (props: any) => (
			<td
				className="font-roboto text-base font-normal p-2 text-center divide-y divide-gray-200"
				{...props}
			/>
		)
	}
}
