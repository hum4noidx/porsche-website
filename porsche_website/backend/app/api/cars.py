import logging
from typing import Annotated, Optional

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from starlette.responses import Response

from app.deps.db import get_async_session
from app.repo.car_repo import CarRepo
from app.schemas.car import CarExtendedRead

router = APIRouter(prefix="/cars")
logger = logging.getLogger(__name__)

SessionDB = Annotated[AsyncSession, Depends(get_async_session)]


@router.get("/{car_slug}", response_model=Optional[CarExtendedRead])
async def get_car(
        car_slug: str,
        session: SessionDB,
):
    car_repo: CarRepo = CarRepo(session)
    car: Optional[CarExtendedRead] = await car_repo.get_car(car_slug)
    if not car:
        logger.warning("No car found")
        return None
    return car
