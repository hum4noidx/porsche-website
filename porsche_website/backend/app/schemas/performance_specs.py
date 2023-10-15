from pydantic import BaseModel, ConfigDict


class PerformanceSpecsCreate(BaseModel):
    car_specs_id: int
    top_track_speed: str
    zero_to_100_kmh: str


class PerformanceSpecsUpdate(PerformanceSpecsCreate):
    ...


class PerformanceSpecsRead(PerformanceSpecsCreate):
    id: int

    model_config = ConfigDict(from_attributes=True)
