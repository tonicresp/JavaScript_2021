const Nombre=(idpost)=> {
    fetch(`https://my-json-server.typicode.com/typicode/demo/posts/${idpost}`)
    //fetch(`https://jsonplaceholder.typicode.com/demo/posts/${idpost}`)
    .then(res => res.json())
    // res=>res.json {
    // return res.json()    
    // })
    .then(res=> {
        console.log(res);
        console.log(res.title)
        /*fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then(res => res.json())
            .then(user=>{
                console.log(user.name)
            })*/

    })
    console.log(idpost)

}
Nombre(1)

const NombreAsync = async (idpost)=> {

    try {
        const resPost = await fetch(`https://my-json-server.typicode.com/typicode/demo/posts/${idpost}`)
        //const resPost = await fetch(`https://jsonplaceholder.typicode.com/demo/posts/${idPost}`)
        const post = await resPost.json() //await devuelve la respuesta de json
        console.log("con async "+ post)
       /* const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        const user = await resUser.json()
        console.log("con async "+user.name)*/
    }
     catch (error) {
        console.log(error)
    }
}
NombreAsync(1)

const NombreAxios = async (idpost)=> {

    try {
        const resPost = await axios (`https://my-json-server.typicode.com/typicode/demo/posts/${idpost}`)
        //const resPost = await axios(`https://jsonplaceholder.typicode.com/demo/posts/${idPost}`)
        //const resUser = await axios(`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)
     
        console.log ("con axios el id: " + resPost.data.id)
        console.log ("con axios el title:  " + resPost.data.title)
        //console.log("con axios "+ resUser.data.name)
    }
     catch (error) {
        console.log(error)
    }
}
NombreAxios(1)