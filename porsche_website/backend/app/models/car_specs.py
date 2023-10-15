from sqlalchemy import Integer, String, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column

from app.db import Base


class CarSpecs(Base):
    __tablename__ = "car_specs"

    id: Mapped[int] = mapped_column(Integer, autoincrement=True, primary_key=True)
    car_id: Mapped[int] = mapped_column(ForeignKey("car.id"), nullable=False)
    
