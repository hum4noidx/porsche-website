from pydantic import BaseModel, ConfigDict


class MotorSpecsCreate(BaseModel):
    car_specs_id: int
    bore: str
    stroke: str
    displacement: str
    max_power: str
    max_power_rpm: str
    max_engine_speed: str
    max_torque: str
    max_torque_rpm: str
    max_power_per_liter: str


class MotorSpecsUpdate(MotorSpecsCreate):
    ...


class MotorSpecsRead(MotorSpecsCreate):
    id: int

    model_config = ConfigDict(from_attributes=True)
