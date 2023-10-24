import SmallCar from "./SmallCar";

const SmallCarList = ({cars, category}) => {
    if (!cars) {
        return <h1>Loading...</h1>
    }
    return (
        <div className="models">
            {cars.map((car) => (
                <SmallCar key={car.id} car={car} category={category}/>
            ))}
        </div>
    )
}

export default SmallCarList;