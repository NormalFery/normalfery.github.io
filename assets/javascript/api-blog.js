document.addEventListener("DOMContentLoaded", loaded);

async function loaded() {
    const urlBlog = "https://api.normalfery.es/listBlog";
    const blogDiv = document.getElementsByClassName("bodies2")[0];
    const urlMemory = "https://api.normalfery.es/listMemory";
    const memoryDiv = document.getElementsByClassName("bodies2")[1];
    try {
        await getBlog(urlBlog, blogDiv);
        await getMemory(urlMemory, memoryDiv);
    } catch (error) {
        console.error(error.message);
    }
}

async function getBlog(urlBlog, blogDiv) {
    const response = await fetch(urlBlog);
    if (!response.ok) {
        throw new Error(`I FUCKED UP OH GOD: ${response.status}`);
    }

    const result = await response.json();
    result.entries.forEach(function(blog){
        const blogHtml =
            "<p class='entry-button'>" +
            "<a href='entry/" + blog.filename + "'>" + blog.title + "</a> <br>" +
            blog.description +
            "</p>";
        blogDiv.innerHTML += blogHtml;
    })
}

async function getMemory(urlMemory, memoryDiv) {
    const response = await fetch(urlMemory);
    if (!response.ok) {
        throw new Error(`FUCK. (Memory): ${response.status}`);

    }

    const result = await response.json();
    result.entries.forEach(function(blog){
        const memoryHtml =
            "<p class='entry-button'>" +
            "<a href='entry/" + blog.filename + "'>" + blog.title + "</a>" +
            "</p>";
        memoryDiv.innerHTML += memoryHtml;
    })
}