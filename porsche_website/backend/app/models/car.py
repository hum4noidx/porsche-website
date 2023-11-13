from typing import List, Optional

from sqlalchemy import Integer, String, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db import Base
from app.schemas.car import CarRead


class Car(Base):
    __tablename__ = "car"

    id: Mapped[int] = mapped_column(Integer, autoincrement=True, primary_key=True)
    slug: Mapped[str] = mapped_column(String(255), nullable=False)
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    price: Mapped[int] = mapped_column(Integer, nullable=False)
    car_category_id: Mapped[int] = mapped_column(ForeignKey("car_category.id", ondelete="CASCADE"), nullable=False)
    car_category = relationship("CarCategory", back_populates="cars")
    car_specs: Mapped[Optional["CarSpecs"]] = relationship(lazy="raise")

    def to_dto(self) -> CarRead:
        return CarRead.model_validate(self)
