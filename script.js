document.addEventListener('DOMContentLoaded', function () {
    const mateuszImage = document.getElementById('mateusz');
    const clickCountElement = document.getElementById('clickCount');
    let clickCount = 0;

    mateuszImage.addEventListener('click', function () {
        clickCount++;
        clickCountElement.textContent = clickCount;

        mateuszImage.style.transform = 'scale(1.2)';
        setTimeout(function () {
            mateuszImage.style.transform = 'scale(1)';
        }, 200);
    });
});
