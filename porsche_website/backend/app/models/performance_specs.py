from sqlalchemy import Integer, String, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column

from app.db import Base


class PerformanceSpecs(Base):
    __tablename__ = "performance_specs"

    id: Mapped[int] = mapped_column(Integer, autoincrement=True, primary_key=True)
    car_specs_id: Mapped[int] = mapped_column(ForeignKey("car_specs.id", ondelete="CASCADE"), nullable=False)
    top_track_speed: Mapped[str] = mapped_column(String(255), nullable=False)
    zero_to_100_kmh: Mapped[str] = mapped_column(String(255), nullable=False)
