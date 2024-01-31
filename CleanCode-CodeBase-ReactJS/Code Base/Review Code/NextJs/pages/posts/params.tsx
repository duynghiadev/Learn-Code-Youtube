import { useRouter } from 'next/router';
import { resolve } from 'path';
import * as React from 'react';

export interface ParamsPostPageProps {}

export default function ParamsPostPage(props: ParamsPostPageProps) {
	const router = useRouter();
	return (
		<div>
			<h1>Params Post Page</h1>
			<p>Query : {JSON.stringify(router.query)}</p>
		</div>
	);
}
export async function getServerSideProps() {
	await new Promise((resolve) => setTimeout(resolve, 3000));
	return {
		props: {},
	};
}
