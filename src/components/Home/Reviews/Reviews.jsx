import styles from './Reviews.module.css';

const reviews = [
  {
    name: "Яна Димитрова",
    text: "Много съм доволна от работата с Кристиян – отзивчив, коректен и винаги на разположение. Проектът беше завършен навреме и надмина очакванията ми. Препоръчвам го на всеки, който търси професионален и надежден разработчик."
  },
  {
    name: "Красимир Костадинов",
    text: "Работата с Кристиян беше истинско удоволствие. Той винаги беше точен, изслушваше идеите ми и се стараеше да ги реализира по възможно най-добрия начин. Много съм благодарен за отношението и професионализма."
  },
  {
    name: "Христо Генчев",
    text: "Кристиян е човек, на когото можеш да разчиташ. Бързо разбира нуждите ти и изпълнява задачите прецизно и качествено. Радвам се, че работихме заедно и със сигурност ще се обърна към него отново."
  }
  // Добавете още ревюта тук при нужда
];

export const Reviews = () => (
    <div className={styles.sectionContainer}>
        <section className={styles.reviewsSection}>
            <h2 className={styles.heading}>Отзиви от клиенти</h2>
            <div className={styles.reviewsGrid}>
            {reviews.map((review, idx) => (
                <div className={styles.reviewCard} key={idx}>
                <div className={styles.reviewContent}>
                    <span className={styles.quoteMark}>&ldquo;</span>
                    <p className={styles.reviewText}>{review.text}</p>
                    <span className={styles.reviewerName}>{review.name}</span>
                </div>
                </div>
            ))}
            </div>
        </section>
    </div>
);
