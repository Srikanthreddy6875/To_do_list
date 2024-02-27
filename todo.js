document.addEventListener("DOMContentLoaded", function () {
    let todoele = document.getElementById("taskinfo");
    let tasklist = document.getElementById("tasklist");

    document.getElementById("add").addEventListener("click", function () {
        if (todoele.value.trim().length === 0) {
            alert("Enter a task details");
        } else {
            tasklist.innerHTML += `
                <div class="task">
                    <span id="work">${todoele.value}</span>
                    <button class="del">X</button>
                </div>`;

            let alltasks = document.querySelectorAll('.del');
            for (let i = 0; i < alltasks.length; i++) {
                alltasks[i].addEventListener("click", function () {
                    console.log(this);
                    console.log(this.parentNode);
                    this.parentNode.remove();
                });
            }

            todoele.value = "";
        }
    });
});
