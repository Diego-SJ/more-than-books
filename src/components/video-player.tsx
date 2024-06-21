'use client'

type LazyVideoPlayerProps = {
	src: string
	poster?: string
	width?: string
	height?: string
}

const LazyVideoPlayer = ({
	src,
	poster,
	width = '100%',
	height = 'auto'
}: LazyVideoPlayerProps) => {
	return (
		<video width={width} height={height} poster={poster} controls>
			<source src={src} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	)
}

export default LazyVideoPlayer
