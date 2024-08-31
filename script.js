// Handle rescheduling shift
document.getElementById('reschedule-shift-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const shiftId = document.getElementById('shift-id').value;
    const newStartTime = document.getElementById('new-start-time').value;
    const newEndTime = document.getElementById('new-end-time').value;

    try {
        const response = await fetch(`/api/reschedule-shift/${shiftId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                newStartTime,
                newEndTime
            })
        });

        if (response.ok) {
            const updatedShift = await response.json();
            console.log('Shift rescheduled:', updatedShift);
            alert('Shift rescheduled successfully!');
        } else {
            console.error('Error rescheduling shift:', await response.text());
            alert('Error rescheduling shift');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error rescheduling shift');
    }
});

// Handle swapping shift
document.getElementById('swap-shift-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const shiftIdToSwap = document.getElementById('shift-id-to-swap').value;
    const newShiftId = document.getElementById('new-shift-id').value;

    try {
        const response = await fetch(`/api/swap-shift`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                shiftIdToSwap,
                newShiftId
            })
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Shift swapped:', result);
            alert('Shift swapped successfully!');
        } else {
            console.error('Error swapping shift:', await response.text());
            alert('Error swapping shift');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error swapping shift');
    }
});
// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const viewButton = document.getElementById('view-reward-points-btn');
    const rewardInfo = document.getElementById('reward-points-info');
    const rewardPointsValue = document.getElementById('reward-points-value');

    viewButton.addEventListener('click', async function() {
        if (rewardInfo.style.display === 'none') {
            try {
                const response = await fetch('/api/reward-points');
                const data = await response.json();
                rewardPointsValue.textContent = data.points; // Assuming the response has a 'points' field
                rewardInfo.style.display = 'block';
            } catch (error) {
                console.error('Error fetching reward points:', error);
            }
        } else {
            rewardInfo.style.display = 'none';
        }
    });
});
