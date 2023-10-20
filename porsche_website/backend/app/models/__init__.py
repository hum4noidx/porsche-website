# Import all models here so alembic can discover them
from app.models.item import Item
from app.models.user import User
from .body_specs import BodySpecs
from .car import Car
from .car_category import CarCategory
from .car_model import CarModel
from .car_specs import CarSpecs
from .motor_specs import MotorSpecs
from .performance_specs import PerformanceSpecs
