from pydantic import BaseModel, ConfigDict


class CarGalleryRead(BaseModel):
    id: int
    car_id: int
    image_url: str

    model_config = ConfigDict(from_attributes=True)
