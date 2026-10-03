const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const app = express();
app.use(cors());
app.use(express.json());

const ADMIN_EMAIL = 'Alone@admin.com';
// Password is stored only as a one-way SHA-256 hash; never expose it to GitHub/frontend.
const ADMIN_PASSWORD_SHA256 = 'e25ee2d5fc6961de2f33835e0ab46cc52f4faea2cb17b2aeb5ad1463a1b171ce';

app.get('/api/health', (_, res) => res.json({ ok:true, service:'VALORIA STORE' }));
app.post('/api/login', (req,res)=>{
  const {email,password} = req.body || {};
  if(!email || !password) return res.status(400).json({message:'البيانات ناقصة'});
  const hash = crypto.createHash('sha256').update(password).digest('hex');
  if(email.toLowerCase() === ADMIN_EMAIL.toLowerCase() && hash === ADMIN_PASSWORD_SHA256){
    return res.json({message:'تم تسجيل دخول الأدمن', role:'admin', token:crypto.randomBytes(32).toString('hex')});
  }
  res.status(401).json({message:'الإيميل أو كلمة المرور غير صحيحة'});
});
app.listen(process.env.PORT || 3000, ()=>console.log('VALORIA backend running on port '+(process.env.PORT||3000)));
