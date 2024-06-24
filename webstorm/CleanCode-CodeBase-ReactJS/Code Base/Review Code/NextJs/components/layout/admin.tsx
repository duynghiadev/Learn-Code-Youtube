import { LayoutProps } from '@/models/index';
import Link from 'next/link';
import * as React from 'react';

export function Adminlayout({ children }: LayoutProps) {
	return (
		<div>
			<h1>Main Layout</h1>
			<div>Sidebar</div>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/post">
				<a>Post</a>
			</Link>
			<div>{children}</div>
		</div>
	);
}
