import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';

const WorkPage = () => {

    const { name } = useParams();
    const [showData, setShowData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {

        async function getShowData(name) {
            try {
                const result = await axios.get(` https://api.github.com/search/users?q=${login}`);
                setShowData(result.data);
            } catch (err) {
                console.error(err)
            }
        }
        getShowData(name);

    }, [name])
   

    return <>
            <h1>{showData.name}</h1>
            <div dangerouslySetInnerHTML={{__html: showData.summary}}></div>
            <button onClick={() => {navigate(-1)}}>Back</button>
           </>
}

export default WorkPage;