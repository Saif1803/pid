const button = document.getElementById("button");

const steps = [
  "1. django-admin startproject main",
  "2. cd main",
  "3. python manage.py startapp app1",
  "4. in settings.py in main folder line 13: import os",
  "5. in settings.py line 57: DIRS = [os.path.join(BASE_DIR, 'templates')]",
  "6. copy and paste the urls.py from the main to app1",
  "7. in the main urls.py add the app1 urls in the urlpatterns list: path('', include('app1.urls'))",
  "8. in app1 urls.py add the urls for the app:\n   from app1 import views\n   path('', views.home)",
  "9. in app1 views.py add the views function:\n   from django.http import HttpResponse\n   def home(request): return HttpResponse('Hello World')",
  "10. create a folder called templates in the main folder",
  '11. for HTML rendering add this to views.py:\n    def home(request): return render(request, "index.html")'
];

button.addEventListener("click", function () {
  const fullText = steps.join("\n\n");
  navigator.clipboard.writeText(fullText)
    .then(() => {
      alert("All Django setup steps copied to clipboard.");
    })
    .catch((err) => {
      console.error("Failed to copy steps:", err);
      alert("Copy failed. Please try again.");
    });
});