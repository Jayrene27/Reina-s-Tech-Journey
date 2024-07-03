// Function to update the time and day
function updateTimeAndDay() {
    const now = new Date();

    // Get the current time in UTC format
    const utcTime = now.toISOString().split('T')[1].split('.')[0];

    // Get the current day in UTC
    const options = { weekday: 'long', timeZone: 'UTC' };
    const utcDay = new Intl.DateTimeFormat('en-US', options).format(now);

    // Update the HTML elements
    document.getElementById('time').textContent = `${utcTime}`;
    document.getElementById('day').textContent = `${utcDay}`;
}

// Update the time and day immediately, and then every second
updateTimeAndDay();
setInterval(updateTimeAndDay, 1000);