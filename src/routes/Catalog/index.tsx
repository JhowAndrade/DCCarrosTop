import './styles.css';
import Header from "../../components/Header";
import Visit from '../../components/Visit';
import CardCar from "../../components/CardCar";



export default function Catalog() {

    return (

        <>
            <Header />
            <main>
                <div className="dct-card-car-container">
                    <Visit />
                    <CardCar />
                    <CardCar />
                </div>
                <div className="dct-card-comment-container">

                </div>

            </main>

        </>


    );


}