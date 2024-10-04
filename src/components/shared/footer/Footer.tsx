import { Layout } from "antd";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <footer className="p-4 mt-auto border-t border-x-0 border-b-0 border-solid border-t-[#222222]">
      <AntFooter className="bg-[#1b1b1b] text-slate-100  p-4 w-full max-w-screen-xl mx-auto">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="list-none">
                <li className="mb-2">
                  <span>Home</span>
                </li>
                <li className="mb-2">
                  <span>Cars</span>
                </li>
                <li className="mb-2">
                  <span>Contact Us</span>
                </li>
                <li className="mb-2">
                  <span>Privacy Policy</span>
                </li>
                <li className="mb-2">
                  <span>Terms of Service</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FacebookOutlined className="text-slate-100" style={{ fontSize: "24px", margin: "0 10px" }} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <TwitterOutlined className="text-slate-100" style={{ fontSize: "24px", margin: "0 10px" }} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <InstagramOutlined className="text-slate-100" style={{ fontSize: "24px", margin: "0 10px" }} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <LinkedinOutlined className="text-slate-100" style={{ fontSize: "24px", margin: "0 10px" }} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>Email: info@example.com</p>
            </div>
          </div>
        </div>
      </AntFooter>
    </footer>
  );
};

export default Footer;
