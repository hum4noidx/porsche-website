from typing import List

from sqlalchemy import select

from app.models.car_category import CarCategory
from app.repo.repo import SQLAlchemyRepo
from app.schemas.car_category import CarCategoryRead


class CarRepo(SQLAlchemyRepo):
    async def get_car_categories(self, skip: int = 0, limit: int = 100) -> List[CarCategoryRead]:
        query = await self.session.execute(
            select(
                CarCategory
            ).offset(skip).limit(limit)
        )
        result = query.scalars().all()
        return list(map(CarCategory.to_dto, result)) if result else []
