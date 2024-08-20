import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";


export default function Footer() {
    return (
        <footer className="text-gray-700 pt-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    <div>
                        <h5 className="font-bold text-lg mb-4">Company Info</h5>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-500">About Us</a></li>
                            <li><a href="#" className="hover:text-gray-500">Carrier</a></li>
                            <li><a href="#" className="hover:text-gray-500">We are hiring</a></li>
                            <li><a href="#" className="hover:text-gray-500">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold text-lg mb-4">Legal</h5>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-500">About Us</a></li>
                            <li><a href="#" className="hover:text-gray-500">Carrier</a></li>
                            <li><a href="#" className="hover:text-gray-500">We are hiring</a></li>
                            <li><a href="#" className="hover:text-gray-500">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold text-lg mb-4">Features</h5>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-500">Business Marketing</a></li>
                            <li><a href="#" className="hover:text-gray-500">User Analytic</a></li>
                            <li><a href="#" className="hover:text-gray-500">Live Chat</a></li>
                            <li><a href="#" className="hover:text-gray-500">Unlimited Support</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold text-lg mb-4">Resources</h5>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-500">iOS & Android</a></li>
                            <li><a href="#" className="hover:text-gray-500">Watch a Demo</a></li>
                            <li><a href="#" className="hover:text-gray-500">Customers</a></li>
                            <li><a href="#" className="hover:text-gray-500">API</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold mb-4">Get In Touch</h5>
                        <ul className="space-y-2 font-bold">
                            <li className="flex items-center gap-2"><LuPhone className="text-3xl" color="#96BB7C" /><span className="ml-2 ">(480) 555-0103</span></li>
                            <li className="flex items-center gap-2"><img src="./images/location.svg" />
                            <span className="ml-2 break-all">4517 Washington Ave. Manchester,
                            Kentucky 39495</span></li>
                            <li className="flex items-center gap-2 break-all"><img src="./images/carbon_send-alt.svg" /><span className="ml-2">debra.holt@example.com</span></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="flex flex-col md:flex-row justify-between items-center container bg-[#FAFAFA] py-4 mt-4">
                <p className="text-sm text-gray-500 font-bold">Made With Love By <a href="#" className="text-gray-500">Figmaland</a>. All Rights Reserved</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <div className="flex items-center gap-8 justify-center text-[#96BB7C] text-3xl">
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </footer>

    )
}