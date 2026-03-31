import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import {DropzoneArea} from 'react-mui-dropzone';
import Button from '@mui/material/Button';
import { Container } from "@mui/material";

function DragAndDrop(){
    const [files, setFiles] = useState([])
    
    let nav = useNavigate()

    const handleChange = (file) => {
        setFiles([file])
    };
    const handleOpen = async () => {
        console.log("dole");
        let form = new FormData();
        form.append("pdf", files);
        try {
            let response = await fetch('//localhost:3001/api/v1/file', {
                method: 'POST',
                body: form
            });
            let result = await response.json();
            localStorage.setItem('fileContent', result);
        } catch (error){
            alert(error);
        } 
        nav("/questions");
    }

    return(
        <React.Fragment>
            <Container maxWidth="sm">
                <DropzoneArea onChange={() => handleChange()} acceptedFiles={[".pdf"]}/>`
                <Container>
                    <Button onClick={()=>handleOpen()} variant="contained">
                        Send slides
                    </Button>
                </Container>
            </Container>
            
        </React.Fragment>

    );

}

export default DragAndDrop;