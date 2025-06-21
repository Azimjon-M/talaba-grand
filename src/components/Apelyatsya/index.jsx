// import { Link, useNavigate } from 'react-router';
import { TextColorBox } from '../TextColorBox/styled';
import { Theme } from '../../styles/theme';
import { BoxBg } from '../Container/styled';

const Apelyatsya = () => {
    const { apelyatsiyaBg, apelyatsiyaTitle } = Theme;

    // const navigation = useNavigate();
    // const handleClick = () => {
    //     localStorage.setItem('appelyatsya', true);
    //     navigation('login-user');
    // };

    return (
        <BoxBg $bgColor={apelyatsiyaBg} className="flex justify-center">
            <div className="flex flex-col md:flex-row justify-between items-start w-full lg:max-w-5xl md:max-w-3xl xl:max-w-[1150px] 2xl:max-w-[1400px] gap-6">
                <div className="card-body px-0">
                    <TextColorBox
                        $textColor={apelyatsiyaTitle}
                        className="card-title text-2xl md:text-3xl font-bold mb-4"
                    >
                        Apelyatsiya Jarayoni
                    </TextColorBox>
                    <div className="space-y-4">
                        <div className={`alert alert-info shadow-md`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="stroke-current shrink-0 w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <p>
                                Ta'lim grantini qayta taqsimlash jarayonidan
                                norozi talabgorlar uchun har bir ko'rsatkich
                                e'lon qilingandan so'ng{' '}
                                <b className="font-semibold">48 soat</b>{' '}
                                davomida ushbu veb-sayt orqali apelyatsiya
                                berish imkoniyati mavjud.
                            </p>
                        </div>
                        <div className="divider my-2"></div>
                        <div className={`alert alert-warning shadow-md`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="stroke-current shrink-0 w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <span>
                                Apelyatsiya arizalari{' '}
                                <span className="font-semibold">3 kun</span>{' '}
                                davomida ko'rib chiqiladi.
                            </span>
                        </div>
                    </div>
                    {/* <div className="space-y-3">
                        <div className="flex justify-center mt-6">
                            <Link
                                to={'login-user'}
                                className={`btn btn-${apelyatsiyaBtn} btn-wide`}
                                onClick={handleClick}
                            >
                                Apelyatsiya berish
                            </Link>
                        </div>
                    </div> */}
                </div>
            </div>
        </BoxBg>
    );
};

export default Apelyatsya;
