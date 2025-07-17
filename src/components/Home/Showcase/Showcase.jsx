import styles from './Showcase.module.css';

const showcaseData = [
	{
		title: 'Книга: "Мъдрости от Пепелта"',
		image: '/images/Examples/SpreadImage.png', // Place your screenshot in public/assets or src/assets
		description: 'A modern portfolio website showcasing my projects and skills.',
		link: 'https://krasimir-kostadinov.eu/madrosti-ot-pepelta',
		backgroundColor: '#d5683f',
		cardColor: 'linear-gradient(0deg, black 0%, #d5683f 50%)',
		titleColor: 'white',
		buttonColors: ['black', '#d5683f']
	},
	{
		title: 'Карти за намразване на цигарите',
		image: '/images/Examples/Cards-thumbnail.png',
		description: 'A demo e-commerce platform with shopping cart and payment integration.',
		link: 'https://krasimir-kostadinov.eu/motivacionni-karti',
		backgroundColor: 'linear-gradient(135deg, black, #9f1312)',
		cardColor: 'linear-gradient(0deg, black 0%, #9f1312 50%)',
		titleColor: 'white',
		buttonColors: ['black', 'white']
	},
	{
		title: 'Книга: "Жени, защо губим мъжете си?"',
		image: '/images/Examples/womens-book-thumbnail.png',
		description: 'A full-featured blog platform with markdown support and comments.',
		link: 'https://www.yana-dimitrova.com/',
		backgroundColor: 'linear-gradient(135deg, #95382b, white)',
		cardColor: 'linear-gradient(0deg, black 0%, #95382b 50%)',
		titleColor: 'white',
		buttonColors: ['#f4d1ab', '#35130eff']
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
					<a href={site.link} target="_blank" rel="noopener noreferrer" style={{background: site.cardColor}} className={styles.card} key={idx}>
						<div style={{background: site.backgroundColor}} className={styles.imageWrapper}>
							<img
								src={site.image}
								alt={site.title}
								className={styles.image}
							/>
						</div>
						<div className={styles.cardContent}>
							<h3 style={{color: site.titleColor}} className={styles.siteTitle}>{site.title}</h3>
							{/* <p className={styles.siteDesc}>{site.description}</p> */}
							<button
								
								style={{backgroundColor: site.buttonColors[0], color: site.buttonColors[1], borderColor: site.buttonColors[1]}}
								className={styles.button}
							>
								Виж сайта
							</button>
						</div>
					</a>
				))}
			</div>
		</section>
	);
};
