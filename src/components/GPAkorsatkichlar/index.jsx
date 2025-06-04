import React from "react";

const GPAkorsatkichlar = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start w-full lg:max-w-5xl md:max-w-3xl xl:max-w-[1150px] 2xl:max-w-[1400px] gap-6 mx-auto">
            <div className="card-body pt-0">
                <h1 className="card-title text-2xl md:text-3xl font-bold text-info mb-4">
                    GPA Ko'rsatkichlari Bo'yicha Grant Taqdimoti
                </h1>
                <div className="space-y-3">
                    <p className="flex items-center gap-2">
                        <span className="badge badge-success font-semibold">3.3 - 3.39</span>
                        To'lov-kontrakt summasining{" "}
                        <span className="font-semibold">20%</span>
                    </p>
                    <p className="flex items-center gap-2">
                        <span className="badge badge-success font-semibold">3.4 - 3.49</span>
                        To'lov-kontrakt summasining{" "}
                        <span className="font-semibold">30%</span>
                    </p>
                    <p className="flex items-center gap-2">
                        <span className="badge badge-success font-semibold">3.5 - 3.59</span>
                        To'lov-kontrakt summasining{" "}
                        <span className="font-semibold">40%</span>
                    </p>
                    <p className="flex items-center gap-2">
                        <span className="badge badge-success font-semibold">3.6 - 3.69</span>
                        To'lov-kontrakt summasining{" "}
                        <span className="font-semibold">50%</span>
                    </p>
                    <p className="flex items-center gap-2">
                        <span className="badge badge-success font-semibold">3.7 - 3.79</span>
                        To'lov-kontrakt summasining{" "}
                        <span className="font-semibold">60%</span>
                    </p>
                    <p className="flex items-center gap-2">
                        <span className="badge badge-success font-semibold">3.8 - 3.89</span>
                        To'lov-kontrakt summasining{" "}
                        <span className="font-semibold">70%</span>
                    </p>
                    <p className="flex items-center gap-2">
                        <span className="badge badge-success font-semibold">3.9 - 3.99</span>
                        To'lov-kontrakt summasining{" "}
                        <span className="font-semibold">80%</span>
                    </p>
                </div>
                <div className="divider"></div>
                <h2 className="text-lg md:text-xl font-semibold">
                    Miqdorlar oliy ta'lim tashkilotining byudjetidan tashqari
                    mablag'lardan ta'minlanadi.
                </h2>
            </div>
        </div>
    );
};

export default GPAkorsatkichlar;
