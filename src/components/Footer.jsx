import Link from "next/link";
import Image from "next/image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                <Image src="/webitya-logo.jpg" alt="Webitya" fill className="object-cover" />
                            </div>
                            <span className="text-xl font-bold flex items-end">Webitya<span className="text-brand-green text-3xl leading-none">.</span></span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Premier WhatsApp Business API partner for Indian SMEs. Automate, engage, and grow with the power of conversational marketing.
                        </p>
                    </div>

                    {/* Features */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Platform</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><Link href="#features" className="hover:text-brand-green transition-colors">Key Features</Link></li>
                            <li><Link href="#use-cases" className="hover:text-brand-green transition-colors">Use Cases</Link></li>
                            <li><Link href="#pricing" className="hover:text-brand-green transition-colors">Pricing</Link></li>
                            <li><Link href="https://wa.digital.webitya.in" target="_blank" className="hover:text-brand-green transition-colors">Login Dashboard</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><Link href="https://webitya.com" target="_blank" className="hover:text-brand-green transition-colors">Main Website</Link></li>
                            <li><Link href="#about" className="hover:text-brand-green transition-colors">About Us</Link></li>
                            <li><Link href="#contact" className="hover:text-brand-green transition-colors">Contact</Link></li>
                            <li><Link href="#privacy" className="hover:text-brand-green transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <EmailIcon fontSize="small" className="text-brand-green shrink-0" />
                                <a href="mailto:wa.webitya@gmail.com" className="hover:text-white transition-colors">wa.webitya@gmail.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <PhoneIcon fontSize="small" className="text-brand-green shrink-0" />
                                <a href="tel:+916207732383" className="hover:text-white transition-colors">+91 6207732383</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <LocationOnIcon fontSize="small" className="text-brand-green shrink-0" />
                                <span>Ranchi, Jharkhand<br />INDIA 834002</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Webitya. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {/* Socials could go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
