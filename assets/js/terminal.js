// terminal.js

document.addEventListener('DOMContentLoaded', () => {
    const terminalBody = document.getElementById('terminal-body');
    const terminalInput = document.getElementById('terminal-input');

    function calculateMsPerBeat(bpm) {
        const msPerMinute = 60000;
        return msPerMinute / bpm;
    }

    function initialize() {
        terminalBody.innerHTML += 'Press Enter to start the BPM Calculator...\n';
        terminalInput.placeholder = '';

        terminalInput.onkeydown = (e) => {
            if (e.key === 'Enter' && terminalInput.value.trim() === '') {
                startCalculator();
            }
        };
    }

    function startCalculator() {
        terminalBody.innerHTML += 'Welcome to the BPM Calculator!\n';
        getBpm(); // Start the BPM calculation process
    }

    function getBpm() {
        terminalBody.innerHTML += 'Please enter the BPM:\n';
        terminalInput.placeholder = 'Enter BPM...';

        terminalInput.onkeydown = (e) => {
            if (e.key === 'Enter') {
                const bpm = parseFloat(terminalInput.value);
                if (!isNaN(bpm) && bpm > 0) {
                    const msPerFullBeat = calculateMsPerBeat(bpm);
                    const msPerHalfBeat = msPerFullBeat / 2;
                    const msPerQuarterBeat = msPerFullBeat / 4;
                    const msPerEighthBeat = msPerFullBeat / 8;
                    const msPerSixteenthBeat = msPerFullBeat / 16;

                    terminalBody.innerHTML += `\nResults for ${bpm} BPM:\n` +
                        `${msPerFullBeat.toFixed(2)} ms per full note\n` +
                        `${msPerHalfBeat.toFixed(2)} ms per half note\n` +
                        `${msPerQuarterBeat.toFixed(2)} ms per quarter note\n` +
                        `${msPerEighthBeat.toFixed(2)} ms per eighth note\n` +
                        `${msPerSixteenthBeat.toFixed(2)} ms per sixteenth note\n`;
                    terminalInput.placeholder = 'Press Enter to start again...';
                } else {
                    terminalBody.innerHTML += 'Invalid BPM. Please enter a positive number.\n';
                }
                terminalInput.value = '';
                terminalBody.scrollTop = terminalBody.scrollHeight;

                // Reset to wait for Enter key to restart
                terminalInput.onkeydown = (e) => {
                    if (e.key === 'Enter' && terminalInput.value.trim() === '') {
                        startCalculator();
                    }
                };
            }
        };
    }

    // Initialize the terminal with the starting message
    initialize();
});