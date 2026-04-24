document.addEventListener("DOMContentLoaded", loaded);

async function loaded() {
    const url = "http://localhost:3000/listBlog";
    const blogDiv = document.getElementsByClassName("bodies")[0];
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`I FUCKED UP OH GOD: ${response.status}`);
        }

        const result = await response.json();
        result.entries.forEach(function(blog){
            const blogHtml =
                "<p>" +
                "<a href='entry/" + blog.filename + "'>" + blog.title + "</a> <br>" +
                blog.description +
                "</p>";
            blogDiv.innerHTML += blogHtml;
        })



    } catch (error) {
        console.error(error.message);
    }
}