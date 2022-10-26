
from fastapi import FastAPI
from pydantic import BaseModel
from tortoise import fields
from tortoise.contrib.fastapi import register_tortoise
from tortoise.contrib.pydantic import pydantic_model_creator
from tortoise.models import Model

app = FastAPI()


class User(Model):
    id = fields.IntField(pk=True)
    username = fields.CharField(50, unique=True)
    password = fields.CharField(200)
    board = fields.JSONField(
        default={'tasks': {}, 'columns': {}, 'columnOrder': []})


User_Pydantic = pydantic_model_creator(User, name='User')
UserIn_Pydantic = pydantic_model_creator(
    User, name='UserIn', exclude_readonly=True, exclude=('board',))


@app.get('/board')
def get_board():
    board_data = {
        'tasks': {
            'task-1': {'id': 'task-1', 'content': 'create video'},
            'task-2': {'id': 'task-2', 'content': 'edit video'},
            'task-3': {'id': 'task-3', 'content': 'publish video'},
        },
        'columns': {
            'column-1': {
                'id': 'column',
                'title': 'To do',
                'taskIds': ['task-2', 'task-3']
            },
        },
        'columnOrder': ['column-1', 'column-2']
    }
    return {'board': board_data}
