from typing import List

from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db import Base
from app.schemas.car_category import CarCategoryRead


class CarCategory(Base):
    __tablename__ = "car_category"

    id: Mapped[int] = mapped_column(Integer, autoincrement=True, primary_key=True)
    slug: Mapped[str] = mapped_column(String(255), nullable=False)
    name: Mapped[str] = mapped_column(String(255), nullable=False)

    cars: Mapped[List["Car"]] = relationship(lazy="selectin", order_by="Car.id")

    def to_dto(self) -> CarCategoryRead:
        return CarCategoryRead.model_validate(self)
