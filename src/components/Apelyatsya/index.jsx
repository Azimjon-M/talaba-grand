import { Link } from "react-router";

const Apelyatsya = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start w-full lg:max-w-5xl md:max-w-3xl xl:max-w-[1150px] 2xl:max-w-[1400px] gap-6 mx-auto">
            <div className="card-body">
                <h1 className="card-title text-2xl md:text-3xl font-bold text-info mb-4">
                    Apelyatsiya Jarayoni
                </h1>
                <div className="space-y-4">
                    <div className="alert alert-success shadow-md">
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
                        <span>
                            Ta'lim grantini qayta taqsimlash jarayonidan norozi
                            talabgorlar uchun har bir ko'rsatkich e'lon
                            qilingandan so'ng{" "}
                            <span className="font-semibold">48 soat</span>{" "}
                            davomida ushbu veb-sayt orqali apelyatsiya berish
                            imkoniyati mavjud.
                        </span>
                    </div>
                    <div className="divider my-2"></div>
                    <div className="alert alert-success shadow-md">
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
                            Apelyatsiya arizalari{" "}
                            <span className="font-semibold">3 kun</span>{" "}
                            davomida ko'rib chiqiladi.
                        </span>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-center mt-6">
                        <Link className="btn btn-primary">
                            Apelyatsiya berish
                        </Link>
                    </div>
                </div>
                <div className="divider"></div>
            </div>
        </div>
    );
};

export default Apelyatsya;
