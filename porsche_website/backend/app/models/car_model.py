from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db import Base
from app.schemas.car_model import CarModelRead


class CarModel(Base):
    __tablename__ = "car_model"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    slug: Mapped[str] = mapped_column(String(255), nullable=False)
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    image_url: Mapped[str] = mapped_column(String, nullable=False)

    def to_dto(self) -> CarModelRead:
        return CarModelRead.model_validate(self)
