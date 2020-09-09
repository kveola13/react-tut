import React from 'react'

function Blog(props){
    const sidebar = (
        <ul>
            {props.posts.map((post) => 
            <li key={post.id}>
                {post.title}
            </li>
            )}
        </ul>
    )
    const content = props.posts.map((post) => 
    <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.comment}</p>
    </div>)
    return(
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    )
}

export default Blog