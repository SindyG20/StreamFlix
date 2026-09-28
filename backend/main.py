#Import FastAPI into my Python File
from fastapi import FastAPI

#Create FASTAPI class instance
app = FastAPI()

#Create GET request (Give me some information)
@app.get("/")
def home():
    return {"message": "Welcome to StreamFlix API"}