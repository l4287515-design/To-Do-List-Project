{
    function addTask() {
      let input = document.getElementById("taskInput");
      let task = input.value;

      if (task === "") return;

      let li = document.createElement("li");

      let span = document.createElement("span");
      span.textContent = task;

      // mark complete
      span.onclick = function () {
        if (span.style.textDecoration === "line-through") {
          span.style.textDecoration = "none";
        } else {
          span.style.textDecoration = "line-through";
        }
      };

      let delBtn = document.createElement("button");
      delBtn.textContent = "Delete";

      // delete task
      delBtn.onclick = function () {
        li.remove();
      };

      li.appendChild(span);
      li.appendChild(delBtn);

      document.getElementById("list").appendChild(li);

      input.value = "";
    }
}