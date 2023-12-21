from pydantic import BaseModel, ConfigDict


class CarModelCreate(BaseModel):
    slug: str
    name: str
    image_url: str


class CarModelUpdate(CarModelCreate):
    ...


class CarModelRead(CarModelCreate):
    id: int
    model_config = ConfigDict(from_attributes=True)
