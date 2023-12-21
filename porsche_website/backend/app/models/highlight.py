from sqlalchemy import Integer, String, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column

from app import schemas
from app.db import Base


class Highlight(Base):
    __tablename__ = "highlight"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    car_id: Mapped[int] = mapped_column(ForeignKey("car.id", ondelete="CASCADE"), nullable=False)
    heading: Mapped[str] = mapped_column(String(255), nullable=False)
    paragraph: Mapped[str] = mapped_column(String, nullable=False)
    image_url: Mapped[str] = mapped_column(String, nullable=False)

    def to_dto(self) -> schemas.HighlightRead:
        return schemas.HighlightRead.model_validate(self)
