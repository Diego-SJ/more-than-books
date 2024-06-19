'use client'
import React, { useEffect, useRef, useState } from 'react'

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
	const videoRef = useRef(null)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
					observer.disconnect()
				}
			},
			{ threshold: 0.1 }
		)

		if (videoRef.current) {
			observer.observe(videoRef.current)
		}

		return () => {
			if (videoRef.current) {
				observer.unobserve(videoRef.current)
			}
		}
	}, [])

	return (
		<video width={width} height={height} poster={poster} controls>
			<source src={src} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	)
}

export default LazyVideoPlayer
