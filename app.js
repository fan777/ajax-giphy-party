console.log("Let's get this party started!");

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#searchBtn').addEventListener('click', (e) => {
        e.preventDefault();
        const input = document.querySelector('#search-term');
        try {
            display(input.value);
        } catch (err) {
            alert(err.message);
        } 
        input.value = '';
    })

    document.querySelector('#search-term').addEventListener("keyup", (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            document.querySelector('#searchBtn').click();
        }
    });

    document.querySelector('#removeBtn').addEventListener('click', (e) => {
        for (let image of document.querySelectorAll('img')) {
            image.remove();
        }
    });
});

async function display(q) {
    const api_key = '9PGjMD4B8yHx2uSCbR0vW4F6Eqee2hmM';
    const url = 'https://api.giphy.com/v1/gifs/search'; 
    const response = await axios.get(url, {params: {q, limit: 20, api_key}});
    const image = document.createElement('img');
    image.src = response.data.data[Math.floor(Math.random() * response.data.data.length)].images.fixed_height.url;
    document.querySelector('#images').append(image);
}
