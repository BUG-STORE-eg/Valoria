# VALORIA ROLEPLAY Store (GitHub Pages)

واجهة متجر عربية RTL تجريبية لسيرفر MTA: San Andreas.

## النشر على GitHub Pages
1. أنشئ حساباً على GitHub إذا لم يكن لديك حساب.
2. اضغط **New repository** وسمّه `valoria-store`.
3. ارفع ملف `index.html` إلى جذر المستودع (Root).
4. افتح **Settings → Pages**.
5. في **Build and deployment** اختر **Deploy from a branch**.
6. اختر الفرع `main` والمجلد `/ (root)` ثم اضغط Save.
7. انتظر حتى يظهر رابط الموقع في صفحة Pages.

## تعديل المنتجات
افتح `index.html` وابحث عن `const products=[` داخل JavaScript.
عدّل أسماء المنتجات والتصنيفات والأسعار والوصف والإيموجي.
التصنيفات الحالية: سيارات، VIP، أسلحة، ملابس، أدوات، باقات.

## مهم
هذه واجهة Front-end فقط:
- لا يوجد تسجيل دخول حقيقي أو دفع إلكتروني.
- السلة تجريبية وتعمل داخل المتصفح فقط.
- لا تضع مفاتيح API أو كلمات مرور أو بيانات سرية في GitHub.
- ربط الطلبات بحسابات MTA يتطلب Backend آمن (مثل PHP على VPS) وواجهة API/قاعدة بيانات.
- GitHub Pages لا يشغّل PHP أو MySQL.
