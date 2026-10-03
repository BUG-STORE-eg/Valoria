VALORIA ROLEPLAY Store — تصميم الواجهة

المحتويات:
- index.html: متجر عربي RTL بتصميم داكن وأزرار زرقاء وقائمة أقسام وشبكة منتجات.
- assets/: ضع صور المنتجات هنا.

النشر:
1. فك ضغط ZIP.
2. ارفع index.html ومجلد assets إلى جذر مستودع Valoria في GitHub.
3. Settings > Pages > Deploy from a branch.
4. اختر main و /(root) ثم Save.
5. انتظر اكتمال النشر وافتح https://bug-store-eg.github.io/Valoria/

تعديل المنتجات:
افتح index.html وابحث عن const products=[...].
كل منتج يحتوي id, name, category, price, stock, image.
مثال للصورة: image:"assets/car01.png".
يجب أن تطابق category أحد أسماء الأقسام في قائمة cats، أو أضف القسم إلى القائمة.

تنبيه:
هذه واجهة ثابتة والسلة شكلية فقط. لا يوجد دفع حقيقي أو تسليم تلقائي أو اتصال بسيرفر MTA.
العناصر الحالية أمثلة تصميم وليست القائمة الأصلية؛ يلزم إعادة إرسال صور المنتجات السابقة أو ملف بياناتها لإضافة الأسماء والأسعار والصور بدقة.
