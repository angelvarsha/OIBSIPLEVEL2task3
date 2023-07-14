const input = document.querySelector('input');
const addbtn = document.querySelector('.add_task > button');

addbtn.addEventListener('click', addtasks);
input.addEventListener('keyup', (e) => {
    (e.keycode === 13 ? addtasks(e) : null);
});

function addtasks(e) {
    const completed = document.querySelector('.completed');
    const pending = document.querySelector('.pending');

    const list = document.createElement('li');
    const check = document.createElement('button');
    const delet = document.createElement('button');

    check.innerHTML = '<i class="fa fa-check"></i>';
    delet.innerHTML = '<i class="fa fa-trash"></i>';

    if (input.value !== "") {
        list.textContent = input.value;
        input.value = "";
        pending.appendChild(list);
        list.appendChild(check);
        list.appendChild(delet);
    }

    check.addEventListener('click', function () {
        const parent = this.parentNode;
        parent.remove();
        completed.appendChild(parent);
        check.style.display = 'none';
    });

    delet.addEventListener('click', function () {
        const parent = this.parentNode;
        parent.remove();
    });
}