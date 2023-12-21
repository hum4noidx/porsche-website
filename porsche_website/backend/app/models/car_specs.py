from sqlalchemy import Integer, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db import Base


class CarSpecs(Base):
    __tablename__ = "car_specs"

    id: Mapped[int] = mapped_column(Integer, autoincrement=True, primary_key=True)
    car_id: Mapped[int] = mapped_column(ForeignKey("car.id", ondelete="CASCADE"), nullable=False)
    motor_specs = relationship("MotorSpecs", lazy="joined")
    performance_specs = relationship("PerformanceSpecs", lazy="joined")
    body_specs = relationship("BodySpecs", lazy="joined")
