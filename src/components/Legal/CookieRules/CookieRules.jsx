import styles from "./CookieRules.module.css";

export const CookieRules = () => {
  return (
    <div className={styles.cookieRules}>
        <div className={styles.container}>
            <h1 className={styles.title}>ПОЛИТИКА ЗА БИСКВИТКИ</h1>
            <h2 className={styles.subtitle}>Бисквитки</h2>
            <p className={styles.rule}>
                Нашият уеб сайт използва така наречените „бисквитки“. 
                Това са малки текстови файлове, които се зареждат в браузъра и се съхраняват на вашето крайно устройство. 
                Те са безобидни. Повечето големи уебсайтове също използват този метод.
                Използваме ги, за да поддържаме сайта си лесен за употреба. 
                Някои „бисквитки“ остават съхранени на устройството ви, докато не ги изтриете. 
                Те ни позволяват да разпознаем вашия браузър при следващото ви посещение в нашия сайт.
            </p>
            <h2 className={styles.subtitle}>Какво представляват бисквитките?</h2>
            <p className={styles.rule}>
                Бисквитките са малки текстови файлове, които се запазват на вашия компютър или мобилно устройство, когато посещавате даден уебсайт. 
                Те позволяват на уебсайта да запаметява вашите действия и предпочитания 
                (като например потребителско име, език, размер на шрифта и други настройки за показване) 
                за определен период от време, за да не се налага да ги въвеждате всеки път, 
                когато посещавате сайта или преминавате от една страница към друга.
            </p>
            <h2 className={styles.subtitle}>По какъв начин използваме бисквитките?</h2>
            <p className={styles.rule}>
                <ul>
                    <li>Бисквитки за производителност на сайта;</li>
                    <li>Бисквитки за анализиране на посетителите на сайта;</li>
                    <li>Биквитки за географско насочване;</li>
                    <li>Бисквитки за рекламна дейност;</li>
                    <li>Бисквитки на рекламодателите.</li>
                </ul>
                    Разрешаването на бисквитките не е абсолютно необходимо, за да може уебсайтът да работи, 
                    но ще допринесе за по-доброто му използване. Можете да изтриете или блокирате бисквитките, 
                    но ако го направите е възможно някои функции на сайта да не работят както трябва.
                    Свързаната с бисквитките информация не се използва за установяване на самоличността ви, 
                    а образците с данни са изцяло под наш контрол. Бисквитките не се използват за цели, различни от посочените тук.
            </p>
            <h2 className={styles.subtitle}>
                Бисквитки на трети страни:
            </h2>
            <p className={styles.rule}>
                Използваме бисквитки на трети страни за събиране на статистически данни в сбита форма чрез инструменти за анализ, 
                като Meta Pixel.
            </p>
            <h2 className={styles.subtitle}>
                Как да контролирате бисквитките?
            </h2>
            <p className={styles.rule}>
                <ul>
                    <li><a className={styles.link} href="https://support.google.com/chrome/answer/95647?hl=bg">Google Chrome</a></li>
                    <li><a className={styles.link} href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer">Mozilla Firefox</a></li>
                    <li><a className={styles.link} href="https://support.microsoft.com/en-gb/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d#ie=ie-10">Microsoft Edge</a></li>
                    <li><a className={styles.link} href="https://blogs.opera.com/news/2015/08/how-to-manage-cookies-in-opera/">Opera</a></li>
                </ul>
            </p>
        </div>
    </div>
  );
};