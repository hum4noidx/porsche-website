import logging
from typing import List, Annotated, Optional

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from starlette.responses import Response

from app.deps.db import get_async_session
from app.repo.car_repo import CarRepo
from app.schemas.car_category import CarCategoryRead

router = APIRouter(prefix="/car_categories")
logger = logging.getLogger(__name__)

SessionDB = Annotated[AsyncSession, Depends(get_async_session)]


@router.get("", response_model=Optional[List[CarCategoryRead]])
async def get_car_categories(
        response: Response,
        session: SessionDB,
        skip: int = 0,
        limit: int = 100,
):
    car_repo: CarRepo = CarRepo(session)
    car_categories = await car_repo.get_car_categories(skip, limit)
    if not car_categories:
        logger.warning("No car categories found")
        return None
    response.headers["Content-Range"] = f"{skip}-{skip + len(car_categories)}/{len(car_categories)}"
    return car_categories


@router.get("/{car_category}", response_model=Optional[CarCategoryRead])
async def get_cars_for_category(
        car_category: str,
        response: Response,
        session: SessionDB,
        skip: int = 0,
        limit: int = 100,
):
    car_repo: CarRepo = CarRepo(session)
    category = await car_repo.get_car_category(car_category, skip, limit)
    if not category:
        logger.warning(f"No car category found for id: {car_category}")
        return None
    response.headers["Content-Range"] = f"{skip}-{skip + len(category.cars)}/{len(category.cars)}"
    return category
