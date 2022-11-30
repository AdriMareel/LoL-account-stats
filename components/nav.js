import Link from 'next/link';

export default function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/" legacyBehavior>
						<a>LOL ACCOUNT STATS</a>
					</Link>
				</li>
				<li>
					<Link href="/stats" legacyBehavior>
						<a>Statistics</a>
					</Link>
				</li>
				<li>
					<Link href="/multi-search" legacyBehavior>
						<a>Multi-Search</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
}