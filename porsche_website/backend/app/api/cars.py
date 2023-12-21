import logging
from typing import Annotated, Optional, List

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app import schemas
from app.deps.db import get_async_session
from app.repo.car_repo import CarRepo
from app.schemas import HighlightRead
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


@router.get("/{car_slug}/highlights", response_model=Optional[List[HighlightRead]])
async def get_car_highlights(
        car_slug: str,
        session: SessionDB,
):
    car_repo: CarRepo = CarRepo(session)
    highlights: Optional[List[HighlightRead]] = await car_repo.get_car_highlights(car_slug)
    if not highlights:
        logger.warning("No highlights found")
        return None
    return highlights


@router.get("/{car_slug}/gallery", response_model=Optional[List[schemas.CarGalleryRead]])
async def get_car_gallery(
        car_slug: str,
        session: SessionDB,
):
    car_repo: CarRepo = CarRepo(session)
    gallery: Optional[List[schemas.CarGalleryRead]] = await car_repo.get_car_gallery(car_slug)
    if not gallery:
        logger.warning("No gallery found")
        return None
    return gallery
