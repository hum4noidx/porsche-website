from typing import List

from pydantic import BaseModel, ConfigDict

from app.schemas.car import CarRead


class CarCategoryCreate(BaseModel):
    slug: str
    name: str


class CarCategoryUpdate(CarCategoryCreate):
    ...


class CarCategoryRead(CarCategoryCreate):
    id: int
    cars: List[CarRead] | None = None

    model_config = ConfigDict(from_attributes=True)
