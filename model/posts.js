module.exports = {

    posts: [
        {
            id: "kuedhkfkru",
            title: "Teste do Mural",
            description: "Descrição teste"
        },
    ],

    getAll() {
        return this.posts;
    },

    newPost(title, description) {
        this.posts.push({ id: generateID(), title, description });
    },

    deletePost(id) {

        for(let i = 0; i < this.posts.length;i++){
            if(this.posts[i].id == id){
                this.posts.splice(i,1)
            }
        }
    }

}

function generateID() {
return "id" + Math.random().toString(36).substring(2, 9);
}