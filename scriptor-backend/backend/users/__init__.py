from . import models
from .routes import users_blueprint

models.User.init()
