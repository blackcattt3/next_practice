let posts = [
    { id: 1, title: "첫 번째 글", content: "내용1"},
    { id: 1, title: "첫 번째 글", content: "내용1"},
];

export async function GET(){
    return Response.json(posts);
}

// 데이터 입력. 새롭게 입력한 데이터(하나)만 리턴! 근데 왜 굳이 return이 필요하지?
export async function POST(req: Request){
    const body = await req.json();

    const newPost = {
        id: Date.now(),
        title: body.title,
        content: body.content,
    };

    posts.push(newPost);
    return Response.json(newPost, {status: 201});
}