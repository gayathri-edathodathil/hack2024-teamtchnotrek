function checkTasks() {
    const checkboxes = document.querySelectorAll('.task-checkbox');
    const message = document.getElementById('message');
    let allChecked = true;

    checkboxes.forEach(function(checkbox) {
        if (!checkbox.checked) {
            allChecked = false;
        }
    });

    if (allChecked) {
        message.textContent = 'All tasks accomplished!';
        message.style.color = 'black';
    } else {
        message.textContent = '';
    }
}

// Attach the checkTasks function to each checkbox's change event
document.querySelectorAll('.task-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', checkTasks);
});
