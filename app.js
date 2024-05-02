function updateTime() {
    var now = new Date();
  
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert midnight (0) to 12
  
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('time').innerText = timeString;
  
    var dateString = now.toDateString();
    document.getElementById('date').innerText = dateString;
  }
  
  // Update the time every second
  setInterval(updateTime, 1000);
  
  // Initial call to display the time immediately
  updateTime();
  