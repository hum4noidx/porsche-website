from pydantic import BaseModel, ConfigDict


class BodySpecsCreate(BaseModel):
    car_specs_id: int
    length: str
    width: str
    height: str
    wheelbase: str
    turning_circle: str
    permissible_gross_weight: str
    max_load: str


class BodySpecsUpdate(BodySpecsCreate):
    ...


class BodySpecsRead(BodySpecsCreate):
    id: int

    model_config = ConfigDict(from_attributes=True)
