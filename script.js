//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const sizeInfo = document.getElementById("sizeInfo");
    const heading = document.createElement("h1");
    sizeInfo.appendChild(heading);

    function updateSize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        heading.textContent = `Width: ${width} and Height: ${height}`;
    }

    window.addEventListener("resize", updateSize);
    updateSize(); // Initial call to set size on page load
});
