import tikkaLogo from "../assets/images/tikkaLogo (1) 1.png";
import tel from "../assets/icons/call-calling.svg";
import CustomChip from "./CustomChip";
import img1 from "../assets/images/Frame 1171276753.png";
import img2 from "../assets/images/Frame 1171276755.png";
import img3 from "../assets/images/enamad1 1.png";
import img4 from "../assets/images/enamad3 1.png";
import img5 from "../assets/images/secure-logo 1.png";
import ListButton from "./ListButton";
import SocialButton from "./SocialButton";
import linkedin from "../assets/icons/Group (1).svg";
import pinterest from "../assets/icons/Group (2).svg";
import insta from "../assets/icons/Group.svg";
import youtube from "../assets/icons/Lozenge.svg";
import t from "../assets/icons/Vector.svg";
import sub from "../assets/icons/Subtract.svg";

function Footer() {
  return (
    <footer className="h-[887px] w-full bg-[#00262F]">
      <div className="pt-[160px] pb-[56px] px-[122px]">
        <div className="flex justify-between">
          <div className="min-w-[354px]">
            <img src={tikkaLogo} alt="tikka" />
            <div className="title-default mt-8 mb-4">
              آموزش آنلاین زبان با آکادمی آنلاین تیکا
            </div>
            <div className="text-default text-wrap text-justify max-w-[354px] max-gap-1">
              برای پیشرفت در تخصص و یا مهاجرت، یادگیری و تقویت زبان غیرقابل
              اجتناب است. با توجه به نوع زندگی امروزی و کمبود وقت کافی و مناسب
              برای یادگیری و همچنین هزینه های بالا و عدم دسترسی به معلم خصوصی
              حرفه ای، یادگیری و ارتقاء سطح زبان برای پیشرفت، تقریبا به فراموشی
              سپرده می شود.
            </div>
            <ul className="pt-4">
              <li className="text-default list-disc list-inside">
                همه روزه از ساعت ۹:۳۰ تا ۱۸ در کنار شما هستیم.
              </li>
            </ul>
          </div>
          <div className="text-default mr-[47px] min-w-[289px]">
            <p className="title-default pb-4">خدمات ما</p>
            <ul className="list-disc list-inside">
              <ListButton
                text={"آموزش انلاین تیکا چطور کار می کند؟"}
                navigateTo={""}
              ></ListButton>
              <ListButton text={"استاد زبان هستم"} navigateTo={""}></ListButton>
              <ListButton text={"قوانین مقررات"} navigateTo={""}></ListButton>
              <ListButton text={"درخواست مدرک"} navigateTo={""}></ListButton>
              <ListButton
                text={"راهنمای حضور در کلاس"}
                navigateTo={""}
              ></ListButton>
              <ListButton
                text={"پرداخت امن و امنیت پرداخت"}
                navigateTo={""}
              ></ListButton>
              <ListButton text={"وبلاگ"} navigateTo={""}></ListButton>
            </ul>
          </div>
          <div className="text-default mr-[45px] min-w-[289px]">
            <p className="title-default pb-4">اطلاعات تکمیلی</p>
            <ul className="list-disc list-inside">
              <ListButton text={"تماس با ما "} navigateTo={""}></ListButton>
              <ListButton text={"تیم تیکا"} navigateTo={""}></ListButton>
              <ListButton
                text={"تیکا در رسانه ها"}
                navigateTo={""}
              ></ListButton>
              <ListButton text={"درباره ی تیکا"} navigateTo={""}></ListButton>
              <ListButton text={"دعوت از دوستان"} navigateTo={""}></ListButton>
              <ListButton
                text={"پکیج سازمانی آموزش زبان"}
                navigateTo={""}
              ></ListButton>
              <ListButton text={"اساتید منعطف"} navigateTo={""}></ListButton>
              <ListButton text={"سوالات متداول"} navigateTo={""}></ListButton>
            </ul>
          </div>
        </div>

        <div className="pt-[50px] pb-8">
          <div>
            <p className="text-[#99D1D5] font-bold leading-8 text-base mb-4">
              دسته بندی ها
            </p>
            <div className="flex">
              <CustomChip label={"مکالمه"} navigateTo={""}></CustomChip>
              <CustomChip label={"آیلتس"} navigateTo={""}></CustomChip>
              <CustomChip label={"عربی خلیجی"} navigateTo={""}></CustomChip>
              <CustomChip label={"کلاس خصوصی"} navigateTo={""}></CustomChip>
              <CustomChip label={"مکالمه ترکی استانبولی"} navigateTo={""}></CustomChip>
              <CustomChip label={"تعیین سطح"} navigateTo={""}></CustomChip>
              <CustomChip label={"تافل"} navigateTo={""}></CustomChip>
              <button className="text-[#008C95] text-base font-normal leading-[27.64px]">
                بیشتر ...
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img src={img2} alt="img2" className="img-footer" />
          <img src={img5} alt="img5" className="img-footer" />
          <img src={img3} alt="img3" className="img-footer" />
          <img src={img1} alt="img1" className="img-footer" />
          <img src={img4} alt="img4" className="img-footer" />
        </div>

        <div className="my-8">
          <div className="flex justify-between border-t py-8">
            <div className="flex items-center text-white">
              <img src={tel} alt="tel" className="mr-1" />
              <span className="text-xs">تلفن پشتیبانی :021-91016620</span>
            </div>
            <div className="text-default">
              تمامی حقوق سایت متعلق به تیکا؛ پلتفرم جست و جو و انتخاب استاد
              آنلاین زبان و معلم خصوصی می باشد.
            </div>
            <div>
              <SocialButton icon={t} navigateTo={""} text={""}></SocialButton>
              <SocialButton
                icon={insta}
                navigateTo={""}
                text={""}
              ></SocialButton>
              <SocialButton
                icon={linkedin}
                navigateTo={""}
                text={""}
              ></SocialButton>
              <SocialButton
                icon={youtube}
                navigateTo={""}
                text={""}
              ></SocialButton>
              <SocialButton
                icon={pinterest}
                navigateTo={""}
                text={""}
              ></SocialButton>
              <SocialButton icon={sub} navigateTo={""} text={""}></SocialButton>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
