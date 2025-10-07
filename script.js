// Плавный скролл к разделу проектов
document.getElementById('btn-projects').addEventListener('click', function() {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});
