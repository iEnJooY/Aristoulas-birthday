let currentPage = 1;
function nextPage() {
    document.getElementById('page' + currentPage).classList.add('hidden');
    currentPage++;
    const next = document.getElementById('page' + currentPage);
    if (next) next.classList.remove('hidden');
}
document.getElementById('page1').classList.remove('hidden');