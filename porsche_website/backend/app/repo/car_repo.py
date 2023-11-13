from typing import List

from sqlalchemy import select
from sqlalchemy.orm import selectinload, subqueryload

from app.models import Car, CarSpecs, BodySpecs, MotorSpecs, PerformanceSpecs
from app.models.car_category import CarCategory
from app.repo.repo import SQLAlchemyRepo
from app.schemas.body_specs import BodySpecsRead
from app.schemas.car import CarExtendedRead
from app.schemas.car_category import CarCategoryRead
from app.schemas.car_specs import CarSpecsRead
from app.schemas.motor_specs import MotorSpecsRead
from app.schemas.performance_specs import PerformanceSpecsRead


class CarRepo(SQLAlchemyRepo):
    async def get_car_categories(self, skip: int = 0, limit: int = 100) -> List[CarCategoryRead]:
        query = await self.session.execute(
            select(
                CarCategory
            )
            .order_by(CarCategory.id)
            .offset(skip).limit(limit)
        )
        result = query.unique().scalars().all()
        return list(map(CarCategory.to_dto, result)) if result else []

    async def get_car_category(self, car_category: str, skip: int = 0, limit: int = 100) -> CarCategoryRead | None:
        query = await self.session.execute(
            select(
                CarCategory
            )
            .where(
                CarCategory.slug == car_category
            )
            .join(
                CarCategory.cars
            )
            .options(
                subqueryload(
                    CarCategory.cars,
                )
            )
            .offset(skip).limit(limit)
        )
        result = query.unique().scalars().all()
        return result[0].to_dto() if result else None

    async def get_car(self, car_slug: str) -> CarExtendedRead | None:
        query = await self.session.execute(
            select(
                Car
            )
            .options(
                selectinload(
                    Car.car_specs
                )
            )
            .where(
                Car.slug == car_slug
            )

        )
        car = query.scalars().first()
        return CarExtendedRead.model_validate(car) if car else None

    async def get_car_specs(self, car_id: int):
        query = await self.session.execute(
            select(
                CarSpecs
            )
            .where(
                CarSpecs.car_id == car_id
            )

        )
        car_specs = query.scalar()
        return CarSpecsRead.model_validate(car_specs) if car_specs else None

    async def get_body_specs(self, car_specs_id: int):
        query = await self.session.execute(
            select(
                BodySpecs
            )
            .where(
                BodySpecs.car_specs_id == car_specs_id
            )

        )
        car_specs = query.scalar()
        return BodySpecsRead.model_validate(car_specs) if car_specs else None

    async def get_motor_specs(self, car_specs_id: int):
        query = await self.session.execute(
            select(
                MotorSpecs
            )
            .where(
                MotorSpecs.car_specs_id == car_specs_id
            )

        )
        car_specs = query.scalar()
        return MotorSpecsRead.model_validate(car_specs) if car_specs else None

    async def get_performance_specs(self, car_specs_id: int):
        query = await self.session.execute(
            select(
                PerformanceSpecs
            )
            .where(
                PerformanceSpecs.car_specs_id == car_specs_id
            )

        )
        car_specs = query.scalar()
        return PerformanceSpecsRead.model_validate(car_specs) if car_specs else None
