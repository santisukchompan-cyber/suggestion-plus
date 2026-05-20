import React, { useState, useRef, useEffect } from 'react';
import {
  Home, User, Gift, Bell, ChevronDown, ChevronRight,
  Settings, Clock, Activity, Box, Truck, TrendingDown, AlertTriangle, MoreHorizontal,
  Send, PlayCircle, Star, Zap, ArrowDownLeft, ArrowUpRight, Award, Heart,
  ShoppingCart, Share2, Plus, Minus, Ticket, Headphones,
  CheckCircle, XCircle, Trophy, Loader2, X, RefreshCw, BookOpen, Globe,
  Building, Lightbulb, FileText, Calendar, MessageSquare, CircleDollarSign,
  Users, Hourglass, Target, HelpCircle, LogOut, PhoneCall, Shield, BellRing,
  Quote, Trash2, Package, Volume2, Compass, QrCode, Camera, Image as ImageIcon,
  Moon, Sun, Search, Menu, ChevronLeft
} from 'lucide-react';

// ─── Coin Icon ────────────────────────────────────────────────────────────────
const CoinIcon = ({ type, size = 32, iconSize = 14 }) => {
  const g = {
    gold:   'from-yellow-200 via-yellow-400 to-yellow-600 border-yellow-300 text-yellow-900',
    silver: 'from-slate-100 via-slate-300 to-slate-500 border-slate-200 text-slate-700',
    bronze: 'from-orange-200 via-orange-400 to-orange-600 border-orange-300 text-orange-900',
  };
  return (
    <div style={{ width: size, height: size }} className={`rounded-full bg-gradient-to-br ${g[type]} border-2 flex items-center justify-center relative overflow-hidden shrink-0`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/40 rounded-full" />
      <CircleDollarSign size={iconSize} className="relative z-10 opacity-90" />
    </div>
  );
};

// ─── Dict ─────────────────────────────────────────────────────────────────────
const T = {
  th: {
    app: 'Suggestion Plus +', tagline: 'Global Fujikura Productivity System',
    login: 'เข้าสู่ระบบ', login_loading: 'กำลังตรวจสอบ...',
    emp_id: 'รหัสพนักงาน (EMP ID)', password: 'รหัสผ่าน',
    footer: '© 2026 Fujikura Connec — version 1.01',
    nav_home: 'หน้าหลัก', nav_profile: 'โปรไฟล์', nav_rewards: 'แลกรางวัล',
    nav_learn: 'ศูนย์ความรู้', nav_board: 'กระดานผู้นำ',
    submit_kaizen: 'ส่งข้อเสนอแนะ Kaizen', select_dept: 'เลือกพื้นที่ / แผนก',
    select_dept_ph: 'เลือกพื้นที่/แผนกของคุณ...', what_waste: 'ประเภทความสูญเสีย',
    select_one: '(เลือก 1 ข้อ)', desc_problem: 'รายละเอียดปัญหา',
    type_problem: 'อธิบายปัญหาที่พบ...', submit_btn: 'ส่งข้อเสนอแนะ',
    quota: 'โควต้าวันนี้', submitting: 'กำลังส่ง...', connecting: 'กำลังเชื่อมต่อ...',
    submit_success: 'ส่งสำเร็จ!', queue_sys: 'กำลังจัดคิว', queue_your: 'คิวของคุณ',
    queue_wait: 'กรุณารอ อย่าปิดหน้านี้...',
    your_balance: 'ยอดเหรียญของคุณ', total_coins: 'รวมทั้งหมด',
    gold_coin: 'เหรียญทอง', silver_coin: 'เหรียญเงิน', bronze_coin: 'เหรียญทองแดง',
    recent_tx: 'ประวัติล่าสุด', this_month: 'เดือนนี้',
    my_stats: 'สถิติของฉัน', approved_history: 'ประวัติที่อนุมัติแล้ว', no_history: 'ยังไม่มีประวัติ',
    claim_coins: 'รับเหรียญรางวัล', claim_btn: 'รับเหรียญ', wait_moment: 'รอสักครู่...',
    claimable_desc: 'มีข้อเสนอแนะที่ผ่านการอนุมัติและรอรับเหรียญ',
    all_claimed: 'รับเหรียญครบแล้ว!', all_claimed_desc: 'ส่ง Kaizen เพิ่มเพื่อรับเหรียญต่อไป',
    rewards_title: 'แลกรางวัล', categories: 'หมวดหมู่', all: 'ทั้งหมด',
    in_stock: 'มีสินค้า', out_of_stock: 'สินค้าหมด', pcs: 'ชิ้น',
    add_to_cart: 'ใส่ตะกร้า', redeem_now: 'แลกทันที', my_cart: 'ตะกร้าของฉัน',
    confirm_redeem: 'ยืนยันการแลก', cart_empty: 'ตะกร้าว่าง', add_rewards: 'เพิ่มของรางวัลที่ต้องการ',
    insufficient_coins: 'เหรียญไม่เพียงพอ', cart_stock_error: 'สินค้าบางรายการหมดสต็อก',
    processing_cart: 'กำลังประมวลผล...', success: 'สำเร็จ!',
    redeem_success_desc: 'แลกรางวัลเรียบร้อยแล้ว',
    insufficient_coin_val: 'เหรียญไม่เพียงพอ', out_of_stock_alert: 'สต็อกไม่เพียงพอ',
    by: 'โดย', coins_uc: 'Coins', color: 'สี', options: 'ตัวเลือก',
    notif_title: 'การแจ้งเตือน', read_all: 'อ่านทั้งหมด',
    sugg_detail: 'รายละเอียดข้อเสนอแนะ', updated: 'อัปเดต:',
    msg_evaluator: 'ข้อความจากผู้ประเมิน', earned_coins: 'เหรียญที่ได้รับ',
    area_dept: 'พื้นที่ / แผนก', waste_type: 'ประเภทความสูญเสีย',
    problem_detail: 'รายละเอียดปัญหา', submit_date: 'วันที่ส่ง',
    close_window: 'ปิด', acknowledge: 'รับทราบ', edit_sugg: 'แก้ไข', share_success: 'แชร์',
    knowledge_hub: 'ศูนย์รวมความรู้', search_article: 'ค้นหาบทความ...',
    videos: 'วิดีโอ', articles: 'บทความ', all_content: 'ทั้งหมด',
    live_vod: 'LIVE / VOD', video_len: 'ความยาว:',
    content_detail: 'รายละเอียด', video_desc: 'วิดีโอนี้อธิบาย',
    video_desc2: 'เพื่อให้นำความรู้ไปประยุกต์ใช้ได้!',
    leaderboard_title: 'กระดานผู้นำประจำเดือน',
    leaderboard_desc: 'อัปเดตล่าสุด • แข่งขันเพื่อรับเหรียญเพิ่ม!',
    total: 'ยอดรวม', approved_sugg: 'ข้อเสนอแนะที่อนุมัติ', past_month: 'ย้อนหลัง 1 เดือน',
    settings: 'ตั้งค่า', dark_mode: 'โหมดมืด', language: 'ภาษา', notifications: 'การแจ้งเตือน',
    logout: 'ออกจากระบบ', help: 'ช่วยเหลือ', need_help: 'ต้องการความช่วยเหลือ?',
    help_desc: 'หากพบปัญหาในการใช้งาน\nกรุณาติดต่อทีม Support',
    contact_support: 'ติดต่อ Support', ext_4800: 'เบอร์ภายใน 4800',
    missions: 'ภารกิจองค์กร', idea_bank: 'คลังไอเดีย (20)',
    idea_bank_desc: 'รวบรวมไอเดียจากหลายแผนก', proposed_by: 'เสนอโดย:', likes: 'ถูกใจ',
    other_wastes: 'อื่นๆ', invalid_area: 'กรุณาเลือกพื้นที่/แผนก',
    invalid_waste: 'กรุณาเลือกประเภทความสูญเสีย', invalid_detail: 'กรุณากรอกรายละเอียด',
    sugg_pending: "กำลัง 'รอพิจารณา'", wait_evaluator: 'รอหัวหน้าพิจารณา',
    daily_limit: 'ส่งครบโควต้าวันนี้แล้ว กรุณาลองพรุ่งนี้',
    transfer_success: 'โอนเหรียญเข้ากระเป๋าแล้ว', congrats: 'ยินดีด้วย!',
    reward_sent: 'ดำเนินการจัดส่งของรางวัลแล้ว',
    thank_you: 'ขอบคุณที่ร่วมสร้างสรรค์กับ GFPS!',
    error: 'ข้อผิดพลาด', ok: 'ตกลง', hello: 'สวัสดี', cancel: 'ยกเลิก',
    req_coins_summary: 'สรุปเหรียญที่ต้องใช้',
    stats_desc: 'สรุปเหรียญจากผลงานที่ผ่านการ Approve',
  },
  en: {
    app: 'Suggestion Plus +', tagline: 'Global Fujikura Productivity System',
    login: 'Login', login_loading: 'Verifying...',
    emp_id: 'Employee ID (EMP ID)', password: 'Password',
    footer: '© 2026 Fujikura Connec — version 1.01',
    nav_home: 'Home', nav_profile: 'Profile', nav_rewards: 'Rewards',
    nav_learn: 'Knowledge', nav_board: 'Leaderboard',
    submit_kaizen: 'Submit Kaizen Suggestion', select_dept: 'Select Area / Dept',
    select_dept_ph: 'Select your area/department...', what_waste: 'Waste Type',
    select_one: '(Select 1)', desc_problem: 'Problem Details',
    type_problem: 'Describe the problem...', submit_btn: 'Submit Suggestion',
    quota: "Today's quota", submitting: 'Submitting...', connecting: 'Connecting...',
    submit_success: 'Submitted!', queue_sys: 'Queueing', queue_your: 'Your Queue',
    queue_wait: 'Please wait, do not close...',
    your_balance: 'Your Balance', total_coins: 'Total',
    gold_coin: 'Gold Coin', silver_coin: 'Silver Coin', bronze_coin: 'Bronze Coin',
    recent_tx: 'Recent Transactions', this_month: 'This Month',
    my_stats: 'My Stats', approved_history: 'Approved History', no_history: 'No history yet',
    claim_coins: 'Claim Coins', claim_btn: 'Claim', wait_moment: 'Please wait...',
    claimable_desc: 'You have approved suggestions waiting for coin claims',
    all_claimed: 'All coins claimed!', all_claimed_desc: 'Submit more Kaizen to earn more',
    rewards_title: 'Rewards', categories: 'Categories', all: 'All',
    in_stock: 'In Stock', out_of_stock: 'Out of Stock', pcs: 'pcs',
    add_to_cart: 'Add to Cart', redeem_now: 'Redeem Now', my_cart: 'My Cart',
    confirm_redeem: 'Confirm Redemption', cart_empty: 'Cart is Empty', add_rewards: 'Add rewards to redeem',
    insufficient_coins: 'Insufficient coins', cart_stock_error: 'Some items out of stock',
    processing_cart: 'Processing...', success: 'Success!',
    redeem_success_desc: 'Rewards redeemed successfully',
    insufficient_coin_val: 'Insufficient coins', out_of_stock_alert: 'Not enough stock',
    by: 'By', coins_uc: 'Coins', color: 'Color', options: 'Options',
    notif_title: 'Notifications', read_all: 'Read All',
    sugg_detail: 'Suggestion Details', updated: 'Updated:',
    msg_evaluator: 'Evaluator Message', earned_coins: 'Earned Coins',
    area_dept: 'Area / Dept', waste_type: 'Waste Type',
    problem_detail: 'Problem Details', submit_date: 'Submitted Date',
    close_window: 'Close', acknowledge: 'Acknowledge', edit_sugg: 'Edit', share_success: 'Share',
    knowledge_hub: 'Knowledge Hub', search_article: 'Search articles...',
    videos: 'Videos', articles: 'Articles', all_content: 'All',
    live_vod: 'LIVE / VOD', video_len: 'Duration:',
    content_detail: 'Details', video_desc: 'This video explains',
    video_desc2: 'so you can apply it effectively!',
    leaderboard_title: 'Monthly Leaderboard',
    leaderboard_desc: 'Updated just now • Compete to earn more coins!',
    total: 'Total', approved_sugg: 'Approved Suggestions', past_month: 'Past 1 Month',
    settings: 'Settings', dark_mode: 'Dark Mode', language: 'Language', notifications: 'Notifications',
    logout: 'Logout', help: 'Help', need_help: 'Need Help?',
    help_desc: 'If you encounter any issues,\nplease contact Support.',
    contact_support: 'Contact Support', ext_4800: 'Internal Ext. 4800',
    missions: 'Missions', idea_bank: 'Idea Bank (20)',
    idea_bank_desc: 'Ideas from various departments', proposed_by: 'Proposed by:', likes: 'Likes',
    other_wastes: 'Others', invalid_area: 'Please select Area/Department',
    invalid_waste: 'Please select Waste Type', invalid_detail: 'Please provide details',
    sugg_pending: "'Pending' review", wait_evaluator: 'Waiting for supervisor',
    daily_limit: 'Daily quota reached. Try again tomorrow.',
    transfer_success: 'Coins transferred to your wallet', congrats: 'Congratulations!',
    reward_sent: 'Rewards are being sent to your department',
    thank_you: 'Thank you for participating in GFPS!',
    error: 'Error', ok: 'OK', hello: 'Hello', cancel: 'Cancel',
    req_coins_summary: 'Required Coins Summary',
    stats_desc: 'Summary of all coins from approved works',
  }
};

const DEPTS = ['Assembly Line 1','Assembly Line 2','Plating','Pressing','Warehouse','Quality Control','Molding'];

const WASTE_MAIN = [
  { id:'defect', icon:Settings, th:'ของเสีย', en:'Defect' },
  { id:'waiting', icon:Clock, th:'รอคอย', en:'Waiting' },
  { id:'motion', icon:Activity, th:'เคลื่อนไหว', en:'Motion' },
  { id:'inventory', icon:Box, th:'สต็อกล้น', en:'Inventory' },
  { id:'transport', icon:Truck, th:'ขนส่ง', en:'Transport' },
  { id:'over-pro', icon:TrendingDown, th:'ผลิตเกิน', en:'Over-pro' },
  { id:'over-process', icon:AlertTriangle, th:'ซับซ้อน', en:'Over-process' },
];

const WASTE_OTHER = [
  { id:'5s', icon:Star, th:'5 ส', en:'5S' },
  { id:'eliminate', icon:Trash2, th:'Eliminate', en:'Eliminate' },
  { id:'combine', icon:Plus, th:'Combine', en:'Combine' },
  { id:'rearrange', icon:RefreshCw, th:'Rearrange', en:'Rearrange' },
  { id:'simplify', icon:Zap, th:'Simplify', en:'Simplify' },
];

const ALL_WASTE = [...WASTE_MAIN, ...WASTE_OTHER];

const CATS = [
  { id:1, th:'แกดเจ็ต', en:'Gadgets', icon:Headphones },
  { id:2, th:'เครื่องเสียง', en:'Audio', icon:Volume2 },
  { id:3, th:'ไลฟ์สไตล์', en:'Lifestyle', icon:Compass },
  { id:4, th:'คูปอง', en:'Vouchers', icon:Ticket },
];

const INIT_PRODUCTS = [
  { id:1, th:'iPhone 15 Pro', en:'iPhone 15 Pro', brand:'Apple', price:1500, type:'gold', stock:3, catId:1, emoji:'📱', bg:'linear-gradient(135deg,#1c1c1e,#3a3a3c)', descTh:'แลกรับสมาร์ทโฟนระดับพรีเมียมด้วยเหรียญทองจากการเสนอแนะ Kaizen', descEn:'Redeem premium smartphone with your Kaizen gold coins', colors:['Natural Titanium','Blue Titanium'], storages:['256 GB','512 GB'] },
  { id:2, th:'Smartwatch Series 9', en:'Smartwatch Series 9', brand:'GFPS Gadget', price:450, type:'silver', stock:0, catId:1, emoji:'⌚', bg:'linear-gradient(135deg,#2c3e50,#4ca1af)', descTh:'นาฬิกาอัจฉริยะสำหรับคนรักสุขภาพ (หมดชั่วคราว)', descEn:'Smartwatch for health lovers (Temp out of stock)', colors:['Midnight','Starlight'], storages:['Standard'] },
  { id:3, th:'หูฟัง Noise Cancelling Pro', en:'Noise Cancelling Headphones Pro', brand:'AudioPro', price:900, type:'silver', stock:15, catId:2, emoji:'🎧', bg:'linear-gradient(135deg,#141e30,#243b55)', descTh:'ตัดเสียงรบกวน เพิ่มสมาธิในการทำงาน', descEn:'Cancel noise, increase focus at work', colors:['White','Black'], storages:['Standard'] },
  { id:4, th:'แจ็คเก็ต GFPS Limited', en:'GFPS Limited Jacket', brand:'GFPS Official', price:90, type:'gold', stock:50, catId:3, emoji:'🧥', bg:'linear-gradient(135deg,#1a237e,#283593)', descTh:'เสื้อแจ็คเก็ตรุ่นพิเศษ Limited Edition สำหรับพนักงาน GFPS', descEn:'Special Limited Edition jacket for GFPS employees', colors:['Navy Blue','Charcoal Black'], storages:['S','M','L','XL'] },
  { id:5, th:'ลำโพง Bluetooth 360°', en:'Bluetooth 360° Speaker', brand:'AudioPro', price:300, type:'silver', stock:10, catId:2, emoji:'🔊', bg:'linear-gradient(135deg,#1b4332,#2d6a4f)', descTh:'ลำโพงไร้สายเสียงรอบทิศทาง กันน้ำ IPX5', descEn:'Wireless 360° speaker, IPX5 waterproof', colors:['Midnight Black','Ocean Blue'], storages:['Standard'] },
  { id:6, th:'คูปองกาแฟ Cafe Amazon 100฿', en:'Cafe Amazon Voucher 100THB', brand:'Cafe Amazon', price:50, type:'bronze', stock:100, catId:4, emoji:'☕', bg:'linear-gradient(135deg,#3e1f00,#7b3f00)', descTh:'คูปองแทนเงินสดร้าน Cafe Amazon มูลค่า 100 บาท', descEn:'Cafe Amazon cash voucher worth 100 THB', colors:[], storages:[] },
  { id:7, th:'Power Bank 20,000 mAh', en:'Power Bank 20,000 mAh', brand:'GFPS Tech', price:180, type:'silver', stock:25, catId:1, emoji:'🔋', bg:'linear-gradient(135deg,#0f2027,#203a43,#2c5364)', descTh:'Power Bank ความจุสูง ชาร์จเร็ว 65W', descEn:'High capacity 65W fast charging power bank', colors:['Matte Black','Silver'], storages:['Standard'] },
  { id:8, th:'กระบอกน้ำ Stainless 750ml', en:'Stainless Bottle 750ml', brand:'GFPS Official', price:35, type:'bronze', stock:200, catId:3, emoji:'🫙', bg:'linear-gradient(135deg,#485563,#29323c)', descTh:'กระบอกน้ำสแตนเลสพร้อมโลโก้ GFPS เก็บความเย็นนาน 24 ชม.', descEn:'Stainless bottle with GFPS logo, 24hr cold retention', colors:['Silver','Matte Black','Forest Green'], storages:['750ml'] },
];

const INIT_TXS = [
  { id:1, th:'แลกเสื้อแจ็คเก็ต GFPS', en:'Redeemed GFPS Jacket', dateTh:'วันนี้, 13:15 น.', dateEn:'Today, 13:15', amount:'-90', type:'expense', coinType:'gold' },
  { id:2, th:'อนุมัติ Kaizen (ลดขั้นตอน)', en:'Approved Kaizen', dateTh:'วันนี้, 09:00 น.', dateEn:'Today, 09:00', amount:'+150', type:'income', coinType:'silver', wasteTh:'ขั้นตอนซับซ้อน', wasteEn:'Over-process', detailTh:'ออกแบบจิ๊กล็อกชิ้นงานใหม่', detailEn:'Designed new locking jig' },
  { id:3, th:'รางวัลพนักงานดีเด่น', en:'Outstanding Employee Award', dateTh:'10 มี.ค., 08:00 น.', dateEn:'Mar 10, 08:00', amount:'+500', type:'income', coinType:'gold', wasteTh:'ผลงานรวม', wasteEn:'Overall Perf.', detailTh:'คะแนน Kaizen สูงสุดประจำเดือน', detailEn:'Highest Kaizen score this month' },
];

const MEDIA = [
  { id:1, th:'ทำความรู้จัก 7 Wastes', en:'Understanding 7 Wastes', duration:'3:45', type:'video', emoji:'🏭', bg:'linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)' },
  { id:2, th:'Kaizen คืออะไร?', en:'What is Kaizen?', duration:'2 min read', type:'article', emoji:'📖', bg:'linear-gradient(135deg,#134e5e,#71b280)' },
  { id:3, th:'5ส เพื่อที่ทำงานดี', en:'5S for better workspace', duration:'4:10', type:'video', emoji:'✨', bg:'linear-gradient(135deg,#f7971e,#ffd200)' },
  { id:4, th:'Lean Manufacturing คืออะไร?', en:'What is Lean Manufacturing?', duration:'5:20', type:'video', emoji:'⚙️', bg:'linear-gradient(135deg,#232526,#414345)' },
  { id:5, th:'การลดความสูญเสียในสายการผลิต', en:'Reducing waste on production line', duration:'3 min read', type:'article', emoji:'📉', bg:'linear-gradient(135deg,#005c97,#363795)' },
  { id:6, th:'Visual Management บนไลน์ผลิต', en:'Visual Management on production floor', duration:'6:00', type:'video', emoji:'📊', bg:'linear-gradient(135deg,#4e0000,#800000)' },
];

const TOP_EARNERS = [
  { id:1, name:'Ms. Somsri', coins:'2,450', initials:'SS', avatarBg:'linear-gradient(135deg,#f093fb,#f5576c)', deptTh:'Plating', deptEn:'Plating', quoteTh:'การเปลี่ยนแปลงเล็กๆ นำสู่ผลลัพธ์ยิ่งใหญ่', quoteEn:'Small changes lead to big results', suggestions:[{id:101,th:'รีไซเคิลสีเหลือทิ้ง',en:'Recycle leftover paints',earned:'+1,500',dateTh:'15 มี.ค.',dateEn:'Mar 15'}] },
  { id:2, name:'Santisuk (You)', coins:'1,890', initials:'SC', avatarBg:'linear-gradient(135deg,#4facfe,#00f2fe)', deptTh:'Assembly Line 1', deptEn:'Assembly Line 1', quoteTh:'Kaizen ไม่ใช่แค่โครงการ แต่เป็นวิถีชีวิต', quoteEn:"Kaizen isn't just a project, it's a lifestyle", suggestions:[{id:201,th:'ทำจิ๊กล็อกชิ้นงาน',en:'Create Jig for parts',earned:'+1,200',dateTh:'5 มี.ค.',dateEn:'Mar 5'}] },
  { id:3, name:'Mr. Somchai', coins:'1,420', initials:'SC', avatarBg:'linear-gradient(135deg,#43e97b,#38f9d7)', deptTh:'Warehouse', deptEn:'Warehouse', quoteTh:'ลดความสูญเปล่า เพิ่มรอยยิ้ม', quoteEn:'Reduce waste, add smiles', suggestions:[{id:301,th:'จัดระเบียบชั้นวาง (5S)',en:'Reorganize shelves (5S)',earned:'+800',dateTh:'2 มี.ค.',dateEn:'Mar 2'}] },
  { id:4, name:'Ms. Lalida', coins:'1,180', initials:'LL', avatarBg:'linear-gradient(135deg,#fa709a,#fee140)', deptTh:'Quality Control', deptEn:'Quality Control', quoteTh:'คุณภาพดีเริ่มจากทุกคนในทีม', quoteEn:'Quality starts with every team member', suggestions:[{id:401,th:'ออกแบบ Check Sheet ใหม่',en:'Redesign check sheet',earned:'+600',dateTh:'1 มี.ค.',dateEn:'Mar 1'}] },
  { id:5, name:'Mr. Krit', coins:'950', initials:'KT', avatarBg:'linear-gradient(135deg,#a18cd1,#fbc2eb)', deptTh:'Molding', deptEn:'Molding', quoteTh:'ปรับปรุงทุกวัน วันละนิด ชีวิตดีกว่าเดิม', quoteEn:'Improve daily, a little at a time', suggestions:[{id:501,th:'ลดเวลา Setup แม่พิมพ์',en:'Reduce mold setup time',earned:'+500',dateTh:'28 ก.พ.',dateEn:'Feb 28'}] },
];

const MOCK_IDEAS = Array.from({length:12},(_,i)=>{
  const depts=['Assembly Line','Plating','Warehouse','Quality','Molding'];
  const tTh=['ทำป้ายสี','ติดเซ็นเซอร์','ใช้รถเข็นใหม่','รวมขั้นตอน','Checklist'];
  const tEn=['Color-code bins','Install sensor','New cart system','Merge steps','Add checklist'];
  return {id:i+1,th:`${tTh[i%5]} #${i+1}`,en:`${tEn[i%5]} #${i+1}`,dept:depts[i%5],authorTh:`พนักงาน ${i+10}`,authorEn:`Employee ${i+10}`,likes:Math.floor(Math.random()*50)+10};
});

// ─── PhotoAttach Component ────────────────────────────────────────────────────
// Handles: file upload (multi), drag-and-drop, live webcam capture
function PhotoAttach({ lang, surface, surface2, border, txt, muted, accent, attachedImages, setAttachedImages }) {
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  const [showCamera, setShowCamera] = useState(false);
  const [camReady, setCamReady] = useState(false);
  const [camErr, setCamErr] = useState('');
  const [dragging, setDragging] = useState(false);
  const [lightbox, setLightbox] = useState(null); // url

  const MAX_PHOTOS = 5;
  const canAdd = attachedImages.length < MAX_PHOTOS;

  // open webcam
  const openCamera = async () => {
    setCamErr('');
    setCamReady(false);
    setShowCamera(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => { videoRef.current.play(); setCamReady(true); };
      }
    } catch (e) {
      setCamErr(lang === 'th' ? 'ไม่สามารถเข้าถึงกล้องได้ กรุณาอนุญาตสิทธิ์กล้องในเบราว์เซอร์' : 'Camera access denied. Please allow camera permission in your browser.');
    }
  };

  const closeCamera = () => {
    if (streamRef.current) { streamRef.current.getTracks().forEach(t => t.stop()); streamRef.current = null; }
    setShowCamera(false); setCamReady(false); setCamErr('');
  };

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current || !camReady) return;
    const v = videoRef.current;
    const c = canvasRef.current;
    c.width = v.videoWidth;
    c.height = v.videoHeight;
    c.getContext('2d').drawImage(v, 0, 0);
    const url = c.toDataURL('image/jpeg', 0.85);
    const name = `photo_${Date.now()}.jpg`;
    setAttachedImages(p => [...p, { url, name, src: 'camera' }]);
    closeCamera();
  };

  // file upload
  const handleFiles = (files) => {
    const allowed = Array.from(files).filter(f => f.type.startsWith('image/')).slice(0, MAX_PHOTOS - attachedImages.length);
    allowed.forEach(file => {
      const reader = new FileReader();
      reader.onload = e => setAttachedImages(p => [...p, { url: e.target.result, name: file.name, src: 'upload' }]);
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (idx) => setAttachedImages(p => p.filter((_, i) => i !== idx));

  // drag-and-drop
  const onDragOver = (e) => { e.preventDefault(); setDragging(true); };
  const onDragLeave = () => setDragging(false);
  const onDrop = (e) => { e.preventDefault(); setDragging(false); if (canAdd) handleFiles(e.dataTransfer.files); };

  const labelTh = { section: 'แนบรูปภาพ / ถ่ายภาพ', upload: 'อัปโหลดรูป', camera: 'ถ่ายรูป', drop: `ลากรูปมาวางที่นี่ หรือคลิกเพื่ออัปโหลด (สูงสุด ${MAX_PHOTOS} รูป)`, count: `${attachedImages.length}/${MAX_PHOTOS} รูป`, snap: 'ถ่ายภาพ', close: 'ปิดกล้อง' };
  const labelEn = { section: 'Attach Photos / Take Photo', upload: 'Upload', camera: 'Camera', drop: `Drag & drop images here or click to upload (max ${MAX_PHOTOS})`, count: `${attachedImages.length}/${MAX_PHOTOS} photos`, snap: 'Capture', close: 'Close Camera' };
  const L = lang === 'th' ? labelTh : labelEn;

  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <label style={{ fontSize: 12, fontWeight: 600, color: muted, textTransform: 'uppercase', letterSpacing: 0.5 }}>{L.section}</label>
        <span style={{ fontSize: 11, fontWeight: 700, color: attachedImages.length >= MAX_PHOTOS ? '#ef4444' : muted }}>{L.count}</span>
      </div>

      {/* Thumbnails row */}
      {attachedImages.length > 0 && (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 10 }}>
          {attachedImages.map((img, i) => (
            <div key={i} style={{ position: 'relative', width: 80, height: 80, borderRadius: 10, overflow: 'hidden', border: `2px solid ${accent}`, cursor: 'pointer', flexShrink: 0 }}>
              <img src={img.url} alt={img.name} onClick={() => setLightbox(img.url)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <button onClick={() => removeImage(i)} style={{ position: 'absolute', top: 3, right: 3, width: 20, height: 20, borderRadius: '50%', background: '#ef4444', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
                <X size={11} color="#fff" />
              </button>
              {img.src === 'camera' && (
                <div style={{ position: 'absolute', bottom: 3, left: 3, background: 'rgba(0,0,0,0.55)', borderRadius: 4, padding: '1px 5px' }}>
                  <Camera size={9} color="#fff" />
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Drop zone + action buttons */}
      {canAdd && (
        <div
          onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
          style={{
            border: `2px dashed ${dragging ? accent : border}`,
            borderRadius: 12,
            padding: '18px 16px',
            textAlign: 'center',
            cursor: 'pointer',
            background: dragging ? (accent + '10') : surface2,
            transition: 'all 0.18s',
            marginBottom: 8,
            position: 'relative',
          }}
        >
          <ImageIcon size={28} color={dragging ? accent : muted} style={{ margin: '0 auto 8px' }} />
          <p style={{ fontSize: 13, color: dragging ? accent : muted, lineHeight: 1.5, fontWeight: dragging ? 700 : 400 }}>{L.drop}</p>
          <input ref={fileInputRef} type="file" accept="image/*" multiple style={{ display: 'none' }} onChange={e => { handleFiles(e.target.files); e.target.value = ''; }} />
        </div>
      )}

      {/* Camera button */}
      {canAdd && (
        <button onClick={openCamera} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '10px 16px', borderRadius: 10, border: `1.5px solid ${border}`, background: surface, cursor: 'pointer', color: muted, fontWeight: 600, fontSize: 13, transition: 'all 0.15s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.color = muted; }}
        >
          <Camera size={16} /> {L.camera}
        </button>
      )}

      {/* ── Webcam modal ── */}
      {showCamera && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div style={{ width: '100%', maxWidth: 640, background: '#0f172a', borderRadius: 20, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: '1px solid #1e293b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Camera size={18} color="#60a5fa" />
                <span style={{ color: '#f1f5f9', fontWeight: 700, fontSize: 14 }}>{lang === 'th' ? 'ถ่ายรูปจากกล้อง' : 'Take Photo'}</span>
              </div>
              <button onClick={closeCamera} style={{ background: '#1e293b', border: 'none', borderRadius: 8, padding: '6px 10px', cursor: 'pointer', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: 4, fontSize: 13 }}>
                <X size={14} /> {L.close}
              </button>
            </div>

            {/* Video */}
            <div style={{ position: 'relative', background: '#000', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <video ref={videoRef} autoPlay playsInline muted style={{ width: '100%', height: '100%', objectFit: 'cover', display: camErr ? 'none' : 'block' }} />
              <canvas ref={canvasRef} style={{ display: 'none' }} />

              {/* Viewfinder grid overlay */}
              {camReady && !camErr && (
                <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                  {/* corner brackets */}
                  {[['top:12px','left:12px','borderTop','borderLeft'],['top:12px','right:12px','borderTop','borderRight'],['bottom:12px','left:12px','borderBottom','borderLeft'],['bottom:12px','right:12px','borderBottom','borderRight']].map(([t,s,b1,b2],i)=>{
                    const pos={}; t.split(':').forEach(([k,v])=>pos[k]=v); s.split(':').forEach(([k,v])=>pos[k]=v);
                    pos[b1.replace('border','border'+b1.slice(6))]='2px solid rgba(255,255,255,0.7)';
                    pos[b2.replace('border','border'+b2.slice(6))]='2px solid rgba(255,255,255,0.7)';
                    return <div key={i} style={{position:'absolute',...pos,width:24,height:24,borderRadius:2}} />;
                  })}
                  <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gridTemplateRows: 'repeat(3,1fr)' }}>
                    {Array(9).fill(0).map((_,i)=><div key={i} style={{border:'0.5px solid rgba(255,255,255,0.08)'}}/>)}
                  </div>
                </div>
              )}

              {/* Loading state */}
              {!camReady && !camErr && (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                  <div style={{ width: 40, height: 40, border: '3px solid #1e293b', borderTopColor: '#60a5fa', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                  <span style={{ color: '#64748b', fontSize: 13 }}>{lang === 'th' ? 'กำลังเปิดกล้อง...' : 'Opening camera...'}</span>
                </div>
              )}

              {/* Error state */}
              {camErr && (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24, textAlign: 'center', gap: 12 }}>
                  <AlertTriangle size={40} color="#f59e0b" />
                  <p style={{ color: '#e2e8f0', fontSize: 14, lineHeight: 1.6 }}>{camErr}</p>
                </div>
              )}
            </div>

            {/* Capture button */}
            <div style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
              <div style={{ width: 60 }} />
              <button onClick={capturePhoto} disabled={!camReady}
                style={{ width: 68, height: 68, borderRadius: '50%', border: '4px solid white', background: camReady ? '#fff' : '#334155', cursor: camReady ? 'pointer' : 'not-allowed', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.15s', boxShadow: camReady ? '0 0 0 3px rgba(255,255,255,0.3)' : 'none' }}
                onMouseDown={e => { if (camReady) e.currentTarget.style.transform = 'scale(0.92)'; }}
                onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)'; }}
              >
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: camReady ? accent : '#475569' }} />
              </button>
              <div style={{ width: 60, textAlign: 'center' }}>
                <span style={{ color: '#64748b', fontSize: 11, fontWeight: 600 }}>{attachedImages.length}/{MAX_PHOTOS}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Lightbox ── */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out', padding: 24 }}>
          <img src={lightbox} alt="" style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain', borderRadius: 12 }} onClick={e => e.stopPropagation()} />
          <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <X size={20} color="#fff" />
          </button>
        </div>
      )}
    </div>
  );
}

// ─── ProductCard with fly-to-cart animation ───────────────────────────────────
function ProductCard({ p, lang, surface, surface2, border, txt, muted, accent, t, cart, setCart, setErrMsg, openProductDetail, launchFlyAnim, CoinIcon }) {
  const [added, setAdded] = useState(false);
  const [btnScale, setBtnScale] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    const cnt = cart.filter(i => i.id === p.id).length;
    if (cnt + 1 > p.stock) { setErrMsg(t('out_of_stock_alert')); return; }

    // launch fly animation
    launchFlyAnim(e, p);

    // button feedback
    setBtnScale(true);
    setTimeout(() => setBtnScale(false), 150);

    // "added" checkmark flash
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);

    // actually add to cart (slight delay so animation starts first)
    setTimeout(() => {
      setCart(prev => [...prev, { ...p, selectedColor: p.colors?.[0] || '', selectedOpt: p.storages?.[0] || '' }]);
    }, 80);
  };

  const inCart = cart.filter(i => i.id === p.id).length;

  return (
    <div onClick={() => openProductDetail(p)} style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, overflow: 'hidden', cursor: 'pointer', transition: 'all 0.2s', position: 'relative' }} className="hover-card">
      {/* Image area */}
      <div style={{ position: 'relative', height: 180, background: p.bg || '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <span style={{ fontSize: 72, filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.3))', transition: 'transform 0.2s', transform: added ? 'scale(1.15)' : 'scale(1)' }}>{p.emoji || '🎁'}</span>

        {p.stock === 0 && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ background: '#ef4444', color: '#fff', fontWeight: 700, fontSize: 12, padding: '6px 14px', borderRadius: 20 }}>{t('out_of_stock')}</span>
          </div>
        )}

        {/* Stock badge */}
        <div style={{ position: 'absolute', top: 10, right: 10 }}>
          <span style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)', borderRadius: 20, padding: '4px 10px', fontSize: 11, fontWeight: 700, color: '#fff' }}>
            {p.stock > 0 ? `${p.stock} ${t('pcs')}` : t('out_of_stock')}
          </span>
        </div>

        {/* In-cart badge */}
        {inCart > 0 && (
          <div style={{ position: 'absolute', top: 10, left: 10, width: 24, height: 24, background: '#22c55e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 12, color: '#fff', boxShadow: '0 2px 8px rgba(34,197,94,0.4)' }}>
            {inCart}
          </div>
        )}
      </div>

      {/* Info area */}
      <div style={{ padding: 16 }}>
        <div style={{ fontWeight: 700, fontSize: 14, color: txt, marginBottom: 4, lineHeight: 1.4 }}>{lang === 'th' ? p.th : p.en}</div>
        <div style={{ fontSize: 12, color: muted, marginBottom: 12 }}>{t('by')} {p.brand}</div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <CoinIcon type={p.type} size={26} iconSize={10} />
            <span style={{ fontWeight: 900, fontSize: 18, color: p.type === 'gold' ? '#d97706' : p.type === 'silver' ? muted : '#ea580c' }}>{p.price}</span>
          </div>

          {p.stock > 0 && (
            <button
              onClick={handleAdd}
              style={{
                width: 38, height: 38,
                background: added ? '#22c55e' : accent,
                border: 'none', borderRadius: 10, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
                transform: btnScale ? 'scale(0.85)' : 'scale(1)',
                boxShadow: added ? '0 4px 16px rgba(34,197,94,0.45)' : '0 4px 12px rgba(37,99,235,0.35)',
              }}
            >
              {added
                ? <CheckCircle size={18} color="#fff" />
                : <Plus size={18} color="#fff" />
              }
            </button>
          )}
        </div>
      </div>

      {/* "เพิ่มแล้ว!" toast on card */}
      {added && (
        <div style={{
          position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)',
          background: '#22c55e', color: '#fff', fontWeight: 700, fontSize: 12,
          padding: '5px 14px', borderRadius: 20, whiteSpace: 'nowrap',
          boxShadow: '0 4px 12px rgba(34,197,94,0.4)',
          animation: 'fadeIn 0.2s ease',
          pointerEvents: 'none',
        }}>
          {lang === 'th' ? '✓ เพิ่มลงตะกร้าแล้ว!' : '✓ Added to cart!'}
        </div>
      )}
    </div>
  );
}

// ─── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState('th');
  const t = k => T[lang]?.[k] ?? k;

  const [dark, setDark] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [page, setPage] = useState('home'); // home | profile | rewards | learn | board
  const [sideOpen, setSideOpen] = useState(false);

  // form
  const [area, setArea] = useState('');
  const [waste, setWaste] = useState(null);
  const [detail, setDetail] = useState('');
  const [attachedImages, setAttachedImages] = useState([]); // [{url, name, src}]
  const [submitting, setSubmitting] = useState(false);
  const [queuePos, setQueuePos] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitsToday, setSubmitsToday] = useState(0);

  // coins
  const [coins, setCoins] = useState({gold:1250, silver:3400, bronze:11247});
  const [profileImg, setProfileImg] = useState(null); // null = show initials, string = data URL
  const totalCoins = (coins.gold||0)+(coins.silver||0)+(coins.bronze||0);

  // products
  const [products, setProducts] = useState(INIT_PRODUCTS);
  const [catFilter, setCatFilter] = useState(null);
  const [selProduct, setSelProduct] = useState(null);
  const [detailQty, setDetailQty] = useState(1);
  const [detailColor, setDetailColor] = useState('');
  const [detailOpt, setDetailOpt] = useState('');

  // cart
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutOk, setCheckoutOk] = useState(false);

  // notifications
  const [notifs, setNotifs] = useState([
    {id:1,th:'ข้อเสนอแนะได้รับการอนุมัติ',en:'Suggestion Approved',descTh:'Kaizen ลดขั้นตอน',descEn:'Kaizen reduced steps',status:'approve',timeTh:'10 นาทีที่แล้ว',timeEn:'10 mins ago',areaTh:'Assembly Line 1',areaEn:'Assembly Line 1',wasteTh:'ขั้นตอนซับซ้อน',wasteEn:'Over-process',detailTh:'ออกแบบจิ๊กใหม่',detailEn:'New jig design',feedbackTh:'ยอดเยี่ยม!',feedbackEn:'Great idea!',coins:'+150',dateTh:'18 มี.ค. 2026',dateEn:'Mar 18, 2026'}
  ]);
  const [notifOpen, setNotifOpen] = useState(false);
  const [selNotif, setSelNotif] = useState(null);
  const [hasUnread, setHasUnread] = useState(true);

  // claimable
  const [claimable, setClaimable] = useState([
    {id:1,th:'เพิ่มพัดลมระบายอากาศ',en:'Add Ventilation Fan',wasteTh:'สภาพแวดล้อม',wasteEn:'Environment',detailTh:'Assembly Line 1 อากาศร้อน',detailEn:'AL1 is too hot',amount:690,type:'gold',dateTh:'วันนี้ 09:30',dateEn:'Today 09:30'},
    {id:2,th:'ทำป้าย Visual Control',en:'Visual Control Sign',wasteTh:'รอคอย',wasteEn:'Waiting',detailTh:'ทำป้ายสีแยกล็อต',detailEn:'Color tags for lots',amount:500,type:'silver',dateTh:'เมื่อวาน',dateEn:'Yesterday'},
  ]);
  const [claimingId, setClaimingId] = useState(null);

  // transactions
  const [txs, setTxs] = useState(INIT_TXS);

  // knowledge
  const [knowledgeSearch, setKnowledgeSearch] = useState('');
  const [knowledgeFilter, setKnowledgeFilter] = useState('all');
  const [playingVideo, setPlayingVideo] = useState(null);

  // validation error
  const [errMsg, setErrMsg] = useState('');

  const [flyingItems, setFlyingItems] = useState([]);
  const cartBtnRef = useRef(null);
  const [cartShake, setCartShake] = useState(false);
  const [cartBounce, setCartBounce] = useState(false);
  const queueRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(()=>{return()=>{if(queueRef.current)clearInterval(queueRef.current);if(timerRef.current)clearTimeout(timerRef.current);};},[]);

  // Flying add-to-cart animation
  const launchFlyAnim = (e, product) => {
    const btnRect = e.currentTarget.getBoundingClientRect();
    const cartRect = cartBtnRef.current?.getBoundingClientRect();
    if (!cartRect) return;
    const id = Date.now() + Math.random();
    const item = {
      id,
      emoji: product.emoji || '🎁',
      startX: btnRect.left + btnRect.width / 2,
      startY: btnRect.top + btnRect.height / 2,
      endX: cartRect.left + cartRect.width / 2,
      endY: cartRect.top + cartRect.height / 2,
    };
    setFlyingItems(prev => [...prev, item]);
    // trigger cart shake after fly completes
    setTimeout(() => {
      setFlyingItems(prev => prev.filter(x => x.id !== id));
      setCartBounce(true);
      setTimeout(() => setCartBounce(false), 400);
    }, 620);
  };

  // Close notification dropdown when clicking outside
  useEffect(()=>{
    if(!notifOpen) return;
    const handler = (e) => {
      if(!e.target.closest('[data-notif-area]')) setNotifOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return ()=> document.removeEventListener('mousedown', handler);
  },[notifOpen]);

  const openProductDetail = p => { setSelProduct(p); setDetailQty(1); setDetailColor(p.colors?.[0]||''); setDetailOpt(p.storages?.[0]||''); };

  const filteredProducts = catFilter===null ? products : products.filter(p=>p.catId===catFilter);

  const cartGold = cart.filter(i=>i.type==='gold').reduce((a,c)=>a+(c.price||0),0);
  const cartSilver = cart.filter(i=>i.type==='silver').reduce((a,c)=>a+(c.price||0),0);
  const cartBronze = cart.filter(i=>i.type==='bronze').reduce((a,c)=>a+(c.price||0),0);
  const hasEnoughCoins = coins.gold>=cartGold && coins.silver>=cartSilver && coins.bronze>=cartBronze;
  const hasStock = cart.every(ci=>{ const cnt=cart.filter(x=>x.id===ci.id).length; const p=products.find(p=>p.id===ci.id); return p&&p.stock>=cnt; });
  const canCheckout = cart.length>0 && hasEnoughCoins && hasStock;

  const doLogin = () => {
    setLoginLoading(true);
    timerRef.current = setTimeout(()=>{ setLoginLoading(false); setLoggedIn(true); }, 1500);
  };

  const doLogout = () => { setLoggedIn(false); setPage('home'); setSideOpen(false); };

  const doSubmit = () => {
    if(submitsToday>=10){ setErrMsg(t('daily_limit')); return; }
    if(!area){ setErrMsg(t('invalid_area')); return; }
    if(!waste){ setErrMsg(t('invalid_waste')); return; }
    if(!detail.trim()){ setErrMsg(t('invalid_detail')); return; }
    let q = Math.floor(Math.random()*20)+30;
    setQueuePos(q);
    if(queueRef.current) clearInterval(queueRef.current);
    queueRef.current = setInterval(()=>{
      q -= Math.floor(Math.random()*15)+5;
      if(q<=0){ clearInterval(queueRef.current); setQueuePos(null); executeSubmit(); }
      else setQueuePos(q);
    }, 400);
  };

  const executeSubmit = () => {
    setSubmitting(true);
    timerRef.current = setTimeout(()=>{
      setSubmitting(false); setSubmitSuccess(true);
      const wl = ALL_WASTE.find(w=>w.id===waste);
      const n = {id:Date.now(),th:T.th.submit_success,en:T.en.submit_success,descTh:T.th.sugg_pending,descEn:T.en.sugg_pending,status:'wait',timeTh:'เมื่อสักครู่',timeEn:'Just now',areaTh:area,areaEn:area,wasteTh:wl?.th||'',wasteEn:wl?.en||'',detailTh:detail,detailEn:detail,feedbackTh:T.th.wait_evaluator,feedbackEn:T.en.wait_evaluator,coins:'-',dateTh:new Date().toLocaleDateString('th-TH'),dateEn:new Date().toLocaleDateString('en-US')};
      setNotifs(p=>[n,...p]); setHasUnread(true); setSubmitsToday(x=>x+1);
      setArea(''); setWaste(null); setDetail(''); setAttachedImages([]);
      timerRef.current = setTimeout(()=>setSubmitSuccess(false),2000);
    }, 1800);
  };

  const doClaim = (id,type,amount) => {
    if(claimingId!==null) return;
    setClaimingId(id);
    timerRef.current = setTimeout(()=>{
      setClaimable(p=>p.filter(x=>x.id!==id));
      setCoins(p=>({...p,[type]:(p[type]||0)+amount}));
      const n={id:Date.now(),th:'รับเหรียญสำเร็จ!',en:'Coins Claimed!',descTh:`+${amount} เหรียญ${type==='gold'?'ทอง':type==='silver'?'เงิน':'ทองแดง'}`,descEn:`+${amount} ${type} coins`,status:'approve',timeTh:'เมื่อสักครู่',timeEn:'Just now',areaTh:'GFPS Wallet',areaEn:'GFPS Wallet',wasteTh:'รับรางวัล',wasteEn:'Claim',feedbackTh:T.th.congrats,feedbackEn:T.en.congrats,coins:`+${amount}`,dateTh:new Date().toLocaleDateString('th-TH'),dateEn:new Date().toLocaleDateString('en-US')};
      setNotifs(p=>[n,...p]); setHasUnread(true); setClaimingId(null);
    }, 1500);
  };

  const processCart = (items, gCost, sCost, bCost, isCart) => {
    if(checkoutLoading) return;
    setCheckoutLoading(true);
    timerRef.current = setTimeout(()=>{
      setCheckoutLoading(false); setCheckoutOk(true);
      setCoins(p=>({gold:(p.gold||0)-gCost, silver:(p.silver||0)-sCost, bronze:(p.bronze||0)-bCost}));
      setProducts(prev=>{ const np=[...prev]; const cm={}; items.forEach(x=>cm[x.id]=(cm[x.id]||0)+1); Object.keys(cm).forEach(id=>{ const i=np.findIndex(p=>p.id===parseInt(id)); if(i!==-1) np[i]={...np[i],stock:np[i].stock-cm[id]}; }); return np; });
      const ntxs = items.map((item,i)=>({id:Date.now()+i,th:`แลก ${item.th}`,en:`Redeemed ${item.en}`,dateTh:'เมื่อสักครู่',dateEn:'Just now',amount:`-${item.price}`,type:'expense',coinType:item.type}));
      setTxs(p=>[...ntxs,...p]);
      const n={id:Date.now()+999,th:'แลกรางวัลสำเร็จ!',en:'Redemption Successful!',descTh:`แลก ${items.length} รายการ`,descEn:`Redeemed ${items.length} items`,status:'approve',timeTh:'เมื่อสักครู่',timeEn:'Just now',areaTh:'GFPS Store',areaEn:'GFPS Store',wasteTh:'แลกรางวัล',wasteEn:'Redeem',feedbackTh:T.th.thank_you,feedbackEn:T.en.thank_you,coins:'-',dateTh:new Date().toLocaleDateString('th-TH'),dateEn:new Date().toLocaleDateString('en-US')};
      setNotifs(p=>[n,...p]); setHasUnread(true);
      timerRef.current = setTimeout(()=>{
        setCheckoutOk(false);
        if(isCart){ setCart([]); setCartOpen(false); }
        setSelProduct(null); setPage('rewards');
      },1500);
    }, 2000);
  };

  const handleCheckout = () => {
    if(!hasEnoughCoins){ setErrMsg(t('insufficient_coin_val')); return; }
    if(!hasStock){ setErrMsg(t('cart_stock_error')); return; }
    processCart(cart, cartGold, cartSilver, cartBronze, true);
  };

  const handleRedeemDirect = () => {
    if(!selProduct||checkoutLoading) return;
    const pdb = products.find(p=>p.id===selProduct.id);
    if(!pdb||pdb.stock<detailQty){ setErrMsg(t('out_of_stock_alert')); return; }
    const cost = selProduct.price*detailQty;
    if((coins[selProduct.type]||0)<cost){ setErrMsg(t('insufficient_coin_val')); return; }
    const items = Array(detailQty).fill({...selProduct,selectedColor:detailColor,selectedOpt:detailOpt});
    const gC=selProduct.type==='gold'?cost:0, sC=selProduct.type==='silver'?cost:0, bC=selProduct.type==='bronze'?cost:0;
    processCart(items,gC,sC,bC,false);
  };

  // theme
  const bg = dark ? '#0f172a' : '#f1f5f9';
  const surface = dark ? '#1e293b' : '#ffffff';
  const surface2 = dark ? '#0f172a' : '#f8fafc';
  const border = dark ? '#334155' : '#e2e8f0';
  const txt = dark ? '#f1f5f9' : '#0f172a';
  const muted = dark ? '#94a3b8' : '#64748b';
  const accent = '#2563eb';

  const cs = {
    bg: { backgroundColor: bg, minHeight:'100vh', color:txt, fontFamily:"'Noto Sans Thai', 'Segoe UI', sans-serif" },
    surface: { backgroundColor:surface, border:`1px solid ${border}` },
    surface2: { backgroundColor:surface2 },
    txt, muted, border,
    card: { backgroundColor:surface, border:`1px solid ${border}`, borderRadius:16 },
    input: { backgroundColor:surface2, border:`1px solid ${border}`, color:txt, borderRadius:10, padding:'10px 14px', width:'100%', outline:'none', fontSize:14 },
    btn: { backgroundColor:accent, color:'#fff', border:'none', borderRadius:10, padding:'11px 20px', fontWeight:700, cursor:'pointer', fontSize:14 },
    btnGhost: { backgroundColor:'transparent', border:`1px solid ${border}`, color:txt, borderRadius:10, padding:'10px 18px', fontWeight:600, cursor:'pointer', fontSize:14 },
  };

  const filteredMedia = MEDIA.filter(m=>{
    if(knowledgeFilter!=='all'&&m.type!==knowledgeFilter) return false;
    if(knowledgeSearch.trim()){
      const q=knowledgeSearch.toLowerCase();
      return m.th.toLowerCase().includes(q)||m.en.toLowerCase().includes(q);
    }
    return true;
  });

  // ─── LOGIN ─────────────────────────────────────────────────────────────────
  if(!loggedIn){
    return (
      <div style={{...cs.bg, display:'flex', alignItems:'center', justifyContent:'center', padding:24}}>
        <div style={{width:'100%', maxWidth:420}}>
          {/* Logo */}
          <div style={{textAlign:'center', marginBottom:40}}>
            <div style={{width:72,height:72,background:'linear-gradient(135deg,#1d4ed8,#7c3aed)',borderRadius:20,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px',boxShadow:'0 8px 32px rgba(37,99,235,0.3)'}}>
              <span style={{color:'#fff',fontWeight:900,fontSize:22,fontStyle:'italic',letterSpacing:-1}}>SP+</span>
            </div>
            <h1 style={{fontSize:26,fontWeight:800,margin:0,color:txt}}>{t('app')}</h1>
            <p style={{fontSize:13,color:muted,margin:'6px 0 0'}}>{t('tagline')}</p>
          </div>

          {/* Card */}
          <div style={{...cs.card, padding:32, borderRadius:20, boxShadow:'0 4px 24px rgba(0,0,0,0.08)'}}>
            {/* lang switcher */}
            <div style={{display:'flex',justifyContent:'flex-end',marginBottom:20}}>
              {['th','en'].map(l=>(
                <button key={l} onClick={()=>setLang(l)} style={{padding:'4px 12px',borderRadius:8,border:`1px solid ${border}`,background:lang===l?accent:'transparent',color:lang===l?'#fff':muted,fontWeight:700,fontSize:12,cursor:'pointer',marginLeft:4}}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <div style={{marginBottom:16}}>
              <label style={{display:'block',fontSize:12,fontWeight:600,color:muted,marginBottom:6}}>{t('emp_id')}</label>
              <input style={cs.input} defaultValue="EMP-10293" placeholder={t('emp_id')} disabled={loginLoading} />
            </div>
            <div style={{marginBottom:24}}>
              <label style={{display:'block',fontSize:12,fontWeight:600,color:muted,marginBottom:6}}>{t('password')}</label>
              <input style={cs.input} type="password" defaultValue="password123" placeholder={t('password')} disabled={loginLoading} />
            </div>
            <button onClick={doLogin} disabled={loginLoading} style={{...cs.btn, width:'100%', padding:'14px 20px', fontSize:15, borderRadius:12, opacity:loginLoading?0.7:1, display:'flex', alignItems:'center', justifyContent:'center', gap:8}}>
              {loginLoading ? <><Loader2 size={18} style={{animation:'spin 1s linear infinite'}} /> {t('login_loading')}</> : t('login')}
            </button>
          </div>
          <p style={{textAlign:'center',fontSize:11,color:muted,marginTop:24}}>{t('footer')}</p>
        </div>
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      </div>
    );
  }

  // ─── GLOBAL OVERLAYS ───────────────────────────────────────────────────────
  const Overlay = ({children}) => (
    <div style={{position:'fixed',inset:0,zIndex:200,background:'rgba(0,0,0,0.6)',display:'flex',alignItems:'center',justifyContent:'center',padding:24}}>
      {children}
    </div>
  );

  return (
    <div style={cs.bg}>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.6}}
        @keyframes cartBounce{0%{transform:scale(1)}30%{transform:scale(1.4)}60%{transform:scale(0.9)}100%{transform:scale(1)}}
        @keyframes flyArc{0%{transform:scale(1) translate(0,0);opacity:1}60%{opacity:1}100%{transform:scale(0.3) translate(var(--dx),var(--dy));opacity:0}}
        ::-webkit-scrollbar{width:4px;height:4px}
        ::-webkit-scrollbar-track{background:transparent}
        ::-webkit-scrollbar-thumb{background:${border};border-radius:4px}
        .hover-card:hover{box-shadow:0 4px 20px rgba(0,0,0,0.12);transform:translateY(-2px);transition:all 0.2s}
        .hover-btn:hover{opacity:0.85}
        .fade-in{animation:fadeIn 0.3s ease}
        .cart-bounce{animation:cartBounce 0.4s ease}
      `}</style>

      {/* ── Flying emoji animations (fixed overlay) ── */}
      {flyingItems.map(item => {
        const dx = item.endX - item.startX;
        const dy = item.endY - item.startY;
        return (
          <div key={item.id} style={{
            position:'fixed',
            left: item.startX - 20,
            top: item.startY - 20,
            width: 40, height: 40,
            fontSize: 28,
            display:'flex', alignItems:'center', justifyContent:'center',
            zIndex: 9999,
            pointerEvents:'none',
            '--dx': `${dx}px`,
            '--dy': `${dy}px`,
            animation: 'flyArc 0.62s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
            filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
          }}>
            {item.emoji}
          </div>
        );
      })}

      {/* ── Queue overlay ─────────────────────── */}
      {queuePos!==null && (
        <Overlay>
          <div style={{...cs.card,padding:40,borderRadius:24,textAlign:'center',maxWidth:340,width:'100%'}}>
            <div style={{width:72,height:72,border:`4px solid ${border}`,borderTopColor:accent,borderRadius:'50%',animation:'spin 1s linear infinite',margin:'0 auto 20px'}} />
            <h2 style={{fontSize:18,fontWeight:700,marginBottom:8,color:txt}}>{t('queue_sys')}</h2>
            <p style={{fontSize:13,color:muted,marginBottom:20}}>{t('queue_your')}</p>
            <div style={{fontSize:56,fontWeight:900,color:'#f59e0b',lineHeight:1}}>{queuePos}</div>
            <p style={{fontSize:12,color:accent,marginTop:16,animation:'pulse 2s infinite'}}>{t('queue_wait')}</p>
          </div>
        </Overlay>
      )}

      {/* ── Submitting overlay ─────────────────── */}
      {submitting && (
        <Overlay>
          <div style={{...cs.card,padding:40,borderRadius:24,textAlign:'center',maxWidth:300,width:'100%'}}>
            <div style={{width:60,height:60,background:'linear-gradient(135deg,#1d4ed8,#7c3aed)',borderRadius:16,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px'}}>
              <span style={{color:'#fff',fontWeight:900,fontSize:18,fontStyle:'italic'}}>SP+</span>
            </div>
            <h3 style={{color:txt,marginBottom:8}}>{t('submitting')}</h3>
            <p style={{fontSize:13,color:muted}}>{t('connecting')}</p>
          </div>
        </Overlay>
      )}

      {/* ── Submit success ─────────────────────── */}
      {submitSuccess && (
        <Overlay>
          <div style={{...cs.card,padding:40,borderRadius:24,textAlign:'center',maxWidth:300,width:'100%'}}>
            <div style={{width:72,height:72,background:'#dcfce7',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px'}}>
              <CheckCircle size={40} color="#22c55e" />
            </div>
            <h3 style={{color:txt,fontSize:20,fontWeight:700}}>{t('submit_success')}</h3>
          </div>
        </Overlay>
      )}

      {/* ── Checkout loading ───────────────────── */}
      {checkoutLoading && (
        <Overlay>
          <div style={{...cs.card,padding:40,borderRadius:24,textAlign:'center',maxWidth:300,width:'100%'}}>
            <div style={{width:60,height:60,border:`4px solid ${border}`,borderTopColor:'#22c55e',borderRadius:'50%',animation:'spin 1s linear infinite',margin:'0 auto 16px'}} />
            <h3 style={{color:txt}}>{t('processing_cart')}</h3>
          </div>
        </Overlay>
      )}

      {/* ── Checkout success ───────────────────── */}
      {checkoutOk && (
        <Overlay>
          <div style={{background:'#22c55e',padding:40,borderRadius:24,textAlign:'center',maxWidth:300,width:'100%',color:'#fff'}}>
            <CheckCircle size={64} style={{margin:'0 auto 16px'}} />
            <h2 style={{fontSize:24,fontWeight:700,marginBottom:8}}>{t('success')}</h2>
            <p style={{fontSize:14,opacity:0.9}}>{t('redeem_success_desc')}</p>
          </div>
        </Overlay>
      )}

      {/* ── Error modal ────────────────────────── */}
      {errMsg && (
        <Overlay>
          <div style={{...cs.card,padding:32,borderRadius:20,maxWidth:340,width:'100%',textAlign:'center'}}>
            <div style={{width:56,height:56,background:'#fef2f2',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px'}}>
              <AlertTriangle size={28} color="#ef4444" />
            </div>
            <h3 style={{color:txt,marginBottom:8}}>{t('error')}</h3>
            <p style={{fontSize:14,color:muted,marginBottom:20}}>{errMsg}</p>
            <button onClick={()=>setErrMsg('')} style={{...cs.btn,width:'100%'}}>{t('ok')}</button>
          </div>
        </Overlay>
      )}

      {/* ── Notification Detail ────────────────── */}
      {selNotif && (
        <Overlay>
          <div style={{...cs.card,padding:0,borderRadius:20,maxWidth:520,width:'100%',maxHeight:'85vh',overflow:'auto',animation:'fadeIn 0.2s ease'}}>
            <div style={{padding:20,borderBottom:`1px solid ${border}`,display:'flex',alignItems:'center',gap:12}}>
              <button onClick={()=>setSelNotif(null)} style={{...cs.btnGhost,padding:'6px 10px',borderRadius:8}}><ChevronLeft size={18}/></button>
              <h2 style={{fontWeight:700,fontSize:16,color:txt}}>{t('sugg_detail')}</h2>
            </div>
            <div style={{padding:24}}>
              <div style={{background:selNotif.status==='approve'?'#22c55e':selNotif.status==='wait'?'#f59e0b':'#ef4444',borderRadius:14,padding:20,color:'#fff',display:'flex',gap:16,alignItems:'center',marginBottom:20}}>
                <div style={{background:'rgba(255,255,255,0.2)',borderRadius:12,padding:10}}>
                  {selNotif.status==='approve'?<CheckCircle size={28}/>:selNotif.status==='wait'?<Clock size={28}/>:<XCircle size={28}/>}
                </div>
                <div>
                  <div style={{fontWeight:700,fontSize:17}}>{lang==='th'?selNotif.th:selNotif.en}</div>
                  <div style={{fontSize:13,opacity:0.9}}>{t('updated')} {lang==='th'?selNotif.timeTh:selNotif.timeEn}</div>
                </div>
              </div>
              {[
                {icon:Building,label:t('area_dept'),val:lang==='th'?selNotif.areaTh:selNotif.areaEn},
                {icon:AlertTriangle,label:t('waste_type'),val:lang==='th'?selNotif.wasteTh:selNotif.wasteEn,badge:true},
                {icon:MessageSquare,label:t('msg_evaluator'),val:lang==='th'?selNotif.feedbackTh:selNotif.feedbackEn},
                {icon:Calendar,label:t('submit_date'),val:lang==='th'?selNotif.dateTh:selNotif.dateEn},
              ].map((row,i)=>(
                <div key={i} style={{display:'flex',gap:12,alignItems:'flex-start',marginBottom:16,padding:14,background:surface2,borderRadius:12}}>
                  <div style={{width:36,height:36,background:surface,borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',border:`1px solid ${border}`,flexShrink:0}}>
                    <row.icon size={16} color={muted} />
                  </div>
                  <div>
                    <div style={{fontSize:11,fontWeight:600,color:muted,textTransform:'uppercase',letterSpacing:0.5,marginBottom:4}}>{row.label}</div>
                    {row.badge
                      ? <span style={{display:'inline-block',background:'#eff6ff',color:'#2563eb',border:'1px solid #bfdbfe',borderRadius:20,padding:'3px 12px',fontSize:13,fontWeight:600}}>{row.val}</span>
                      : <div style={{fontSize:14,color:txt}}>{row.val}</div>
                    }
                  </div>
                </div>
              ))}
              {selNotif.coins&&selNotif.coins!=='-'&&(
                <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:12,padding:14,display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
                  <span style={{fontSize:13,fontWeight:600,color:'#16a34a'}}>{t('earned_coins')}</span>
                  <span style={{fontSize:20,fontWeight:900,color:'#16a34a'}}>{selNotif.coins} Coins</span>
                </div>
              )}
              <button onClick={()=>setSelNotif(null)} style={{...cs.btn,width:'100%'}}>{t('close_window')}</button>
            </div>
          </div>
        </Overlay>
      )}

      {/* ── Cart Panel ─────────────────────────── */}
      {cartOpen && (
        <Overlay>
          <div style={{...cs.card,padding:0,borderRadius:20,maxWidth:480,width:'100%',maxHeight:'85vh',display:'flex',flexDirection:'column',animation:'fadeIn 0.2s ease'}}>
            <div style={{padding:20,borderBottom:`1px solid ${border}`,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <h2 style={{fontWeight:700,color:txt,display:'flex',alignItems:'center',gap:8}}><ShoppingCart size={20}/> {t('my_cart')} ({cart.length})</h2>
              <button onClick={()=>setCartOpen(false)} style={{background:'none',border:'none',cursor:'pointer',color:muted}}><X size={20}/></button>
            </div>
            <div style={{flex:1,overflow:'auto',padding:20}}>
              {cart.length===0 ? (
                <div style={{textAlign:'center',padding:40,color:muted}}>
                  <ShoppingCart size={48} style={{margin:'0 auto 12px',opacity:0.3}}/>
                  <div style={{fontWeight:600,color:txt}}>{t('cart_empty')}</div>
                  <div style={{fontSize:13,marginTop:6}}>{t('add_rewards')}</div>
                </div>
              ) : (
                <>
                  <div style={{display:'flex',flexDirection:'column',gap:12,marginBottom:20}}>
                    {cart.map((item,idx)=>(
                      <div key={idx} style={{...cs.card,padding:14,borderRadius:14,display:'flex',gap:12}}>
                        <div style={{width:64,height:64,borderRadius:10,background:item.bg||'#1e293b',display:'flex',alignItems:'center',justifyContent:'center',fontSize:28,flexShrink:0}}>{item.emoji||'🎁'}</div>
                        <div style={{flex:1}}>
                          <div style={{fontWeight:600,fontSize:14,color:txt,marginBottom:4}}>{lang==='th'?item.th:item.en}</div>
                          {item.selectedColor&&<div style={{fontSize:12,color:muted}}>{item.selectedColor}{item.selectedOpt?` | ${item.selectedOpt}`:''}</div>}
                          <div style={{display:'flex',alignItems:'center',gap:6,marginTop:6}}>
                            <CoinIcon type={item.type} size={18} iconSize={8}/>
                            <span style={{fontWeight:800,fontSize:15,color:item.type==='gold'?'#d97706':item.type==='silver'?muted:'#ea580c'}}>{item.price}</span>
                          </div>
                        </div>
                        <button onClick={()=>setCart(p=>p.filter((_,i)=>i!==idx))} style={{background:'none',border:'none',cursor:'pointer',color:muted,padding:4}}><Trash2 size={16}/></button>
                      </div>
                    ))}
                  </div>
                  <div style={{...cs.card,padding:16,borderRadius:14}}>
                    <div style={{fontWeight:700,marginBottom:12,fontSize:14,color:txt}}>{t('req_coins_summary')}</div>
                    {[['gold',cartGold,t('gold_coin')],['silver',cartSilver,t('silver_coin')],['bronze',cartBronze,t('bronze_coin')]].map(([type,req,label])=>(
                      <div key={type} style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
                        <div style={{display:'flex',alignItems:'center',gap:8}}><CoinIcon type={type} size={22} iconSize={9}/><span style={{fontSize:13,color:txt}}>{label}</span></div>
                        <span style={{fontWeight:800,fontSize:14,color:(coins[type]||0)>=req?txt:'#ef4444'}}>{req}</span>
                      </div>
                    ))}
                  </div>
                  {!hasEnoughCoins&&<p style={{color:'#ef4444',fontSize:12,marginTop:10,fontWeight:600}}>* {t('insufficient_coins')}</p>}
                </>
              )}
            </div>
            {cart.length>0&&(
              <div style={{padding:20,borderTop:`1px solid ${border}`}}>
                <button onClick={handleCheckout} disabled={!canCheckout||checkoutLoading} style={{...cs.btn,width:'100%',opacity:canCheckout?1:0.5,display:'flex',alignItems:'center',justifyContent:'center',gap:8}}>
                  <CheckCircle size={18}/> {t('confirm_redeem')}
                </button>
              </div>
            )}
          </div>
        </Overlay>
      )}

      {/* ── Product Detail ─────────────────────── */}
      {selProduct && (
        <Overlay>
          <div style={{...cs.card,padding:0,borderRadius:20,maxWidth:560,width:'100%',maxHeight:'90vh',overflow:'auto',animation:'fadeIn 0.2s ease'}}>
            <div style={{position:'relative',height:260,overflow:'hidden',borderRadius:'20px 20px 0 0',background:selProduct.bg||'#1e293b',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <span style={{fontSize:96,filter:'drop-shadow(0 8px 24px rgba(0,0,0,0.4))'}}>{selProduct.emoji||'🎁'}</span>
              <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(0,0,0,0.6),transparent)'}}/>
              <button onClick={()=>setSelProduct(null)} style={{position:'absolute',top:16,left:16,background:'rgba(0,0,0,0.4)',border:'none',borderRadius:10,padding:'6px 10px',cursor:'pointer',color:'#fff',display:'flex',alignItems:'center',gap:4,fontSize:13}}>
                <X size={16}/> {t('cancel')}
              </button>
              <div style={{position:'absolute',bottom:20,left:20}}>
                <div style={{display:'inline-block',background:selProduct.stock===0?'#ef4444':'#22c55e',borderRadius:20,padding:'4px 12px',fontSize:12,fontWeight:700,color:'#fff',marginBottom:8}}>
                  {selProduct.stock===0?t('out_of_stock'):`${t('in_stock')}: ${selProduct.stock} ${t('pcs')}`}
                </div>
                <div style={{color:'#fff',fontWeight:700,fontSize:22}}>{lang==='th'?selProduct.th:selProduct.en}</div>
                <div style={{color:'rgba(255,255,255,0.8)',fontSize:14}}>{t('by')} {selProduct.brand}</div>
              </div>
            </div>
            <div style={{padding:24}}>
              {/* Price */}
              <div style={{...cs.card,padding:16,borderRadius:14,display:'flex',alignItems:'center',gap:12,marginBottom:20}}>
                <CoinIcon type={selProduct.type} size={40} iconSize={17}/>
                <div>
                  <div style={{fontSize:11,fontWeight:600,color:muted,marginBottom:2}}>{t('redeem_now')}</div>
                  <div style={{fontSize:26,fontWeight:900,color:selProduct.type==='gold'?'#d97706':selProduct.type==='silver'?muted:'#ea580c'}}>
                    {(selProduct.price*detailQty).toLocaleString()} <span style={{fontSize:14,fontWeight:600}}>{t('coins_uc')}</span>
                  </div>
                </div>
              </div>

              <p style={{fontSize:14,color:muted,marginBottom:20}}>{lang==='th'?selProduct.descTh:selProduct.descEn}</p>

              {selProduct.colors?.length>0&&(
                <div style={{marginBottom:16}}>
                  <div style={{fontSize:13,fontWeight:700,color:txt,marginBottom:8}}>{t('color')}: <span style={{color:accent}}>{detailColor}</span></div>
                  <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                    {selProduct.colors.map(c=>(
                      <button key={c} onClick={()=>setDetailColor(c)} style={{padding:'6px 14px',borderRadius:8,border:`2px solid ${detailColor===c?accent:border}`,background:detailColor===c?'#eff6ff':'transparent',color:detailColor===c?accent:txt,fontWeight:600,fontSize:13,cursor:'pointer'}}>{c}</button>
                    ))}
                  </div>
                </div>
              )}
              {selProduct.storages?.length>0&&(
                <div style={{marginBottom:16}}>
                  <div style={{fontSize:13,fontWeight:700,color:txt,marginBottom:8}}>{t('options')}: <span style={{color:accent}}>{detailOpt}</span></div>
                  <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                    {selProduct.storages.map(s=>(
                      <button key={s} onClick={()=>setDetailOpt(s)} style={{padding:'6px 14px',borderRadius:8,border:`2px solid ${detailOpt===s?accent:border}`,background:detailOpt===s?'#eff6ff':'transparent',color:detailOpt===s?accent:txt,fontWeight:600,fontSize:13,cursor:'pointer'}}>{s}</button>
                    ))}
                  </div>
                </div>
              )}

              {/* Qty */}
              <div style={{display:'flex',alignItems:'center',gap:16,marginBottom:24,padding:14,background:surface2,borderRadius:12}}>
                <span style={{fontSize:14,fontWeight:600,color:txt}}>จำนวน</span>
                <div style={{display:'flex',alignItems:'center',gap:12,marginLeft:'auto'}}>
                  <button onClick={()=>setDetailQty(q=>Math.max(1,q-1))} disabled={detailQty<=1} style={{width:32,height:32,borderRadius:8,border:`1px solid ${border}`,background:detailQty<=1?surface2:surface,cursor:detailQty<=1?'not-allowed':'pointer',display:'flex',alignItems:'center',justifyContent:'center',color:detailQty<=1?muted:accent}}><Minus size={14}/></button>
                  <span style={{fontSize:18,fontWeight:800,color:txt,minWidth:24,textAlign:'center'}}>{detailQty}</span>
                  <button onClick={()=>setDetailQty(q=>Math.min(selProduct.stock,q+1))} disabled={detailQty>=selProduct.stock} style={{width:32,height:32,borderRadius:8,border:`1px solid ${border}`,background:detailQty>=selProduct.stock?surface2:surface,cursor:detailQty>=selProduct.stock?'not-allowed':'pointer',display:'flex',alignItems:'center',justifyContent:'center',color:detailQty>=selProduct.stock?muted:accent}}><Plus size={14}/></button>
                </div>
              </div>

              <div style={{display:'flex',gap:12}}>
                <button onClick={()=>{ if(selProduct.stock===0)return; const cnt=cart.filter(i=>i.id===selProduct.id).length; if(cnt+detailQty>selProduct.stock){setErrMsg(t('out_of_stock_alert'));return;} setCart(p=>[...p,...Array(detailQty).fill({...selProduct,selectedColor:detailColor,selectedOpt:detailOpt})]); setSelProduct(null); }} disabled={selProduct.stock===0} style={{...cs.btnGhost,flex:1,display:'flex',alignItems:'center',justifyContent:'center',gap:8,opacity:selProduct.stock===0?0.4:1}}>
                  <ShoppingCart size={16}/> {t('add_to_cart')}
                </button>
                <button onClick={handleRedeemDirect} disabled={selProduct.stock===0||(coins[selProduct.type]||0)<selProduct.price*detailQty} style={{...cs.btn,flex:1,display:'flex',alignItems:'center',justifyContent:'center',gap:8,opacity:(selProduct.stock===0||(coins[selProduct.type]||0)<selProduct.price*detailQty)?0.5:1}}>
                  <Zap size={16}/> {t('redeem_now')}
                </button>
              </div>
            </div>
          </div>
        </Overlay>
      )}

      {/* ── Video Player ───────────────────────── */}
      {playingVideo && (
        <Overlay>
          <div style={{...cs.card,padding:0,borderRadius:20,maxWidth:600,width:'100%',overflow:'hidden',animation:'fadeIn 0.2s ease'}}>
            <div style={{position:'relative',height:300,background:'#000',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div style={{width:'100%',height:'100%',background:playingVideo.bg||'#1e293b',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <span style={{fontSize:80}}>{playingVideo.emoji||'▶️'}</span>
              </div>
              <PlayCircle size={64} color="#fff" style={{position:'absolute',cursor:'pointer'}}/>
              <button onClick={()=>setPlayingVideo(null)} style={{position:'absolute',top:16,right:16,background:'rgba(0,0,0,0.5)',border:'none',borderRadius:8,padding:'6px 10px',cursor:'pointer',color:'#fff',display:'flex',alignItems:'center',gap:4}}><X size={16}/></button>
              <span style={{position:'absolute',bottom:12,right:12,background:'#ef4444',borderRadius:6,padding:'3px 10px',fontSize:11,fontWeight:700,color:'#fff'}}>LIVE / VOD</span>
            </div>
            <div style={{padding:24}}>
              <h3 style={{fontSize:18,fontWeight:700,color:txt,marginBottom:6}}>{lang==='th'?playingVideo.th:playingVideo.en}</h3>
              <p style={{fontSize:13,color:muted,marginBottom:16,display:'flex',alignItems:'center',gap:6}}><Clock size={14}/> {lang==='th'?'ความยาว:':'Duration:'} {playingVideo.duration}</p>
              <div style={{background:surface2,borderRadius:12,padding:16,fontSize:14,color:txt,lineHeight:1.7}}>
                <span style={{fontWeight:700,color:accent}}>รายละเอียด: </span>
                {lang==='th'?`วิดีโอนี้อธิบาย ${playingVideo.th} เพื่อให้นำความรู้ไปประยุกต์ใช้ได้อย่างมีประสิทธิภาพ!`:`This video explains ${playingVideo.en} so you can apply the knowledge effectively!`}
              </div>
            </div>
          </div>
        </Overlay>
      )}

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* MAIN LAYOUT                                                          */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <div style={{display:'flex',minHeight:'100vh'}}>

        {/* ── SIDEBAR ───────────────────────────────────────────────────── */}
        <aside style={{width:240,background:surface,borderRight:`1px solid ${border}`,display:'flex',flexDirection:'column',position:'fixed',top:0,left:0,height:'100vh',zIndex:50,flexShrink:0}}>
          {/* Logo */}
          <div style={{padding:'24px 20px 20px',borderBottom:`1px solid ${border}`}}>
            <div style={{display:'flex',alignItems:'center',gap:12}}>
              <div style={{width:40,height:40,background:'linear-gradient(135deg,#1d4ed8,#7c3aed)',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                <span style={{color:'#fff',fontWeight:900,fontSize:13,fontStyle:'italic'}}>SP+</span>
              </div>
              <div>
                <div style={{fontWeight:800,fontSize:14,color:txt}}>Suggestion Plus</div>
                <div style={{fontSize:10,color:muted}}>GFPS Platform</div>
              </div>
            </div>
          </div>

          {/* User mini card in sidebar */}
          <div onClick={()=>{setPage('profile');setNotifOpen(false);}} style={{padding:'14px 16px',borderBottom:`1px solid ${border}`,display:'flex',alignItems:'center',gap:10,cursor:'pointer',transition:'background 0.15s'}}
            onMouseEnter={e=>e.currentTarget.style.background=dark?'rgba(255,255,255,0.04)':'rgba(0,0,0,0.03)'}
            onMouseLeave={e=>e.currentTarget.style.background='transparent'}
          >
            <div style={{position:'relative',flexShrink:0}}>
              {profileImg
                ? <img src={profileImg} alt="avatar" style={{width:38,height:38,borderRadius:10,objectFit:'cover',border:`2px solid ${accent}`,display:'block'}}/>
                : <div style={{width:38,height:38,borderRadius:10,background:'linear-gradient(135deg,#4facfe,#00f2fe)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:14,color:'#fff',border:`2px solid ${accent}`}}>SC</div>
              }
              <div style={{position:'absolute',bottom:-2,right:-2,width:10,height:10,background:'#22c55e',borderRadius:'50%',border:`2px solid ${surface}`}}/>
            </div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontWeight:700,fontSize:13,color:txt,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Mr. Santisuk</div>
              <div style={{fontSize:10,color:muted}}>EMP-10293</div>
            </div>
            <ChevronRight size={14} color={muted}/>
          </div>

          {/* Nav items */}
          <nav style={{flex:1,padding:'16px 12px',overflow:'auto'}}>
            {[
              {id:'home',icon:Home,label:t('nav_home')},
              {id:'profile',icon:User,label:t('nav_profile')},
              {id:'rewards',icon:Gift,label:t('nav_rewards')},
              {id:'learn',icon:BookOpen,label:t('nav_learn')},
              {id:'board',icon:Trophy,label:t('nav_board')},
            ].map(item=>(
              <button key={item.id} onClick={()=>{setPage(item.id);setNotifOpen(false);}} style={{width:'100%',display:'flex',alignItems:'center',gap:12,padding:'10px 14px',borderRadius:12,border:'none',cursor:'pointer',marginBottom:4,background:page===item.id?'#eff6ff':'transparent',color:page===item.id?accent:muted,fontWeight:page===item.id?700:500,fontSize:14,textAlign:'left',transition:'all 0.15s'}}>
                <item.icon size={20} strokeWidth={page===item.id?2.5:2}/>
                {item.label}
              </button>
            ))}

            {/* Divider */}
            <div style={{height:1,background:border,margin:'12px 0'}}/>

            <button onClick={()=>{setPage('missions');setNotifOpen(false);}} style={{width:'100%',display:'flex',alignItems:'center',gap:12,padding:'10px 14px',borderRadius:12,border:'none',cursor:'pointer',marginBottom:4,background:page==='missions'?'#fff7ed':'transparent',color:page==='missions'?'#ea580c':muted,fontWeight:page==='missions'?700:500,fontSize:14,textAlign:'left'}}>
              <Target size={20}/> {t('missions')}
            </button>
            <button onClick={()=>{setPage('ideas');setNotifOpen(false);}} style={{width:'100%',display:'flex',alignItems:'center',gap:12,padding:'10px 14px',borderRadius:12,border:'none',cursor:'pointer',marginBottom:4,background:page==='ideas'?'#fffbeb':'transparent',color:page==='ideas'?'#d97706':muted,fontWeight:page==='ideas'?700:500,fontSize:14,textAlign:'left'}}>
              <Lightbulb size={20}/> {t('idea_bank')}
            </button>
          </nav>

          {/* Bottom actions */}
          <div style={{padding:'12px',borderTop:`1px solid ${border}`}}>
            {/* Dark mode & lang */}
            <div style={{display:'flex',gap:8,marginBottom:8}}>
              <button onClick={()=>setDark(d=>!d)} style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center',gap:6,padding:'8px',borderRadius:10,border:`1px solid ${border}`,background:'transparent',cursor:'pointer',color:muted,fontSize:12,fontWeight:600}}>
                {dark?<Sun size={15}/>:<Moon size={15}/>} {dark?'Light':'Dark'}
              </button>
              <button onClick={()=>setLang(l=>l==='th'?'en':'th')} style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center',gap:6,padding:'8px',borderRadius:10,border:`1px solid ${border}`,background:'transparent',cursor:'pointer',color:muted,fontSize:12,fontWeight:600}}>
                <Globe size={15}/> {lang==='th'?'EN':'TH'}
              </button>
            </div>
            <button onClick={doLogout} style={{width:'100%',display:'flex',alignItems:'center',gap:10,padding:'10px 14px',borderRadius:12,border:'none',cursor:'pointer',background:'#fef2f2',color:'#ef4444',fontWeight:600,fontSize:14}}>
              <LogOut size={18}/> {t('logout')}
            </button>
          </div>
        </aside>

        {/* ── MAIN CONTENT ──────────────────────────────────────────────── */}
        <div style={{marginLeft:240,flex:1,display:'flex',flexDirection:'column',minHeight:'100vh'}}>

          {/* Top bar */}
          <header style={{background:surface,borderBottom:`1px solid ${border}`,padding:'14px 28px',display:'flex',alignItems:'center',justifyContent:'space-between',position:'sticky',top:0,zIndex:40}}>
            <div>
              <div style={{fontSize:20,fontWeight:800,color:txt}}>
                {page==='home'?t('nav_home'):page==='profile'?t('nav_profile'):page==='rewards'?t('rewards_title'):page==='learn'?t('knowledge_hub'):page==='board'?t('leaderboard_title'):page==='missions'?t('missions'):t('idea_bank')}
              </div>
              <div style={{fontSize:13,color:muted}}>{t('hello')}, Mr. Santisuk • EMP-10293</div>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:12}}>
              {/* Coins mini */}
              <div style={{display:'flex',gap:10,padding:'8px 16px',background:surface2,borderRadius:12,border:`1px solid ${border}`}}>
                {[['gold',coins.gold],['silver',coins.silver],['bronze',coins.bronze]].map(([type,val])=>(
                  <div key={type} style={{display:'flex',alignItems:'center',gap:6}}>
                    <CoinIcon type={type} size={20} iconSize={8}/>
                    <span style={{fontWeight:800,fontSize:13,color:type==='gold'?'#d97706':type==='silver'?muted:'#ea580c'}}>{(val||0).toLocaleString()}</span>
                  </div>
                ))}
              </div>
              {/* Cart */}
              <button ref={cartBtnRef} onClick={()=>setCartOpen(true)} className={cartBounce?'cart-bounce':''} style={{position:'relative',background:surface2,border:`1px solid ${border}`,borderRadius:10,padding:'8px 12px',cursor:'pointer',display:'flex',alignItems:'center',gap:6,color:txt,transition:'border-color 0.2s'}}>
                <ShoppingCart size={18}/>
                <span style={{fontWeight:700,fontSize:14}}>{cart.length}</span>
                {cart.length>0&&<span style={{position:'absolute',top:-6,right:-6,width:18,height:18,background:'#ef4444',borderRadius:'50%',fontSize:10,fontWeight:900,color:'#fff',display:'flex',alignItems:'center',justifyContent:'center'}}>{cart.length}</span>}
              </button>
              {/* Notif */}
              <button data-notif-area onClick={()=>{setNotifOpen(o=>!o);setHasUnread(false);}} style={{position:'relative',background:surface2,border:`1px solid ${border}`,borderRadius:10,padding:'8px 12px',cursor:'pointer',color:txt}}>
                <Bell size={18}/>
                {hasUnread&&<span style={{position:'absolute',top:6,right:6,width:8,height:8,background:'#ef4444',borderRadius:'50%',border:`2px solid ${surface}`}}/>}
              </button>
            </div>
          </header>

          {/* Notification dropdown */}
          {notifOpen&&(
            <div data-notif-area style={{position:'absolute',top:68,right:28,zIndex:100,width:360,...cs.card,borderRadius:16,boxShadow:'0 8px 32px rgba(0,0,0,0.15)',overflow:'hidden'}}>
              <div style={{padding:'14px 16px',borderBottom:`1px solid ${border}`,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span style={{fontWeight:700,fontSize:15,color:txt}}>{t('notif_title')}</span>
                <button onClick={()=>{setNotifOpen(false);setPage('home');}} style={{fontSize:12,color:accent,fontWeight:700,background:'none',border:'none',cursor:'pointer'}}>{t('read_all')}</button>
              </div>
              <div style={{maxHeight:320,overflow:'auto'}}>
                {notifs.map(n=>(
                  <div key={n.id} onClick={()=>{setSelNotif(n);setNotifOpen(false);}} style={{padding:'12px 16px',borderBottom:`1px solid ${border}`,cursor:'pointer',display:'flex',gap:12,alignItems:'flex-start'}} className="hover-card">
                    <div style={{marginTop:2,flexShrink:0}}>
                      {n.status==='approve'&&<CheckCircle size={18} color="#22c55e"/>}
                      {n.status==='wait'&&<Clock size={18} color="#f59e0b"/>}
                      {n.status==='reject'&&<XCircle size={18} color="#ef4444"/>}
                    </div>
                    <div>
                      <div style={{fontWeight:600,fontSize:13,color:txt,marginBottom:3}}>{lang==='th'?n.th:n.en}</div>
                      <div style={{fontSize:12,color:muted}}>{lang==='th'?n.descTh:n.descEn}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Page content */}
          <main style={{flex:1,padding:28,animation:'fadeIn 0.25s ease'}}>

            {/* ══════ HOME ══════════════════════════════════════════════ */}
            {page==='home'&&(
              <div style={{display:'grid',gridTemplateColumns:'1fr 380px',gap:24,maxWidth:1100}}>
                <div>
                  {/* Balance card */}
                  <div style={{background:'linear-gradient(135deg,#1d4ed8,#4f46e5)',borderRadius:20,padding:28,color:'#fff',marginBottom:24,boxShadow:'0 8px 32px rgba(37,99,235,0.25)'}}>
                    <div style={{fontSize:13,opacity:0.8,marginBottom:4}}>{t('your_balance')}</div>
                    <div style={{fontSize:36,fontWeight:900,marginBottom:16}}>{totalCoins.toLocaleString()} <span style={{fontSize:16,fontWeight:600,opacity:0.8}}>{t('coins_uc')}</span></div>
                    <div style={{display:'flex',gap:16}}>
                      {[['gold',coins.gold,t('gold_coin')],['silver',coins.silver,t('silver_coin')],['bronze',coins.bronze,t('bronze_coin')]].map(([type,val,label])=>(
                        <div key={type} style={{background:'rgba(255,255,255,0.15)',borderRadius:12,padding:'10px 16px',display:'flex',alignItems:'center',gap:8}}>
                          <CoinIcon type={type} size={28} iconSize={11}/>
                          <div><div style={{fontWeight:800,fontSize:16}}>{(val||0).toLocaleString()}</div><div style={{fontSize:11,opacity:0.7}}>{label}</div></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Claimable alert */}
                  {claimable.length>0&&(
                    <div style={{background:'linear-gradient(135deg,#22c55e,#16a34a)',borderRadius:16,padding:'16px 20px',marginBottom:20,display:'flex',alignItems:'center',gap:16,cursor:'pointer',boxShadow:'0 4px 16px rgba(34,197,94,0.2)'}} onClick={()=>setPage('claim')}>
                      <div style={{width:44,height:44,background:'rgba(255,255,255,0.2)',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center'}}><ArrowDownLeft size={22} color="#fff"/></div>
                      <div style={{flex:1}}>
                        <div style={{color:'#fff',fontWeight:700,fontSize:15}}>{t('claim_coins')}</div>
                        <div style={{color:'rgba(255,255,255,0.85)',fontSize:13}}>{claimable.length} {lang==='th'?'รายการรอรับเหรียญ':'items waiting to claim'}</div>
                      </div>
                      <ChevronRight size={20} color="#fff"/>
                    </div>
                  )}

                  {/* Submit form */}
                  <div style={{...cs.card,padding:24,borderRadius:20,marginBottom:24}}>
                    <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:20}}>
                      <div style={{width:36,height:36,background:'#eff6ff',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center'}}><Send size={18} color={accent}/></div>
                      <div>
                        <div style={{fontWeight:700,fontSize:16,color:txt}}>{t('submit_kaizen')}</div>
                        <div style={{fontSize:12,color:muted}}>{t('quota')}: {10-submitsToday}/10</div>
                      </div>
                    </div>

                    {/* Area */}
                    <div style={{marginBottom:16}}>
                      <label style={{display:'block',fontSize:12,fontWeight:600,color:muted,marginBottom:6,textTransform:'uppercase',letterSpacing:0.5}}>{t('select_dept')}</label>
                      <select value={area} onChange={e=>setArea(e.target.value)} style={{...cs.input,cursor:'pointer'}}>
                        <option value="">{t('select_dept_ph')}</option>
                        {DEPTS.map(d=><option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>

                    {/* Waste types */}
                    <div style={{marginBottom:16}}>
                      <label style={{display:'block',fontSize:12,fontWeight:600,color:muted,marginBottom:8,textTransform:'uppercase',letterSpacing:0.5}}>{t('what_waste')} {t('select_one')}</label>
                      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:8}}>
                        {WASTE_MAIN.map(w=>(
                          <button key={w.id} onClick={()=>setWaste(w.id)} style={{padding:'10px 6px',borderRadius:10,border:`2px solid ${waste===w.id?accent:border}`,background:waste===w.id?'#eff6ff':surface2,cursor:'pointer',display:'flex',flexDirection:'column',alignItems:'center',gap:6,transition:'all 0.15s'}}>
                            <w.icon size={18} color={waste===w.id?accent:muted}/>
                            <span style={{fontSize:10,fontWeight:600,color:waste===w.id?accent:muted,textAlign:'center',lineHeight:1.3}}>{lang==='th'?w.th:w.en}</span>
                          </button>
                        ))}
                        {WASTE_OTHER.map(w=>(
                          <button key={w.id} onClick={()=>setWaste(w.id)} style={{padding:'10px 6px',borderRadius:10,border:`2px solid ${waste===w.id?accent:border}`,background:waste===w.id?'#eff6ff':surface2,cursor:'pointer',display:'flex',flexDirection:'column',alignItems:'center',gap:6}}>
                            <w.icon size={18} color={waste===w.id?accent:muted}/>
                            <span style={{fontSize:10,fontWeight:600,color:waste===w.id?accent:muted,textAlign:'center'}}>{lang==='th'?w.th:w.en}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Detail */}
                    <div style={{marginBottom:16}}>
                      <label style={{display:'block',fontSize:12,fontWeight:600,color:muted,marginBottom:6,textTransform:'uppercase',letterSpacing:0.5}}>{t('desc_problem')}</label>
                      <textarea value={detail} onChange={e=>setDetail(e.target.value)} placeholder={t('type_problem')} rows={4} style={{...cs.input,resize:'vertical',lineHeight:1.6}} />
                    </div>

                    {/* ── Photo Attachment ── */}
                    <PhotoAttach
                      lang={lang} surface={surface} surface2={surface2}
                      border={border} txt={txt} muted={muted} accent={accent}
                      attachedImages={attachedImages} setAttachedImages={setAttachedImages}
                    />

                    <button onClick={doSubmit} disabled={submitting||queuePos!==null||submitsToday>=10} style={{...cs.btn,width:'100%',display:'flex',alignItems:'center',justifyContent:'center',gap:8,padding:'13px 20px',fontSize:15,opacity:(submitting||queuePos!==null||submitsToday>=10)?0.5:1}}>
                      <Send size={18}/> {t('submit_btn')}
                    </button>
                  </div>

                  {/* Recent notifications */}
                  <div style={{...cs.card,padding:24,borderRadius:20}}>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
                      <div style={{fontWeight:700,fontSize:16,color:txt}}>{t('notif_title')}</div>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',gap:10}}>
                      {notifs.slice(0,4).map(n=>(
                        <div key={n.id} onClick={()=>setSelNotif(n)} style={{display:'flex',alignItems:'flex-start',gap:12,padding:14,background:surface2,borderRadius:12,cursor:'pointer'}} className="hover-card">
                          <div style={{flexShrink:0,marginTop:2}}>
                            {n.status==='approve'&&<CheckCircle size={18} color="#22c55e"/>}
                            {n.status==='wait'&&<Clock size={18} color="#f59e0b"/>}
                            {n.status==='reject'&&<XCircle size={18} color="#ef4444"/>}
                          </div>
                          <div style={{flex:1}}>
                            <div style={{fontWeight:600,fontSize:13,color:txt,marginBottom:3}}>{lang==='th'?n.th:n.en}</div>
                            <div style={{fontSize:12,color:muted}}>{lang==='th'?n.descTh:n.descEn}</div>
                          </div>
                          <div style={{fontSize:11,color:muted,flexShrink:0}}>{lang==='th'?n.timeTh:n.timeEn}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN */}
                <div>
                  {/* Media preview */}
                  <div style={{...cs.card,padding:20,borderRadius:20,marginBottom:20}}>
                    <div style={{fontWeight:700,fontSize:15,color:txt,marginBottom:14}}>{t('knowledge_hub')}</div>
                    <div style={{display:'flex',flexDirection:'column',gap:10}}>
                      {MEDIA.slice(0,3).map(m=>(
                        <div key={m.id} onClick={()=>setPlayingVideo(m)} style={{display:'flex',gap:12,cursor:'pointer',padding:10,background:surface2,borderRadius:12}} className="hover-card">
                          <div style={{position:'relative',width:80,height:58,borderRadius:10,overflow:'hidden',flexShrink:0,background:m.bg||'#1e293b',display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <span style={{fontSize:26}}>{m.emoji||'▶️'}</span>
                            <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.2)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                              {m.type==='video'?<PlayCircle size={22} color="#fff"/>:<BookOpen size={18} color="#fff"/>}
                            </div>
                          </div>
                          <div style={{flex:1}}>
                            <div style={{fontWeight:600,fontSize:13,color:txt,lineHeight:1.4,marginBottom:4}}>{lang==='th'?m.th:m.en}</div>
                            <div style={{fontSize:11,color:muted,display:'flex',alignItems:'center',gap:4}}><Clock size={11}/>{m.duration}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button onClick={()=>{setPage('learn');setNotifOpen(false);}} style={{...cs.btnGhost,width:'100%',marginTop:14,textAlign:'center',fontSize:13}}>{lang==='th'?'ดูทั้งหมด →':'See all →'}</button>
                  </div>

                  {/* Mini leaderboard */}
                  <div style={{...cs.card,padding:20,borderRadius:20}}>
                    <div style={{fontWeight:700,fontSize:15,color:txt,marginBottom:14,display:'flex',alignItems:'center',gap:8}}><Trophy size={18} color="#f59e0b"/>{lang==='th'?'Top ดีเด่น':'Top Earners'}</div>
                    {TOP_EARNERS.map((u,i)=>(
                      <div key={u.id} style={{display:'flex',alignItems:'center',gap:12,padding:'10px 0',borderBottom:i<2?`1px solid ${border}`:'none'}}>
                        <div style={{width:24,height:24,borderRadius:'50%',background:i===0?'#fef3c7':i===1?'#f1f5f9':'#fff7ed',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                          <span style={{fontSize:12,fontWeight:900,color:i===0?'#d97706':i===1?muted:'#ea580c'}}>{i+1}</span>
                        </div>
                        <div style={{width:36,height:36,borderRadius:'50%',background:u.avatarBg,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,color:'#fff',flexShrink:0}}>{u.initials}</div>
                        <div style={{flex:1}}>
                          <div style={{fontWeight:600,fontSize:13,color:txt}}>{u.name}</div>
                          <div style={{fontSize:11,color:muted}}>{lang==='th'?u.deptTh:u.deptEn}</div>
                        </div>
                        <div style={{fontWeight:800,fontSize:14,color:i===0?'#d97706':i===1?muted:'#ea580c'}}>{u.coins}</div>
                      </div>
                    ))}
                    <button onClick={()=>{setPage('board');setNotifOpen(false);}} style={{...cs.btnGhost,width:'100%',marginTop:14,fontSize:13}}>{lang==='th'?'ดูกระดาน →':'Full Board →'}</button>
                  </div>
                </div>
              </div>
            )}

            {/* ══════ PROFILE ═══════════════════════════════════════════ */}
            {page==='profile'&&(
              <div style={{display:'grid',gridTemplateColumns:'300px 1fr',gap:24,maxWidth:900}}>
                <div>
                  {/* Profile card */}
                  <div style={{...cs.card,padding:24,borderRadius:20,marginBottom:20,textAlign:'center'}}>
                    {/* ── Avatar with upload ── */}
                    <div style={{position:'relative',width:80,height:80,margin:'0 auto 12px'}}>
                      {/* Avatar circle */}
                      {profileImg
                        ? <img src={profileImg} alt="avatar" style={{width:80,height:80,borderRadius:20,objectFit:'cover',border:`3px solid ${accent}`,display:'block'}}/>
                        : <div style={{width:80,height:80,borderRadius:20,background:'linear-gradient(135deg,#4facfe,#00f2fe)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:28,color:'#fff',border:`3px solid ${accent}`}}>SC</div>
                      }
                      {/* Camera button overlay */}
                      <label htmlFor="profile-upload" style={{position:'absolute',bottom:-6,right:-6,width:26,height:26,background:accent,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',border:`2px solid ${surface}`,boxShadow:'0 2px 8px rgba(0,0,0,0.2)'}}>
                        <Camera size={13} color="#fff"/>
                      </label>
                      <input id="profile-upload" type="file" accept="image/*" style={{display:'none'}} onChange={e=>{
                        const file=e.target.files?.[0];
                        if(!file) return;
                        const reader=new FileReader();
                        reader.onload=ev=>setProfileImg(ev.target.result);
                        reader.readAsDataURL(file);
                        e.target.value='';
                      }}/>
                    </div>
                    <div style={{fontWeight:700,fontSize:17,color:txt}}>Mr. Santisuk Chompan</div>
                    <div style={{fontSize:13,color:muted,marginBottom:16}}>EMP-10293</div>
                    <div style={{background:surface2,borderRadius:12,padding:14}}>
                      <div style={{fontSize:11,fontWeight:600,color:muted,marginBottom:8}}>{t('your_balance')}</div>
                      {[['gold',coins.gold,t('gold_coin')],['silver',coins.silver,t('silver_coin')],['bronze',coins.bronze,t('bronze_coin')]].map(([type,val,label])=>(
                        <div key={type} style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:8}}>
                          <div style={{display:'flex',alignItems:'center',gap:8}}><CoinIcon type={type} size={22} iconSize={9}/><span style={{fontSize:13,color:txt}}>{label}</span></div>
                          <span style={{fontWeight:800,color:type==='gold'?'#d97706':type==='silver'?muted:'#ea580c'}}>{(val||0).toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Claimable */}
                  {claimable.length>0&&(
                    <div style={{...cs.card,padding:20,borderRadius:20}}>
                      <div style={{fontWeight:700,fontSize:14,color:txt,marginBottom:12}}>{t('claim_coins')}</div>
                      {claimable.map(item=>(
                        <div key={item.id} style={{background:surface2,borderRadius:12,padding:14,marginBottom:10}}>
                          <div style={{fontWeight:600,fontSize:13,color:txt,marginBottom:4}}>{lang==='th'?item.th:item.en}</div>
                          <div style={{fontSize:11,color:muted,marginBottom:10}}>{lang==='th'?item.dateTh:item.dateEn}</div>
                          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                            <div style={{display:'flex',alignItems:'center',gap:6}}><CoinIcon type={item.type} size={20} iconSize={8}/><span style={{fontWeight:900,fontSize:15,color:txt}}>+{item.amount}</span></div>
                            <button onClick={()=>doClaim(item.id,item.type,item.amount)} disabled={claimingId!==null} style={{...cs.btn,padding:'6px 16px',fontSize:12,borderRadius:8,opacity:claimingId!==null?0.5:1,display:'flex',alignItems:'center',gap:6}}>
                              {claimingId===item.id?<><Loader2 size={14} style={{animation:'spin 1s linear infinite'}}/>{t('wait_moment')}</>:<><ArrowDownLeft size={14}/>{t('claim_btn')}</>}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  {/* Stats */}
                  <div style={{...cs.card,padding:24,borderRadius:20,marginBottom:20}}>
                    <div style={{fontWeight:700,fontSize:16,color:txt,marginBottom:4}}>{t('my_stats')}</div>
                    <div style={{fontSize:13,color:muted,marginBottom:20}}>{t('stats_desc')}</div>
                    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginBottom:20}}>
                      {['gold','silver','bronze'].map(type=>{
                        const total=txs.filter(tx=>tx.type==='income'&&tx.coinType===type).reduce((a,tx)=>a+(parseInt(tx.amount.replace(/[+,]/g,''))||0),0);
                        const labels={gold:t('gold_coin'),silver:t('silver_coin'),bronze:t('bronze_coin')};
                        return (
                          <div key={type} style={{...cs.card,padding:16,borderRadius:14,textAlign:'center'}}>
                            <CoinIcon type={type} size={36} iconSize={14} />
                            <div style={{fontWeight:900,fontSize:20,marginTop:8,color:type==='gold'?'#d97706':type==='silver'?muted:'#ea580c'}}>+{total}</div>
                            <div style={{fontSize:11,color:muted,marginTop:4}}>{labels[type]}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Transaction history */}
                  <div style={{...cs.card,padding:24,borderRadius:20}}>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
                      <div style={{fontWeight:700,fontSize:16,color:txt}}>{t('recent_tx')}</div>
                      <span style={{fontSize:12,color:muted}}>{t('this_month')}</span>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',gap:10}}>
                      {txs.map(tx=>(
                        <div key={tx.id} style={{display:'flex',alignItems:'center',gap:14,padding:14,background:surface2,borderRadius:12}}>
                          <div style={{width:40,height:40,borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',background:tx.type==='income'?'#f0fdf4':'#fef2f2',flexShrink:0}}>
                            {tx.type==='income'?<ArrowDownLeft size={18} color="#22c55e"/>:<ArrowUpRight size={18} color="#ef4444"/>}
                          </div>
                          <div style={{flex:1,minWidth:0}}>
                            <div style={{fontWeight:600,fontSize:14,color:txt,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{lang==='th'?tx.th:tx.en}</div>
                            <div style={{fontSize:12,color:muted}}>{lang==='th'?tx.dateTh:tx.dateEn}</div>
                          </div>
                          <div style={{display:'flex',alignItems:'center',gap:6,flexShrink:0}}>
                            <CoinIcon type={tx.coinType} size={18} iconSize={7}/>
                            <span style={{fontWeight:800,fontSize:15,color:tx.type==='income'?'#22c55e':'#ef4444'}}>{tx.amount}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ══════ REWARDS ═══════════════════════════════════════════ */}
            {page==='rewards'&&(
              <div style={{maxWidth:1100}}>
                {/* Category filter */}
                <div style={{display:'flex',gap:10,marginBottom:20,flexWrap:'wrap'}}>
                  <button onClick={()=>setCatFilter(null)} style={{padding:'8px 18px',borderRadius:20,border:`2px solid ${catFilter===null?accent:border}`,background:catFilter===null?accent:'transparent',color:catFilter===null?'#fff':muted,fontWeight:700,fontSize:13,cursor:'pointer'}}>
                    {t('all')}
                  </button>
                  {CATS.map(c=>(
                    <button key={c.id} onClick={()=>setCatFilter(c.id)} style={{padding:'8px 18px',borderRadius:20,border:`2px solid ${catFilter===c.id?accent:border}`,background:catFilter===c.id?accent:'transparent',color:catFilter===c.id?'#fff':muted,fontWeight:700,fontSize:13,cursor:'pointer',display:'flex',alignItems:'center',gap:6}}>
                      <c.icon size={14}/>{lang==='th'?c.th:c.en}
                    </button>
                  ))}
                </div>

                {/* Products grid */}
                {filteredProducts.length===0 ? (
                  <div style={{textAlign:'center',padding:60,color:muted}}>
                    <Package size={56} style={{margin:'0 auto 16px',opacity:0.3}}/>
                    <div style={{fontWeight:700,color:txt,fontSize:18,marginBottom:8}}>ไม่มีสินค้าในหมวดนี้</div>
                    <div style={{fontSize:14}}>ลองเลือกหมวดหมู่อื่น</div>
                  </div>
                ) : (
                  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:16}}>
                    {filteredProducts.map(p=>(
                      <ProductCard
                        key={p.id} p={p} lang={lang} surface={surface} surface2={surface2}
                        border={border} txt={txt} muted={muted} accent={accent}
                        t={t} cart={cart} setCart={setCart} setErrMsg={setErrMsg}
                        openProductDetail={openProductDetail} launchFlyAnim={launchFlyAnim}
                        CoinIcon={CoinIcon}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ══════ KNOWLEDGE ═════════════════════════════════════════ */}
            {page==='learn'&&(
              <div style={{maxWidth:900}}>
                <div style={{display:'flex',gap:12,marginBottom:20,flexWrap:'wrap'}}>
                  <div style={{flex:1,position:'relative',minWidth:200}}>
                    <Search size={16} style={{position:'absolute',left:12,top:'50%',transform:'translateY(-50%)',color:muted}}/>
                    <input value={knowledgeSearch} onChange={e=>setKnowledgeSearch(e.target.value)} placeholder={t('search_article')} style={{...cs.input,paddingLeft:38}} />
                  </div>
                  <div style={{display:'flex',gap:8}}>
                    {[['all',t('all_content')],['video',t('videos')],['article',t('articles')]].map(([val,label])=>(
                      <button key={val} onClick={()=>setKnowledgeFilter(val)} style={{padding:'8px 18px',borderRadius:10,border:`2px solid ${knowledgeFilter===val?accent:border}`,background:knowledgeFilter===val?accent:'transparent',color:knowledgeFilter===val?'#fff':muted,fontWeight:700,fontSize:13,cursor:'pointer'}}>{label}</button>
                    ))}
                  </div>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:16}}>
                  {filteredMedia.map(m=>(
                    <div key={m.id} onClick={()=>setPlayingVideo(m)} style={{...cs.card,borderRadius:16,overflow:'hidden',cursor:'pointer'}} className="hover-card">
                      <div style={{position:'relative',height:160,background:m.bg||'#1e293b',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <span style={{fontSize:56}}>{m.emoji||'▶️'}</span>
                        <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.2)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                          {m.type==='video'?<PlayCircle size={40} color="#fff"/>:<BookOpen size={32} color="#fff"/>}
                        </div>
                        <span style={{position:'absolute',top:10,left:10,background:m.type==='video'?'#3b82f6':'#22c55e',color:'#fff',fontSize:10,fontWeight:700,padding:'3px 10px',borderRadius:20}}>{m.type==='video'?t('videos'):t('articles')}</span>
                      </div>
                      <div style={{padding:16}}>
                        <div style={{fontWeight:700,fontSize:15,color:txt,marginBottom:6}}>{lang==='th'?m.th:m.en}</div>
                        <div style={{fontSize:12,color:muted,display:'flex',alignItems:'center',gap:6}}><Clock size={12}/>{m.duration}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ══════ LEADERBOARD ═══════════════════════════════════════ */}
            {page==='board'&&(
              <div style={{maxWidth:800}}>
                <p style={{fontSize:14,color:muted,marginBottom:24}}>{t('leaderboard_desc')}</p>
                <div style={{display:'flex',flexDirection:'column',gap:16}}>
                  {TOP_EARNERS.map((u,i)=>(
                    <div key={u.id} style={{...cs.card,borderRadius:20,overflow:'hidden'}}>
                      <div style={{padding:20,display:'flex',gap:16,alignItems:'center',background:i===0?'linear-gradient(135deg,#fef3c7,#fffbeb)':surface2}}>
                        <div style={{width:48,height:48,borderRadius:'50%',background:i===0?'#fde68a':i===1?'#e2e8f0':'#fed7aa',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,fontSize:20,color:i===0?'#92400e':i===1?muted:'#7c2d12',flexShrink:0}}>
                          {i+1}
                        </div>
                        <div style={{width:52,height:52,borderRadius:14,background:u.avatarBg,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:18,color:'#fff',border:`2px solid rgba(255,255,255,0.3)`,flexShrink:0}}>{u.initials}</div>
                        <div style={{flex:1}}>
                          <div style={{fontWeight:700,fontSize:17,color:txt}}>{u.name}</div>
                          <div style={{fontSize:13,color:muted,display:'flex',alignItems:'center',gap:6}}><Building size={13}/>{lang==='th'?u.deptTh:u.deptEn}</div>
                          <div style={{fontSize:13,color:'#4f46e5',marginTop:4,fontStyle:'italic'}}>"{lang==='th'?u.quoteTh:u.quoteEn}"</div>
                        </div>
                        <div style={{textAlign:'right'}}>
                          <div style={{fontSize:11,color:muted,fontWeight:600}}>TOTAL</div>
                          <div style={{fontSize:24,fontWeight:900,color:i===0?'#d97706':i===1?muted:'#ea580c'}}>{u.coins}</div>
                        </div>
                      </div>
                      <div style={{padding:'14px 20px',borderTop:`1px solid ${border}`}}>
                        <div style={{fontWeight:600,fontSize:12,color:muted,marginBottom:10,display:'flex',alignItems:'center',gap:6}}><Lightbulb size={14}/>{t('approved_sugg')} — {t('past_month')}</div>
                        {u.suggestions.map(s=>(
                          <div key={s.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 12px',background:surface2,borderRadius:10}}>
                            <div>
                              <div style={{fontSize:13,fontWeight:600,color:txt}}>{lang==='th'?s.th:s.en}</div>
                              <div style={{fontSize:11,color:muted}}>{lang==='th'?s.dateTh:s.dateEn}</div>
                            </div>
                            <span style={{background:'#eff6ff',color:accent,border:`1px solid #bfdbfe`,borderRadius:8,padding:'4px 12px',fontSize:12,fontWeight:700}}>{s.earned}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ══════ MISSIONS ══════════════════════════════════════════ */}
            {page==='missions'&&(
              <div style={{maxWidth:700}}>
                {[
                  {title:'Zero Defect',th:'ลดของเสียในกระบวนการผลิตให้เป็น 0% ภายในไตรมาสนี้',en:'Reduce manufacturing defects to 0% this quarter',icon:Shield,color:'#ef4444',bg:'#fef2f2',pct:62},
                  {title:'Cost Reduction 15%',th:'ลดต้นทุนการผลิต 15% จากการทำ Kaizen',en:'Reduce manufacturing cost 15% through Kaizen',icon:TrendingDown,color:'#22c55e',bg:'#f0fdf4',pct:45},
                  {title:'Improve Productivity',th:'เพิ่มประสิทธิภาพและลดขั้นตอนซับซ้อน',en:'Increase productivity and reduce over-processing',icon:Activity,color:'#3b82f6',bg:'#eff6ff',pct:78},
                ].map((m,i)=>(
                  <div key={i} style={{...cs.card,padding:24,borderRadius:20,marginBottom:16}}>
                    <div style={{display:'flex',gap:16,alignItems:'flex-start'}}>
                      <div style={{width:52,height:52,borderRadius:14,background:m.bg,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                        <m.icon size={26} color={m.color}/>
                      </div>
                      <div style={{flex:1}}>
                        <div style={{fontWeight:700,fontSize:17,color:txt,marginBottom:4}}>{m.title}</div>
                        <div style={{fontSize:14,color:muted,marginBottom:16}}>{lang==='th'?m.th:m.en}</div>
                        <div style={{background:surface2,borderRadius:20,height:8,overflow:'hidden'}}>
                          <div style={{height:'100%',borderRadius:20,background:m.color,width:`${m.pct}%`,transition:'width 1s ease'}}/>
                        </div>
                        <div style={{fontSize:12,color:muted,marginTop:6,fontWeight:600}}>{m.pct}% {lang==='th'?'สำเร็จแล้ว':'Complete'}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ══════ IDEA BANK ═════════════════════════════════════════ */}
            {page==='ideas'&&(
              <div style={{maxWidth:900}}>
                <p style={{fontSize:14,color:muted,marginBottom:20}}>{t('idea_bank_desc')}</p>
                <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:14}}>
                  {MOCK_IDEAS.map(idea=>(
                    <div key={idea.id} style={{...cs.card,padding:18,borderRadius:16}} className="hover-card">
                      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:10}}>
                        <div style={{fontWeight:700,fontSize:14,color:txt,flex:1,paddingRight:10,lineHeight:1.4}}>{lang==='th'?idea.th:idea.en}</div>
                        <span style={{background:'#fffbeb',color:'#d97706',border:'1px solid #fde68a',borderRadius:20,padding:'3px 10px',fontSize:11,fontWeight:700,whiteSpace:'nowrap',flexShrink:0}}>{idea.dept}</span>
                      </div>
                      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <div style={{fontSize:12,color:muted}}>{t('proposed_by')} {lang==='th'?idea.authorTh:idea.authorEn}</div>
                        <div style={{fontSize:12,color:muted,display:'flex',alignItems:'center',gap:4}}><Heart size={12} color="#f43f5e"/> {idea.likes}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </main>

          {/* Footer */}
          <footer style={{borderTop:`1px solid ${border}`,padding:'14px 28px',textAlign:'center',fontSize:12,color:muted}}>
            {t('footer')}
          </footer>
        </div>
      </div>
    </div>
  );
}
