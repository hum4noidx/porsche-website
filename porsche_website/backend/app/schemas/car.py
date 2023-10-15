from pydantic import BaseModel, ConfigDict


class CarCreate(BaseModel):
    slug: str
    name: str
    price: int


class CarUpdate(CarCreate):
    ...


class CarRead(CarCreate):
    id: int
    
    model_config = ConfigDict(from_attributes=True)
