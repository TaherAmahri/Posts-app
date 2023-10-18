const template=document.querySelector(".card");
const section=document.querySelector("#posts");
async function loadPost(){
    try{
        const data=await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts=await data.json();
        posts.forEach(async(post,index) => {
            if (index<18){
                const newPost=document.importNode(template,true);
                const postTitle=newPost.querySelector(".card-title");
                const postText=newPost.querySelector(".card-text");
                postTitle.innerHTML=post.title;
                postText.innerHTML=post.body;
                try{
                  const img =await fetch("https://picsum.photos/300");
                  console.log(img);
                  const blob=await img.blob();
                  const imgURL=URL.createObjectURL(blob);
                  const postImg=newPost.querySelector(".card-img-top");
                  postImg.src=imgURL;
                  section.appendChild(newPost);  
                }catch(error){
                    console.log(error.message+" image");
                    section.appendChild(newPost);
                }
            }
        });
    }catch(error){
        console.log(error.message+" posts");
    };
};
loadPost();