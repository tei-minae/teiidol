
document.addEventListener('DOMContentLoaded', function() {

function fadeInOnScroll() {
    const containers = document.querySelectorAll('.image-container');

    containers.forEach(container => {
        const containerTop = container.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (containerTop < windowHeight - 100) {
            container.classList.add('fade-in');
        } else {
            container.classList.remove('fade-in');
        }
    });
}

// ウィンドウのスクロールイベントに関数をバインド
window.addEventListener('scroll', fadeInOnScroll);

// ページ読み込み時にもフェードインを実行
window.addEventListener('load', fadeInOnScroll);

// 初期表示時にすぐにフェードインを適用
fadeInOnScroll();
document.getElementById('profile-image').addEventListener('click', function() {
    window.location.href = "minae.html";
});

});
