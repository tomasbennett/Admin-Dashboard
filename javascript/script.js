class scaleStyling {

    constructor(itemHeight, itemWidth, containerHeight, containerWidth) {
        this.scaledHeight = containerHeight / itemHeight;
        this.scaledWidth = containerWidth / itemWidth;
    }

    objectFitCover() {
        return Math.max(this.scaledHeight, this.scaledWidth);
    }

    objectFitContain() {
        return Math.min(this.scaledHeight, this.scaledWidth);
    }
}

function scaleIframe() {

    const iframeContainers = document.querySelectorAll(".iframe-container");
    const iframes = document.querySelectorAll(".iframe-container iframe");

    for (let x = 0; x < iframes.length; x++) {
        let iframeHeight = iframes[x].offsetHeight;
        let iframeWidth = iframes[x].offsetWidth;

        let iframeContainerHeight = iframeContainers[x].offsetHeight;
        let iframeContainerWidth = iframeContainers[x].offsetWidth;

        let transform = new scaleStyling(
            iframeHeight, iframeWidth,
            iframeContainerHeight, iframeContainerWidth
        );

        let transformValue = transform.objectFitCover();

        iframes[x].style.transform = `scale(${transformValue})`;
    }
}

window.addEventListener('load', scaleIframe);
window.addEventListener('resize', scaleIframe);