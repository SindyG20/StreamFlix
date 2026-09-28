from sqlalchemy import Column, BigInteger, String, Text, Integer, DateTime
from database import Base


class Movie(Base):
    __tablename__ = "movies"

    id = Column(BigInteger, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    description = Column(Text)
    release_year = Column(Integer)
    duration_minutes = Column(Integer)
    poster_url = Column(Text)
    video_url = Column(Text)
    created_at = Column(DateTime(timezone=True))