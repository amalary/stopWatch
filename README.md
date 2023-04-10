# Stopwatch Project
This is a simple JavaScript stopwatch project that displays the elapsed time in seconds and tenths of a second. It includes a start button to begin the timer, a stop button to pause the timer, and a reset button to set the timer back to zero.

# Usage
To use the stopwatch, simply open the HTML file in a web browser and click the start button to begin the timer. The timer will display the elapsed time in seconds and tenths of a second. Click the stop button to pause the timer, and click the reset button to set the timer back to zero.

# Code
The stopwatch code is written in JavaScript and uses the setInterval method to update the timer display every 10 milliseconds. The timer includes two variables, seconds and tens, which track the elapsed time in seconds and tenths of a second, respectively. The startTimer function increments the tens variable every 10 milliseconds, and updates the timer display accordingly. When the tens variable reaches 100, the seconds variable is incremented and the tens variable is reset to 0.

# License
This project is licensed under the MIT License. Feel free to use, modify, and distribute this code as you see fit.