document.addEventListener('DOMContentLoaded', function() {
    const spinButton = document.getElementById('spinButton');
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const result = document.getElementById('result');
    const fireworksContainer = document.getElementById('fireworksContainer');

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

            const resultText = checkResult(result1, result2, result3);
            result.textContent = resultText;

            if (resultText === 'Jackpot! You win!') {
                launchFireworks();
            }
        }, 500); // Длительность анимации 0.5 секунды
    }

    function launchFireworks() {
        const positions = [];
        for (let i = 0; i < 3; i++) {
            const x = Math.random() * (window.innerWidth - 100);
            const y = Math.random() * (window.innerHeight - 100);
            positions.push({ x, y });
        }

        positions.forEach((pos, index) => {
            setTimeout(() => {
                const firework = document.createElement('div');
                firework.classList.add('firework');
                firework.style.left = `${pos.x}px`;
                firework.style.top = `${pos.y}px`;
                fireworksContainer.appendChild(firework);
                firework.style.display = 'block';

                setTimeout(() => {
                    firework.remove();
                }, 2000); // Длительность отображения салюта 2 секунды
            }, index * 100); // Задержка 0.1 секунды для каждого салюта
        });
    }

    spinButton.addEventListener('click', animateReels);
});
