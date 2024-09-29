// const toggleSkillsBtn = document.getElementById("hideShow");
// const skillsSection = document.getElementById("toggleSkill");
// toggleSkillsBtn?.addEventListener("click", () => {
//     if (skillsSection) {
//         if (skillsSection.style.display === "none") {
//             skillsSection.style.display = "block";
//         } else {
//             skillsSection.style.display = "none";
//         }
//     }
// });
// function toggleSection(sectionId: string) {
//     const section = document.getElementById(sectionId);
//     if (section) {
//         if (section.style.display === 'none' || section.style.display === '') {
//             section.style.display = 'block';
//         } else {
//             section.style.display = 'none';
//         }
//     }
// }
// script.ts
var toggleButton = document.getElementById('toggleButton');
var toggleSection = document.getElementById('toggleSection');
toggleButton.addEventListener('click', function () {
    if (toggleSection.classList.contains('hidden')) {
        toggleSection.classList.remove('hidden');
    }
    else {
        toggleSection.classList.add('hidden');
    }
});
