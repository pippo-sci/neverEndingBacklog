import React from 'react';
import DragAndDrop from './DragAndDrop';


function Loader() {

    return (
    <React.Fragment>
        <div>
            <h1>
                Upload your slides in a PDF file!
            </h1>
            <DragAndDrop />
        </div>
    </React.Fragment> 
    );
}

export default Loader;