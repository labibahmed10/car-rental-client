import { Layout } from "antd";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <footer className="bg-[#223E51] text-white p-4 mt-auto">
      <AntFooter className="bg-[#223E51] text-white p-4 w-full max-w-screen-xl mx-auto">
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
                  <a href="/" className="text-white hover:text-gray-300">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/cars" className="text-white hover:text-gray-300">
                    Cars
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/contact" className="text-white hove   r:text-gray-300">
                    Contact Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/contact" className="text-white hover:text-gray-300">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/contact" className="text-white hover:text-gray-300">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FacebookOutlined style={{ fontSize: "24px", margin: "0 10px" }} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <TwitterOutlined style={{ fontSize: "24px", margin: "0 10px" }} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <InstagramOutlined style={{ fontSize: "24px", margin: "0 10px" }} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <LinkedinOutlined style={{ fontSize: "24px", margin: "0 10px" }} />
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
