from pydantic import BaseModel
from typing import Optional


class MovieResponse(BaseModel):
    id: int
    title: str
    description: Optional[str] = None
    release_year: Optional[int] = None
    duration_minutes: Optional[int] = None
    poster_url: Optional[str] = None
    video_url: Optional[str] = None