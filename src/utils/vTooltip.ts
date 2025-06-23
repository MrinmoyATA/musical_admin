export const vTooltip = {
  mounted(el: HTMLElement, binding: { value: string }) {
    // Create the tooltip text element
    const tooltipText = document.createElement("span");
    tooltipText.classList.add("tooltip-text");
    tooltipText.textContent = binding.value;
    tooltipText.style.whiteSpace = "nowrap";
    el.appendChild(tooltipText);

    // Show tooltip on hover
    el.addEventListener("mouseenter", () => {
      tooltipText.style.visibility = "visible";
      tooltipText.style.opacity = "1";
    });

    // Hide tooltip on hover end
    el.addEventListener("mouseleave", () => {
      tooltipText.style.visibility = "visible";
      tooltipText.style.opacity = "0";
    });
  },
};
