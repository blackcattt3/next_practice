let posts = [
    { id: 1, title: "첫 번째 글", content: "내용1"},
    { id: 1, title: "첫 번째 글", content: "내용1"},
];

export async function GET(){
    return Response.json(posts);
}

export async function POST(req: Request){
    const body = await req.json();
    
}