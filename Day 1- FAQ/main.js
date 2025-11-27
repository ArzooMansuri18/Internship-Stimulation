const faqs = document.querySelectorAll(".faq");

// simple logic
// faqs.forEach(faq => {
//     faq.addEventListener("click", () => {
//         faq.classList.toggle("active");
//     });
// });


// advance logic
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faqs.forEach(item => item !== faq && item.classList.remove("active"));
        faq.classList.toggle("active");
    });
});