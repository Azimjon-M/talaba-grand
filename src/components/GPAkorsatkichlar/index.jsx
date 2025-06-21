import { Theme } from '../../styles/theme';
import { BoxBg } from '../Container/styled';
import { TextColorBox } from '../TextColorBox/styled';

const GPAkorsatkichlar = () => {
    const { GPAKorsatkichBg, GPAKorsatkichTitle, GPAKorsatkichEndTexts } =
        Theme;
    return (
        <BoxBg $bgColor={GPAKorsatkichBg} className="flex justify-center">
            <div className="flex flex-col md:flex-row justify-between items-start w-full lg:max-w-5xl md:max-w-3xl xl:max-w-[1150px] 2xl:max-w-[1400px] gap-6">
                <div className="card-body px-0">
                    <TextColorBox
                        $textColor={GPAKorsatkichTitle}
                        className="card-title text-2xl md:text-3xl font-bold text-info mb-4"
                    >
                        GPA Ko'rsatkichlari Bo'yicha Grant Taqdimoti
                    </TextColorBox>
                    <div className="space-y-3 ">
                        <p className="text-black dark:text-white flex items-center gap-2">
                            <span
                                className={`badge badge-success font-semibold`}
                            >
                                3.3 - 3.39
                            </span>
                            To'lov-kontrakt summasining{' '}
                            <span className="font-semibold">20%</span>
                        </p>
                        <p className="text-black dark:text-white flex items-center gap-2">
                            <span
                                className={`badge badge-success font-semibold`}
                            >
                                3.4 - 3.49
                            </span>
                            To'lov-kontrakt summasining{' '}
                            <span className="font-semibold">30%</span>
                        </p>
                        <p className="text-black dark:text-white flex items-center gap-2">
                            <span
                                className={`badge badge-success font-semibold`}
                            >
                                3.5 - 3.59
                            </span>
                            To'lov-kontrakt summasining{' '}
                            <span className="font-semibold">40%</span>
                        </p>
                        <p className="text-black dark:text-white flex items-center gap-2">
                            <span
                                className={`badge badge-success font-semibold`}
                            >
                                3.6 - 3.69
                            </span>
                            To'lov-kontrakt summasining{' '}
                            <span className="font-semibold">50%</span>
                        </p>
                        <p className="text-black dark:text-white flex items-center gap-2">
                            <span
                                className={`badge badge-success font-semibold`}
                            >
                                3.7 - 3.79
                            </span>
                            To'lov-kontrakt summasining{' '}
                            <span className="font-semibold">60%</span>
                        </p>
                        <p className="text-black dark:text-white flex items-center gap-2">
                            <span
                                className={`badge badge-success font-semibold`}
                            >
                                3.8 - 3.89
                            </span>
                            To'lov-kontrakt summasining{' '}
                            <span className="font-semibold">70%</span>
                        </p>
                        <p className="text-black dark:text-white flex items-center gap-2">
                            <span
                                className={`badge badge-success font-semibold`}
                            >
                                3.9 - 3.99
                            </span>
                            To'lov-kontrakt summasining{' '}
                            <span className="font-semibold">80%</span>
                        </p>
                    </div>
                    {/* <div className="divider"></div> */}
                    <TextColorBox
                        $textColor={GPAKorsatkichEndTexts}
                        className="text-lg md:text-xl text-black dark:text-white font-semibold"
                    >
                        Miqdorlar oliy ta'lim tashkilotining byudjetidan
                        tashqari mablag'lardan ta'minlanadi. ✅
                    </TextColorBox>
                </div>
            </div>
        </BoxBg>
    );
};

export default GPAkorsatkichlar;
