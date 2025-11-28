// useState, useEffect 등의 컴포넌트들을 서버에서 못돌리기 때문에 클라이언트에서 실행하라고 해주는거.
"use client"

import { useState, useEffect } from "react";

export default function PostsPage(){
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');

    // READ
    const getPosts = async ()=>{
        const res = await fetch("./api/posts")
        const data  = await res.json();
        setPosts(data);
        console.log(data);
    }
    useEffect(()=>{
        getPosts();
        
    },[])
    

}