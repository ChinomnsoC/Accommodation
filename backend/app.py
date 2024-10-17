# backend/src/main.py
from fastapi import FastAPI
from sqlalchemy.orm import Session
from models import engine, Base, Room, User

app = FastAPI()

Base.metadata.create_all(bind=engine)

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/private-rooms/{category}")
async def get_buildings_by_category(user_id: str, category: str):
    # Returns a list of all buildings under the given category
    session = Session()
    try:
        user = session.query(User).filter(User.id == user_id).first()
        if not user:
            return {"Error": "User not found"}
        # Query for list of all buildings
        buildings_in_category = session.query(Room).filter(Room.category == category).distinct(Room.building_name).all()
        return buildings_in_category
    except Exception as e:
        return {"error": f"Failed to retrieve buildings in {category}: {e}"}

@app.get("/private-rooms/{category}/{building_name}")
async def get_available_rooms(user_id: str, building_name: str, category: str):
    # Returns the number of available rooms in a building
    session = Session()
    try:
        # Check if the user exists
        user = session.query(User).filter(User.id == user_id).first()
        if not user:
            return {"error": "User not found"}

        # Query for available rooms
        available_rooms = session.query(Room).filter(Room.building_name == building_name, Room.category == category).count()

        # Return the number of available rooms or an error message
        if available_rooms > 0:
            return available_rooms
        else:
            return {"error": f"No available rooms in {building_name}"}
    except Exception as e:
        return {"error": f"Failed to check room availability: {e}"}