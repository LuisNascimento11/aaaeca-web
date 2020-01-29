var pf = [true, true, true, true, true];

function change(id, i) {
    var em = document.getElementById(id);
    if (pf[i]) {
        em.classList.add('fa-minus');
    } else {
        em.classList.remove('fa-minus');
    }
    pf[i] = !pf[i];
}
