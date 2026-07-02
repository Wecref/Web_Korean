function ClickCss(target, targets) {
    targets.forEach(element => element.classList.remove('active'));
    target.classList.add('active');
}

function smoothScroll(targetY, duration) {
    var startY = window.pageYOffset;
    var diff = targetY - startY;
    var startTime = performance.now();

    function step(currentTime) {
        var elapsed = currentTime - startTime;
        var progress = Math.min(elapsed / duration, 1);
        var ease = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        window.scrollTo(0, startY + diff * ease);
        if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

export function InitMenu(targets) {
    targets.forEach(target => {
        target.addEventListener('click', event => {
            event.preventDefault();
            ClickCss(event.currentTarget, targets);
            var href = event.currentTarget.getAttribute('href');
            if (href && href.startsWith('#')) {
                var targetElement = document.querySelector(href);
                if (targetElement) {
                    var nav = document.querySelector('nav');
                    var offset = nav ? nav.offsetHeight : 0;
                    var top = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                    smoothScroll(top, 500);
                }
                var navBody = document.querySelector('.nav-body');
                if (navBody) navBody.classList.remove('active');
            } else if (event.currentTarget.href) {
                var targetAttr = event.currentTarget.getAttribute('target');
                window.open(event.currentTarget.href, targetAttr || "_self");
            }
        });
    });
    targets[0].classList.add('active');
}

export function InitLanguageMenu(targets) {
    console.log(targets);

    targets.forEach(target => {
        target.addEventListener('click', event => {
            event.preventDefault();
            if (event.currentTarget.href) {
                window.location.replace(event.currentTarget.href);
            }
        });
    });
}

export function InitMenuIcon(icon, layout) {
    icon.addEventListener('click', () => {
        layout.classList.toggle('active');
    });
}
