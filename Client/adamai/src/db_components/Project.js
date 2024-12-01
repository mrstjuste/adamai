import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Project = () => {
    const { projId } = useParams();

    return (
        <div className="container">
            <h1>Project template.</h1>
            {/** Make a dedicated page to display all the project data. */}
        </div>
    );
};

export default Project;