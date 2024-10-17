from sqlalchemy import Column, Integer, String, Text, Float
from sqlalchemy.ext.declarative import declarative_base
from database import engine

Base = declarative_base()

class Room(Base):
    __tablename__ = "rooms"

    id = Column(Integer, primary_key=True)
    category = Column(String) #ensuite, flats
    building_name = Column(String) #Alaka, glory house
    amenities = Column(Text)
    price = Column(Float)
    available_rooms = Column(Integer)
    walking_distance = Column(Integer)
    driving_distance = Column(Integer)


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String)
    church = Column(String)


def create_database():
    Base.metadata.create_all(engine)