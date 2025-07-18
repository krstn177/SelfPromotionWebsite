import { Link } from 'react-router-dom';
import styles from './SharedFooter.module.css';

export const SharedFooter = () => {
  return (
    <div style={{background: 'var(--color-gradient)', borderTop: '2px solid var(--color-background)'}}>
        <div className="container">
        <footer
            className="text-center text-lg-start text-white pb-2"
        >
            <div className="container p-4 pb-0">
            <section className="">
                <div className="row">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className={`text-uppercase mb-4 font-weight-bold ${styles.title}`}>
                            Kristiyan Geshev
                        </h6>
                        <p className={`text-white ${styles.otherText}`}>
                            krasimir-kostadinov.eu е онлайн магазин, съдържащ различни мотивационни, авторски и други продукти с цел самопомощ и развитие.
                        </p>
                    </div>

                    <hr className="w-100 clearfix d-md-none" />

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className={`text-uppercase mb-4 font-weight-bold ${styles.title}`}>ПРАВИЛА</h6>
                        <p>
                            <Link to="/terms" target="_blank" className={`text-white ${styles.otherText}`}>Общи условия</Link>
                        </p>
                        <p>
                            <Link to="/personal-info-rules" target="_blank" className={`text-white ${styles.otherText}`}>Лични данни</Link>
                        </p>
                        <p>
                            <Link to="/cookies-policy" target="_blank" className={`text-white ${styles.otherText}`}>Политика за бисквитки</Link>
                        </p>
                    </div>

                    <hr className="w-100 clearfix d-md-none" />

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className={`text-uppercase mb-4 font-weight-bold ${styles.title}`}>КОНТАКТИ</h6>
                        <p className={`text-white ${styles.otherText}`}>
                        <i className="fas fa-home mr-3"></i> Велико Търново, ВТ 5000, BG
                        </p>
                        <p className={`text-white ${styles.otherText}`}>
                        <i className="fas fa-envelope mr-3"></i> christiangeshev@gmail.com
                        </p>
                        <p className={`text-white ${styles.otherText}`}>
                        <i className="fas fa-phone mr-3"></i> +359 884 646 790
                        </p>
                    </div>

                    <hr className="w-100 clearfix d-md-none" />

                    <div 
                    className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3"
                    style={{display: 'flex', flexDirection: 'column'}}
                    >
                        <h6 className={`text-uppercase mb-4 font-weight-bold text-center ${styles.title}`}>ПОСЛЕДВАЙТЕ НИ</h6>

                        <div style={{display: 'flex', justifyContent:'center', flexWrap: 'wrap'}}>
                            <a
                            className="btn btn-dark btn-floating m-1 rounded-circle"
                            style={{backgroundColor: '#3b5998', width: '45px', height: '45px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                            href="https://www.facebook.com/profile.php?id=61554567992121"
                            role="button"
                            >
                            <i className="fab fa-facebook-f"></i>
                            </a>


                            <a
                            className="btn btn-dark btn-floating m-1 rounded-circle"
                            style={{backgroundColor: '#ac2bac', width: '45px', height: '45px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                            href="https://www.instagram.com/madrostiotpepelta/"
                            role="button"
                            >
                            <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            </div>

            <div
            className={`text-white text-center p-3 rounded ${styles.otherText}`}
            style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
            >
            © 2025 Copyright:&nbsp;
            <a className={`text-white ${styles.otherText}`} href="https://krasimir-kostadinov.eu/">
              Kristiyan Geshev
            </a>
            </div>
        </footer>
        </div>
    </div>
  );
};
