function ClickCss(target, targets) {
    targets.forEach(element => element.classList.remove('active'));
    target.classList.add('active');
}

export function InitMenu(targets) {
    targets.forEach(target => {
        target.addEventListener('click', event => {
            event.preventDefault();
            ClickCss(event.currentTarget, targets);
            if (event.currentTarget.href) {
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
