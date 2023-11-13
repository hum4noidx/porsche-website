from typing import List, Optional

from pydantic import BaseModel, ConfigDict

from app.schemas.body_specs import BodySpecsRead
from app.schemas.motor_specs import MotorSpecsRead
from app.schemas.performance_specs import PerformanceSpecsRead


class CarSpecsRead(BaseModel):
    id: int
    car_id: int
    motor_specs: Optional[List[MotorSpecsRead]] = None
    performance_specs: Optional[List[PerformanceSpecsRead]] = None
    body_specs: Optional[List[BodySpecsRead]] = None

    model_config = ConfigDict(from_attributes=True)
