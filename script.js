document.addEventListener('DOMContentLoaded', function() {
    const spinButton = document.getElementById('spinButton');
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const result = document.getElementById('result');

    const symbols = ['🍒', '🍋', '🍉', '🍇', '🍓'];

    function spinReel() {
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    function checkResult(r1, r2, r3) {
        if (r1 === r2 && r2 === r3) {
            return 'Jackpot! You win!';
        } else {
            return 'Try again!';
        }
    }

    function animateReels() {
        reel1.classList.add('spin');
        reel2.classList.add('spin');
        reel3.classList.add('spin');

        setTimeout(() => {
            reel1.classList.remove('spin');
            reel2.classList.remove('spin');
            reel3.classList.remove('spin');

            const result1 = spinReel();
            const result2 = spinReel();
            const result3 = spinReel();

            reel1.textContent = result1;
            reel2.textContent = result2;
            reel3.textContent = result3;

            result.textContent = checkResult(result1, result2, result3);
        }, 500); // Длительность анимации 0.5 секунды
    }

    spinButton.addEventListener('click', animateReels);
});
