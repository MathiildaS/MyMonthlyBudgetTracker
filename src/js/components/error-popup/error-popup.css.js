/**
 * @file A module with a css template for the custom error-popup web component. 
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

export const cssTemplate = document.createElement('template')

cssTemplate.innerHTML = `
<style>
 .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    border: 2px solid #b0a8d6;
    color: #4b3f6b;
    padding: 1.25rem 2rem;
    border-radius: 12px;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
    z-index: 9999;
    font-family: 'DynaPuff', system-ui, sans-serif;
    font-size: 1rem;
    text-align: center;
    opacity: 0;
    transition: opacity 0.4s ease, transform 0.3s ease;
  }

  .popup.display {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.02);
  }
</style>
`
