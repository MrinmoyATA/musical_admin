import { Directive } from "vue";

const clickToSeeCodeDirective: Directive = {
  mounted(el: HTMLElement) {
    const buttons = el.querySelectorAll<HTMLElement>(".clickToSeeCodeBtn");
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const targetId = button.getAttribute("data-target");
        if (targetId) {
          const targetDiv = document.getElementById(targetId);
          if (targetDiv) {
            // Toggle the active class
            targetDiv.classList.toggle("active");

            // Change the button text based on the div's state
            if (targetDiv.classList.contains("active")) {
              button.textContent = "Click to Hide Code:";
            } else {
              button.textContent = "Click to See Code:";
            }
          }
        }
      });
    });
  },
};

export default clickToSeeCodeDirective;
