// Select Elements
let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the_input");

allSpans.forEach(span => {
    span.addEventListener("click", (e) => {
        if(e.target.classList.contains("add_item")) {
            addItems();
        }
        if(e.target.classList.contains("check_item")) {
            checkItem();
        }
        if(e.target.classList.contains("delete_item")) {
            deleteButton();
        }
        if(e.target.classList.contains("show_item")) {
            showItem();
        }
        if(e.target.classList.contains("clear_local_storage")) {
            clearLocalStorage();
        }
    });
});

// Show Erorr Message Function
function showMsgErorr() {
    // If Empty Do This Message
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
    });
    Toast.fire({
        icon: 'error',
        title: "Input Can't Be Empty"
    });
    // Result Html
    results.innerHTML = "Input Can't Be Empty";
}

// Add Items To Local Storage Function
function addItems() {
    if(theInput.value !== "") {
        localStorage.setItem(theInput.value, "Test");
        results.innerHTML = `Local Storage Item <span>${theInput.value}</span> Added`;
        theInput.value = "";
    } else {
        showMsgErorr();
    }
}

// Check Item Function
function checkItem() {
    if(theInput.value !== "") {
        if(localStorage.getItem(theInput.value)) {
            results.innerHTML = `Found Local Item Called <span>${theInput.value}</span>`;
            theInput.value = "";
        } else {
            results.innerHTML = `No Local Item With The Name <span>${theInput.value}</span>`;
        }
    } else {
        showMsgErorr();
    }
}

// Delete Items From Local Storage Function
function deleteButton() {
    if(theInput.value !== "") {
        if(localStorage.getItem(theInput.value)) {
            localStorage.removeItem(theInput.value);
            results.innerHTML = `Local Item: <span>${theInput.value}</span> Deleted`;
            theInput.value = "";
        } else {
            results.innerHTML = `No Local Item With The Name <span>${theInput.value}</span>`;
        }
    } else {
        showMsgErorr();
    }
}

// Show Item Function
function showItem() {
    if(localStorage.length) {
        results.innerHTML = "";
        for(let [key, value] of Object.entries(localStorage)) {
            results.innerHTML += `<span> (${key}) </span>`;
        }
    } else {
        results.innerHTML = `Local Storage Is Empty`;
    }
}

// Clear All Local Storage Items
function clearLocalStorage() {
    localStorage.clear();
    results.innerHTML = `Local Storage Is Cleared`;
}