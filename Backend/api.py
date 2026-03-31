import text2text as t2t
from typing import Optional
from fastapi import FastAPI
from fastapi import FastAPI, File, UploadFile
from pydantic import BaseModel
from typing import List
from fastapi.responses import HTMLResponse
import PyPDF2


app = FastAPI()

@app.post("/api/v1/file")
async def process_file(files: UploadFile = File(...)):
    fileReader = PyPDF2.PdfFileReader(files.file)
    pages = [p.extractText() for p in fileReader.pages]
    question = t2t.Handler(pages).question()
    return {"qs": question}