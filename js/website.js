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


window.onscroll = () => {
    if (window.scrollY >= 600) {
        document.getElementById("top-scroll").style.display = "block";
    } else {
        document.getElementById("top-scroll").style.display = "none";
    }
}
upScroll = () => keepScrollingUp(0, 1)

$("#contact").submit(function (e) {
    e.preventDefault();

    var $form = $(this);
    $.post(
        $form.attr("action"),
        $form.serialize()
    ).then(function () {
        alert("Thank you!");
    });
});
