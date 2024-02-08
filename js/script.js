document.getElementById("toggle-widget").addEventListener("click", function() {
    alert("Button Clicked!");
});
document.addEventListener("DOMContentLoaded", function () {
    const toggleWidgetButton = document.getElementById('toggle-widget');
    const chatWidgetContainer = document.getElementById('chat-widget-container');    
    toggleWidgetButton.addEventListener('click', function () {
        chatWidgetContainer.classList.toggle('hidden');
    });
    alert("Button Clicked!");
});