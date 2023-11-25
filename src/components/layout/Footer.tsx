import {
  FacebookFilled,
  PhoneFilled,
  MailFilled,
  LinkOutlined,
} from "@ant-design/icons";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-secondary w-full">
      <div className="flex items-center sm:gap-5 gap-2 py-5 justify-center">
        <Image
          alt="logo"
          src="/logo.png"
          className="sm:h-12 sm:w-12 h-10 w-10"
          width={500}
          height={500}
        />
        <p className="text-center sm:text-3xl text-2xl text-primary font-extrabold font-serif">
          Islamic Elegance
        </p>
        <Image
          alt="logo"
          src="/logo.png"
          className="sm:h-12 sm:w-12 h-10 w-10"
          width={500}
          height={500}
        />
      </div>
      <div className="flex sm:flex-row flex-col justify-around overflow-hidden my-5 mx-8">
        <div className="flex sm:flex-row flex-col justify-around overflow-hidden">
          <div className="flex flex-col gap-2">
            <a
              href="mailto:minhazulislamkhan@gmail.com"
              className="flex gap-4 items-center text-xs mb-2"
            >
              <MailFilled className="font-extrabold text-xl text-primary" />
              <p className="text-black hover:text-primary text-md">
                <span className="font-bold text-primary">Email: </span>
                minhazulislamkhan@gmail.com
              </p>
            </a>
            <a
              href="tel:+8801521438469"
              className="flex gap-4 items-center text-xs my-2"
            >
              <PhoneFilled className="font-extrabold text-xl text-primary" />
              <p className="text-black hover:text-primary text-md">
                <span className="font-bold text-primary">Contact: </span>
                +8801521438469
              </p>
            </a>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col justify-around overflow-hidden">
          <div className="flex flex-col gap-2">
            <a
              href="https://www.facebook.com/mdminhazulislam.khan.77"
              className="flex gap-4 items-center text-xs my-2"
              target="_blank"
            >
              <FacebookFilled className="font-extrabold text-xl text-primary" />
              <p className="text-black hover:text-primary text-md">
                <span className="font-bold text-primary">Facebook: </span>
                www.facebook.com
              </p>
            </a>
            <a
              href="https://islamic-elegance.vercel.app/"
              target="_blank"
              className="flex gap-4 items-center text-xs mt-2"
            >
              <LinkOutlined className="font-extrabold text-xl text-primary" />
              <p className="text-black hover:text-primary text-md">
                <span className="font-bold text-primary">Website: </span>
                www.islamic-elegance.com
              </p>
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-primary text-xs mt-3 py-4">
        © {new Date().getFullYear()} All Rights Reserved Islamic Elegance
      </p>
    </footer>
  );
};

export default Footer;
