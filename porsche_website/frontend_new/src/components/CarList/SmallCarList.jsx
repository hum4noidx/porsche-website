import SmallCar from "./SmallCar";
import styles from "./CarList.module.css";

const SmallCarList = ({cars, category}) => {
    if (!cars) {
        return <h1>Loading...</h1>
    }
    return (
        <div className={styles.models}>
            {cars.map((car) => (
                <SmallCar key={car.id} car={car} category={category}/>
            ))}
        </div>
    )
}

export default SmallCarList;