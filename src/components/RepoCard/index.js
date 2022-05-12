import React from 'react';
import { useNavigate } from 'react-router-dom';


const RepoCard = ( { name, repos, description, count, issue, fork, stargazers } ) => {

    const navigate = useNavigate();
    
    console.log(image)

    function handleClick() {
        navigate(-1);
    }

    return <article className="repo-card">
                <img src={image !== null ? image.medium : "https://http.cat/404"}
                          alt={`Image of ${name}`}/>
                <h1>{name}</h1>
                <Rating rating={rating.average} />
                <div dangerouslySetInnerHTML={{__html: summary}}></div>
                <button onClick={handleClick}>Back</button>
           </article>
}

export default RepoCard;