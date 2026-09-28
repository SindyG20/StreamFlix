from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

from database import SessionLocal
from models import Movie


app = FastAPI()


def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()


@app.get("/")
def home():
    return {"message": "Welcome to StreamFlix API"}


@app.get("/movies")
def get_movies(db: Session = Depends(get_db)):
    movies = db.query(Movie).all()

    return movies