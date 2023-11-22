import { LayoutProps } from '@/models/index';
import Link from 'next/link';
import React, { useEffect } from 'react';

export function MainLayout({ children }: LayoutProps) {
	useEffect(() => {
		console.log('Main Layout mounting');
		return () => console.log('Main Layout unmounting');
	});
	return (
		<div>
			<h1>Main Layout</h1>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/posts">
				<a>Post</a>
			</Link>
			<div>{children}</div>
		</div>
	);
}
