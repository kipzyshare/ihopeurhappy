document.addEventListener("DOMContentLoaded", function() {
    const flowerContainer = document.getElementById('flower-container');

    function createFlower() {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDuration = Math.random() * 5 + 5 + 's';

        flower.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="#ff69b4" viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 2a3 3 0 0 1 2.995 2.824L15 5v1h1a3 3 0 0 1 2.995 2.824L19 9v6a3 3 0 0 1-2.824 2.995L16 18h-1v1a3 3 0 0 1-2.824 2.995L12 22a3 3 0 0 1-2.995-2.824L9 19v-1H8a3 3 0 0 1-2.995-2.824L5 15V9a3 3 0 0 1 2.824-2.995L8 6h1V5a3 3 0 0 1 2.824-2.995L12 2zM8 8v8h8V8H8z"></path>
            </svg>
        `;

        flowerContainer.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 10000);
    }

    setInterval(createFlower, 1000);

    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDuration = Math.random() * 2 + 1 + 's';
        flowerContainer.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 2000);
    }

    for (let i = 0; i < 100; i++) {
        createStar();
    }

    setInterval(createStar, 1000);
});
