from sqlalchemy import Integer, ForeignKey, String
from sqlalchemy.orm import mapped_column, Mapped

from app import schemas
from app.db import Base


class CarGallery(Base):
    __tablename__ = "car_gallery"

    id: Mapped[int] = mapped_column(Integer, autoincrement=True, primary_key=True)
    car_id: Mapped[int] = mapped_column(ForeignKey("car.id", ondelete="CASCADE"), nullable=False)
    image_url: Mapped[str] = mapped_column(String, nullable=False)

    def to_dto(self) -> schemas.CarGalleryRead:
        return schemas.CarGalleryRead.model_validate(self)
