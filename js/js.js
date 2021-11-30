document.addEventListener('click', ({ target: t }) => {
    if (t.classList.contains('click-count')) {
        t.innerText = (t.innerText | 0) + 1;
    }
});
