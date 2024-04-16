import pic1 from "./img/ecommerce.png";
import pic2 from "./img/youtube.png";
import pic3 from "./img/chatapp.png";
// import pic4 from "./img/figmafood.png";
import pic0 from "./img/gethergopic.png"
const project = [
  {
    id: 0,
    title: "Gethergo:travel social network",
    img: pic0,
    linkurl: "https://www.gethergo.com/th/",
    desc: "gethergo เป็นแพลตฟอร์มที่ออกแบบมาเพื่อสนับสนุนการท่องเที่ยวให้คุณค่ามากขึ้น บริการที่ครอบคลุมทุกด้านของการเดินทางของนักเดินทางเรา ไม่ว่าจะกำลังมองหาคอนเท้นต์เพื่อสร้างแรงบันดาลใจ วางแผนการเดินทาง ทำการจอง หรือแชร์ประสบการณ์การเดินทางท่องเที่ยวของทุกคน  'gethergo'  คือคำตอบที่ครบทุกอย่าง",

  },
  {
    id: 1,
    title: "E-commerce",
    img: pic1,
    linkurl: "https://client-e-2commerce.herokuapp.com/",
    desc: "ร้านค้าเสื้อผ้าออนไลน์ ที่มีระบบ SignupและSignin ที่มีการป้องกันข้อมูลของUser ด้วย Bcryptjs และมีการสร้างJWTเก็บไว้ที่Cookie ช่วยให้ข้อมูลของUserมีความปลอดภัยมากยิ่งขึ้น ระบบร้านค้าสามารถเพิ่มสินค้า ,ค้นหาตามหมวดหมู่ และสามารถคำนวณราคาสินค้าทั้งหมด ได้",
    hint: "User:test1 Password:1234",
  },
  {
    id: 2,
    title: "Chat-app with Firebase",
    img: pic3,
    linkurl: "https://chatapp-firebasedev.netlify.app/",
    desc: "ระบบChat App ที่มีระบบSignupและSignin ด้วยMail ของFirebase สามารถค้นหารายชื่อ พูดคุยผ่านtext และสามารถอัพโหลดรูปภาพได้",
    hint: "User:test1@gmail.com Password:12341234 User:test2@gmail.com Password:12341234  ",
  },
  {
    id: 3,
    title: "YoutubeClone",
    img: pic2,
    linkurl: "https://client-youtubeclone.herokuapp.com/",
    desc: "Youtube ที่มีระบบ SignupและSignin ที่มีการป้องกันข้อมูลของUser ด้วย Bcryptjs และมีการสร้างJWTเก็บไว้ที่Cookie ช่วยให้ข้อมูลของUserมีความปลอดภัยมากยิ่งขึ้น สามารถUpload Video, ค้นหาวิดีโอที่ต้องการได้ ,หน้าHome มีการrandom videoเพื่อนำมาแสดงผล และสามารถใช้dark&light modeได้  ",
    hint: "User:test1 Password:1234",
  },
  // {
  //   id: 4,
  //   title: "Figma UI to React (HTML/CSS only)",
  //   img: pic4,
  //   linkurl: "https://figma-fooddelivery.netlify.app/",
  //   desc: "เว็บไซต์ร้านอาหารที่ตัดมาจาก Figma (Landing Page) เขียนขึ้นตามด้วยภาษาHTML/CSS(SCSS) ลิ้งต้นฉบับ:https://www.figma.com/file/YORmBT9bD8J244hEGagMNI/Let's-Food-UI-Kit---Landing-Page-(Community)?node-id=1%3A2  ",
  //   hint: "User:test1 Password:1234",
  // },
];
export default project;
