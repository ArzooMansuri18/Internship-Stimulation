const occupation = document.querySelector("#occupation");
const studentField = document.querySelector("#studentField");
const feedbackType = document.querySelector("#feedbackType");
const otherFeedback = document.querySelector("#otherFeedback");
const form = document.querySelector("#surveyForm");

occupation.addEventListener("change", () => {
    if(occupation.value === "student"){
        studentField.classList.remove("hidden");
        studentField.classList.add("show");
    } else {
        studentField.classList.add("hidden");
    }
});

feedbackType.addEventListener("change", () => {
    if(feedbackType.value === "other"){
        otherFeedback.classList.remove("hidden");
        otherFeedback.classList.add("show");
    } else {
        otherFeedback.classList.add("hidden");
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅Thank you for your feedback, " + document.getElementById("name").value + "!");

    form.reset();
    studentField.classList.add("hidden");
    otherFeedback.classList.add("hidden");
});