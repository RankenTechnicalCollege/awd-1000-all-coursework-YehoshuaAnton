document.addEventListener("DOMContentLoaded", () => {
    const movies = document.querySelectorAll("li");

    for (let movie of movies) {
        movie.draggable = true;
        
        movie.addEventListener("dragstart", evt => 
            evt.dataTransfer.setData("id", evt.target.id));

        movie.addEventListener("dragover", evt => evt.preventDefault());
        
        movie.addEventListener("drop", evt => {
            evt.preventDefault();    // default is to not allow drop
            const id = evt.dataTransfer.getData("id");
            const li = document.querySelector("#" + id);
            evt.currentTarget.parentNode.insertBefore(li, evt.target);
        });
    }
});

