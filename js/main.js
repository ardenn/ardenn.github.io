const miniMenu = document.getElementById('minimenu');
function toggleMiniBar() {
    if (miniMenu.classList.contains("show")) {
        miniMenu.classList.remove("show");
    } else {
        miniMenu.classList.add("show");
        miniMenu.classList.add("slideInDown");
    }
}
function closeMiniBar() {
    miniMenu.classList.remove("show");
    miniMenu.classList.remove("slideInDown");
}

$("#my-form").submit(function (e) {
    e.preventDefault();

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize())
        .then(function () {
            $("#form-success").show();
            setTimeout(function () { $("#form-success").hide(); }, 5000);
            $("#my-form").trigger("reset");
        })
        .catch(function () {
            $("#form-failure").show();
            setTimeout(function () { $("#form-failure").hide(); }, 5000);
        });
});

function keepScrollingDown(to, speed) {
    if (window.scrollY < to - 20) {
        setTimeout(() => {
            window.scrollBy(0, 30)
            keepScrollingDown(to, speed)
        }, speed)
    }
}

function keepScrollingUp(to, speed) {
    if (window.scrollY > to + 10) {
        setTimeout(() => {
            window.scrollBy(0, -30)
            keepScrollingUp(to, speed)
        }, speed)
    }

}

function slowScroll(item) {
    let currentPosition = window.scrollY
    let target = item.getAttribute("href").split("").splice(1).join("")
    let targetPosition = document.getElementById(target).offsetTop
    let reverse = (targetPosition - currentPosition) < 0 ? true : false

    if (reverse) {
        keepScrollingUp(targetPosition, 1)
    } else {
        keepScrollingDown(targetPosition, 1)
    }
};

const topScroll = document.getElementById("top-scroll");
window.onscroll = () => {
    if (window.scrollY >= 600) {
        topScroll.style.display = "flex";
    } else {
        topScroll.style.display = "none";
    }
}
upScroll = () => keepScrollingUp(0, 1)