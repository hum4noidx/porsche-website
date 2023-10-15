from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db import Base


class BodySpecs(Base):
    __tablename__ = "body_specs"

    id: Mapped[int] = mapped_column(Integer, autoincrement=True, primary_key=True)
    car_specs_id: Mapped[int] = mapped_column(Integer, nullable=False)
    length: Mapped[str] = mapped_column(String(255), nullable=False)
    width: Mapped[str] = mapped_column(String(255), nullable=False)
    height: Mapped[str] = mapped_column(String(255), nullable=False)
    wheelbase: Mapped[str] = mapped_column(String(255), nullable=False)
    turning_circle: Mapped[str] = mapped_column(String(255), nullable=False)
    permissible_gross_weight: Mapped[str] = mapped_column(String(255), nullable=False)
    max_load: Mapped[str] = mapped_column(String(255), nullable=False)
