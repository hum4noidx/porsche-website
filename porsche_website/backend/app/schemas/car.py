from typing import Any, Optional, List

from pydantic import BaseModel, ConfigDict

from app.schemas.car_specs import CarSpecsRead


class CarCreate(BaseModel):
    slug: str
    name: str
    price: int


class CarUpdate(CarCreate):
    ...


class CarRead(CarCreate):
    id: int
    car_category_id: int

    model_config = ConfigDict(from_attributes=True)


class CarExtendedRead(CarRead):
    car_specs: Optional[CarSpecsRead] = None
