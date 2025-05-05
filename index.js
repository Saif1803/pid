const button = document.getElementById("button");
const button1 = document.getElementById("button1");
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
  '11. for HTML rendering add this to views.py:\n    def home(request): return render(request, "index.html")',
];

const bookManagement = [
  "def add():",
  "    n=int(input('Enter the number of books to add:'))",
  "    for i in range(0,n):",
  "        if i==0:",
  "            title=input('Enter book title:')",
  "            author=input('Enter author name:')",
  "            price=int(input('Enter the price:'))",
  "            publisher=input('Enter publisher name:')",
  "            quantity=int(input('Enter the quantity:'))",
  "            new_book=[title,author,price,publisher,quantity]",
  "            book_list.append(new_book)",
  "        elif i!=0:",
  "            title=input('Enter book title:')",
  "            for i in book_list:",
  "                if i[0]==title:",
  "                    quantity=int(input('Enter number of books to add:'))",
  "                    i[4] =i[4]+quantity",
  "                    break",
  "            else:",
  "                author=input('Enter author name:')",
  "                price=int(input('Enter the price:'))",
  "                publisher=input('Enter publisher name:')",
  "                quantity=int(input('Enter the quantity:'))",
  "                new_book=[title,author,price,publisher,quantity]",
  "                book_list.append(new_book)",
  "def display():",
  "    for i in book_list:",
  "        print('Title:' ,i[0])",
  "        print('Author:', i[1])",
  "        print('Price:',i[2])",
  "        print('Publisher: ',i[3])",
  "        print('Quantity:',i[4])",
  "        print('-' * 40)",
  "def remove():",
  "    title=input('Enter book title to remove:')",
  "    for i in book_list:",
  "        if i[0]==title:",
  "            quantity=int(input('Enter number of books to remove:'))",
  "            if i[4] >= quantity:",
  "                i[4]= i[4]-quantity",
  "            else:",
  "                print('Not enough stock to remove.')",
  "def delete():",
  "    title=input('Enter book title to delete:')",
  "    for i in book_list:",
  "        if i[0]==title:",
  "            book_list.remove(i)",
  "            break",
  "    else:",
  "        print('Book not found')",
  "book_list=[]",
  "while True:",
  "    print('Book Database menu')",
  "    print('Enter option 1 for adding book')",
  "    print('Enter option 2 for displaying book')",
  "    print('Enter option 3 for removing book')",
  "    print('Enter option 4 for deleting book')",
  "    print('Enter option 5 to exit')",
  "    print('-' * 40)",
  "    option=int(input('Enter option(1-5):'))",
  "    if option==1:",
  "       add()",
  "       print('-' * 40)",
  "    elif option==2:",
  "        display()",
  "        print(book_list)",
  "        print('-' * 40)",
  "    elif option==3:",
  "        remove()",
  "        print(book_list)",
  "        print('-' * 40)",
  "    elif option==4:",
  "        delete()",
  "        print(book_list)",
  "        print('-' * 40)",
  "    elif option==5:",
  "        print('Exiting Book Database System. Goodbye!')",
  "        break",
  "    else:",
  "        print('Invalid option. Please enter a number from 1 to 5.')",
  "        print('-' * 40)",
];

button.addEventListener("click", function () {
  const fullText = steps.join("\n\n");
  navigator.clipboard
    .writeText(fullText)
    .then(() => {
      alert("All Django setup steps copied to clipboard.");
    })
    .catch((err) => {
      console.error("Failed to copy steps:", err);
      alert("Copy failed. Please try again.");
    });
});

button1.addEventListener("click", function () {
  const fullText = bookManagement.join("\n");
  navigator.clipboard
    .writeText(fullText)
    .then(() => {
      alert("book management code copied to clipboard.");
    })
    .catch((err) => {
      console.error("Failed to copy steps:", err);
      alert("Copy failed. Please try again.");
    });
});
