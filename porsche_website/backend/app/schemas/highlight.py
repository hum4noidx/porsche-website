from pydantic import BaseModel, ConfigDict


class HighlightCreate(BaseModel):
    heading: str
    paragraph: str
    image_url: str


class HighlightUpdate(HighlightCreate):
    ...


class HighlightRead(HighlightCreate):
    id: int

    model_config = ConfigDict(from_attributes=True)
