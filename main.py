from fastapi import Body, FastAPI
from pydantic import BaseModel
from typing import Optional
from random import randrange

app = FastAPI();


class post(BaseModel):
    title : str
    content: str
    rating: Optional[int]

my_post = [{"title": "Title 1", "content":"content 1", "id": 1}, {"title": "Title 2", "content":"content 2", "id": 2}]

def find_post(id):
    for p in my_post:
        if p["id"] == id:
            return p
    return "Not found"

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/posts")
def get_posts():
    return {"data": my_post}

@app.post("/createpost")
def createpost(posts: post):
    this_post = posts.model_dump()
    this_post["id"] = randrange(0,100000)
    my_post.append(this_post)    
    return {"data": this_post}


@app.get("/posts/{id}")
def get_post(id: int):
    post = find_post(id)
    return {"post_details": post}
     
