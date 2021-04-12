export default function clickerMarker(page, color, x, y) {
    return page.evaluate(
        ({ color, x, y }) => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollLeft = document.documentElement.scrollLeft;

            const node = document.createElement('div');
            node.style.all = 'initial';
            node.style.transform = `translate(${x + scrollTop - 2}px, ${y +
                scrollLeft -
                2}px)`;
            node.style.width = '4px';
            node.style.height = '4px';
            node.style.backgroundColor = color;
            node.style.borderRadius = '50%';
            node.style.position = 'absolute';
            node.style.zIndex = Number.MAX_SAFE_INTEGER;
            node.style.top = 0;
            node.style.left = 0;
            node.style.pointerEvents = 'none';
            document.body.appendChild(node);
        },
        { color, x, y }
    );
}
