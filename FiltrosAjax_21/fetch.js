const Nombre=(idPost)=> {
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    .then(res => res.json())
    // res=>res.json {
    // return res.json()    
    // })
    .then(post=> {
        console.log(post);
        console.log(post.userId)
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then(res => res.json())
            .then(user=>{
                console.log(user.name)
            })

    })
    console.log(idPost)

}
Nombre(6)

const NombreAsync = async (idPost)=> {

    try {
        const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        const post = await resPost.json() //await devuelve la respuesta de json
        console.log("con async "+ post)
        const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        const user = await resUser.json()
        console.log("con async "+user.name)
    }
     catch (error) {
        console.log(error)
    }
}
NombreAsync(8)

const NombreAxios = async (idPost)=> {

    try {
        const resPost = await axios(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        const resUser = await axios(`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)
     
        console.log("con axios "+ resUser.data.name)
    }
     catch (error) {
        console.log(error)
    }
}
NombreAxios(8)