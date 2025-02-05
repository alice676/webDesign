document.addEventListener('DOMContentLoaded', function () {
    var pages = document.querySelectorAll('.page');
    var currentPage = 0;

    function showPage(pageIndex) {
        pages[currentPage].classList.remove('active');
        pages[pageIndex].classList.add('active');
        currentPage = pageIndex;
    }

    // 預設顯示第一頁
    showPage(currentPage);

    document.addEventListener('wheel', function (event) {
        var delta = Math.sign(event.deltaY);
        var nextPage = currentPage + delta;

        if (nextPage >= 0 && nextPage < pages.length) {
            showPage(nextPage);
        }
    });
});