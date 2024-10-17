from sqlalchemy import create_engine
from sqlalchemy.pool import StaticPool

DATABASE_URL = "postgresql://your_username:asdf@your_host:5432/your_database_name"

engine = create_engine(DATABASE_URL, poolclass=StaticPool)  # Use StaticPool for Poetry