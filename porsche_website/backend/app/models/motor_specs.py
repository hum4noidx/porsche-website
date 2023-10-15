from sqlalchemy import Integer, String, Float, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column

from app.db import Base


class MotorSpecs(Base):
    __tablename__ = "motor_specs"

    id: Mapped[int] = mapped_column(Integer, autoincrement=True, primary_key=True)
    car_specs_id: Mapped[int] = mapped_column(ForeignKey("car_specs.id"), nullable=False)
    bore: Mapped[str] = mapped_column(String(255), nullable=False)
    stroke: Mapped[str] = mapped_column(String(255), nullable=False)
    displacement: Mapped[str] = mapped_column(String(255), nullable=False)
    max_power: Mapped[str] = mapped_column(String(255), nullable=False)
    max_power_rpm: Mapped[str] = mapped_column(String(255), nullable=False)
    max_engine_speed: Mapped[str] = mapped_column(String(255), nullable=False)
    max_torque: Mapped[str] = mapped_column(String(255), nullable=False)
    max_torque_rpm: Mapped[str] = mapped_column(String(255), nullable=False)
    max_power_per_liter: Mapped[str] = mapped_column(String(255), nullable=False)
