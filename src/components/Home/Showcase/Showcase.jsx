import styles from './Showcase.module.css';

const showcaseData = [
	{
		title: 'Книга: "Мъдрости от Пепелта"',
		image: '/images/Examples/SpreadImage.png', // Place your screenshot in public/assets or src/assets
		description: 'A modern portfolio website showcasing my projects and skills.',
		link: 'https://krasimir-kostadinov.eu/madrosti-ot-pepelta',
		backgroundColor: '#f8b11a',
	},
	{
		title: 'Карти за намразване на цигарите',
		image: '/images/Examples/Cards-thumbnail.png',
		description: 'A demo e-commerce platform with shopping cart and payment integration.',
		link: 'https://krasimir-kostadinov.eu/motivacionni-karti',
		backgroundColor: 'linear-gradient(135deg, black, #9f1312)',
	},
	{
		title: 'Книга: "Жени, защо губим мъжете си?"',
		image: '/images/Examples/womens-book-thumbnail.png',
		description: 'A full-featured blog platform with markdown support and comments.',
		link: 'https://www.yana-dimitrova.com/',
		backgroundColor: 'linear-gradient(135deg, #95382b, white)',
	},
];

export const Showcase = () => {
	return (
		<section className={styles.showcaseSection}>
			<div className={styles.titleContainer}>
				<div className={styles.arrow}>
					<svg
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
						aria-hidden="true"
						className={styles.arrowSvg}
					>
						<path
							d="M12 5v14M12 19l-5-5M12 19l5-5"
							stroke="currentColor"
							strokeWidth="3.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
				<p className={styles.headingText}>Моите проекти</p>
				<div className={styles.arrow}>
					<svg
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
						aria-hidden="true"
						className={styles.arrowSvg}
					>
						<path
							d="M12 5v14M12 19l-5-5M12 19l5-5"
							stroke="currentColor"
							strokeWidth="3.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			</div>
			<div className={styles.cardGrid}>
				{showcaseData.map((site, idx) => (
					<div className={styles.card} key={idx}>
						<div style={{background: site.backgroundColor}} className={styles.imageWrapper}>
							<img
								src={site.image}
								alt={site.title}
								className={styles.image}
							/>
						</div>
						<div className={styles.cardContent}>
							<h3 className={styles.siteTitle}>{site.title}</h3>
							<p className={styles.siteDesc}>{site.description}</p>
							<a
								href={site.link}
								target="_blank"
								rel="noopener noreferrer"
								className={styles.button}
							>
								Visit Site
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
