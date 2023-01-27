import Header from "../../components/Header";
import DoctorsHead from "./components/DoctorsHead";
import DoctorsImg1 from "./components/DoctorsImg1";
import DoctorsImg2 from "./components/DoctorsImg2";
import DoctorsSolutionTop from "./components/DoctorsSolutionTop";
import DoctorsSolutionBottom from "./components/DoctorsSolutionBottom";
import DoctorsUnderBtn from "./components/DoctorsUnderBtn";
import Footer from "../../components/Footer";
import "../Doctors/components/Doctors.css";
import "../../components/Css/reset.css";
import "../../components/Css/link.css";

function DoctorsPage() {
    return (
        <>
            <Header></Header>
            <DoctorsHead></DoctorsHead>
            <DoctorsImg1></DoctorsImg1>
            <DoctorsImg2></DoctorsImg2>
            <DoctorsSolutionTop></DoctorsSolutionTop>
            <DoctorsSolutionBottom></DoctorsSolutionBottom>
            <DoctorsUnderBtn></DoctorsUnderBtn>
            <Footer></Footer>
        </>
    );
}
export default DoctorsPage;
