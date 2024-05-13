function addInput(parent_div,array_name) {
    var container = document.getElementById(`${parent_div}`);
    var input = document.createElement("input");
    input.type = "text";
    input.name = `${array_name}[]`;
    input.classList.add('form-control');
    input.classList.add('dynamic_input');

    //delete button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.type = "button";
    deleteButton.classList.add('btn');
    deleteButton.classList.add('btn-primary');
    deleteButton.style.height = '2rem';
    deleteButton.style.marginLeft = '0.5rem';

    // deleteButton.classList.add('dynamic_input');
    deleteButton.onclick = function() {
        container.removeChild(input);
        container.removeChild(deleteButton);
    };

    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.alignItems = 'center';

    container.appendChild(input);
    container.appendChild(deleteButton);
    // container.appendChild(document.createElement("br")); // Optional: add line break
}