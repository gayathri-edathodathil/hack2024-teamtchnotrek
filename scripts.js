document.addEventListener('DOMContentLoaded', function() {
    const viewButton = document.getElementById('view-reward-points-btn');
    const rewardInfo = document.getElementById('reward-points-info');
    const additionalShiftForm = document.getElementById('additional-shift-form');

    // Function to fetch and display reward points
    const fetchRewardPoints = () => {
        fetch('/api/reward-points')
            .then(response => response.json())
            .then(data => {
                document.getElementById('reward-points-value').textContent = data.points;
            })
            .catch(error => console.error('Error fetching reward points:', error));
    };

    viewButton.addEventListener('click', () => {
        if (rewardInfo.style.display === 'none') {
            rewardInfo.style.display = 'block';
            fetchRewardPoints();
        } else {
            rewardInfo.style.display = 'none';
        }
    });

    additionalShiftForm.addEventListener('submit', event => {
        event.preventDefault();

        const date = document.getElementById('additional-shift-date').value;
        const startTime = document.getElementById('additional-shift-start-time').value;
        const endTime = document.getElementById('additional-shift-end-time').value;

        fetch('/api/additional-shift', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ date, startTime, endTime })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                fetchRewardPoints();
            } else {
                console.error('Error adding additional shift:', data.message);
                alert('Failed to add shift. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error adding additional shift:', error);
            alert('An error occurred. Please try again.');
        });
    });
});
