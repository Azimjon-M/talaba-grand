import Apelyatsya from "../../components/Apelyatsya";
import GPAkorsatkichlar from "../../components/GPAkorsatkichlar";
import MainSection from "../../components/MainSection";

const Home = () => {
    return (
        <div className="dark:bg-gray-900 leading-tight bg-gray-50">
            <MainSection />
            <Apelyatsya />
            <GPAkorsatkichlar />
        </div>
    );
};

export default Home;
