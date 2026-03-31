import { Button, Container, Typography, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

function Questions() {

    const data = localStorage.getItem('fileContent');

    const [score, setScore] = useState(0);
    const [index, setIndex] = useState(0);
    const nav = useNavigate();
    const [record, setRecord] = useState([]);

    const mock_data = {"qs":[{question:"What is my favorite color?", answer:"green", options:["red","green","blue","pink"]},
              {question:"Why should I care?", answer: "because marks", options:["for money","because marks","for reputation","boring"]}]};


    const handleScore = (selected) => {
        if ((mock_data.qs[index].answer === selected) && !(index in record)) {
            setScore(score + 1);
            console.log(record);
        }
        if(!(index in record)){
            setRecord(record.concat([index]));
        }
        if (index < mock_data.qs.length - 1){
            setIndex(index + 1);
        }
    };

    const handlePrevious = () => {
        if (index > 0){
            setIndex(index - 1);
        }
    }

    const handleNext = () => {
        if (index < mock_data.qs.length - 1) {
            setIndex(index + 1);
        } 
    }

    const handleEnd = () => {
        nav("/");
    }
    
    const letterColor = "#E5E4EE";
    const optionColor = ["#5850CF", "#0091ED", "#00B6B4","#BE39BC"]
    const menuButtons = {margin: "10px 10px"}

    return ( 
            <div>
                <Container maxWidth="sm" style={{padding: "70px 0", display: "block"}}>
                    <Box sx={{witdh: 500, height: 350, backgroundColor: '#6F73A6', borderRadius: "25px"}}>
                        <div>
                            <div style={{display: "inline-block", padding: "10px 0"}}>
                                <Button variant="contained" style={menuButtons} onClick={()=>handlePrevious()}>Previous</Button>
                                <Button variant="contained" style={menuButtons} onClick={()=>handleEnd()}>End</Button>
                                <Button variant="contained" style={menuButtons} onClick={()=>handleNext()}>Next</Button>
                            </div>
                            <div style={menuButtons} >
                                <Typography variant="h4" color={letterColor}>
                                {mock_data.qs[index].question}
                                </Typography>
                    
                            </div>
                            <div style={menuButtons}>
                                <Typography variant="h6" color={letterColor}>
                                    Question: {index + 1}/{mock_data.qs.length}
                                </Typography>
                            </div>
                            <div>
                                <Grid container spacing={2}>
                                    {mock_data.qs[index].options.map((el, i)=> {
                                        return (
                                            <Grid item xs={6}>
                                            <Button variant="contained" 
                                                style={{backgroundColor: optionColor[i], width: "250px"}} 
                                                key={i} 
                                                onClick={() => handleScore(el)}>{el}</Button>
                                            </Grid>)
                                    })}
                                </Grid>
                            </div>
                            <div style={{margin: "5% 0"}}>
                                <Typography color={letterColor}>
                                    Score: {score}
                                </Typography>
                            </div>
                        </div>
                    </Box>  
                </Container>
            </div>
        );
}

export default Questions;


