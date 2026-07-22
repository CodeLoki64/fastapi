from fastapi import Body, FastAPI, Response, status, HTTPException
from pydantic import BaseModel
from typing import Optional
from random import randrange

app = FastAPI();


class Post(BaseModel):
    title : str
    content: str
    rating: Optional[int]

my_post = [{"title": "Title 1", "content":"content 1", "id": 1}, {"title": "Title 2", "content":"content 2", "id": 2}]

def find_post(id):
    for p in my_post:
        if p["id"] == id:
            return p
        
def find_index(id):
    for i, p in enumerate(my_post):
        if p["id"] == id:
            return i

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/posts")
def get_posts():
    return {"data": my_post}

@app.post("/createpost", status_code=status.HTTP_201_CREATED)
def createpost(post: Post):
    this_post = post.model_dump()
    this_post["id"] = randrange(0,100000)
    my_post.append(this_post)    
    return {"data": this_post}


@app.get("/posts/{id}")
def get_post(id: int):
    post = find_post(id)
    if not post:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Post of {id} not found")
    return {"post_details": post}

@app.delete("/posts/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_post(id: int):
    index = find_index(id)
    if index is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Post with id {id} was not present")
    my_post.pop(index)
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@app.put("/posts/{id}")
def update_post(id: int, post: Post):
    index = find_index(id)
    if index is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Post with id {id} was not present")
    post_to_be_updated = post.model_dump()
    post_to_be_updated["id"] = id
    my_post[index] = post_to_be_updated
    return {"updated_post": post_to_be_updated}