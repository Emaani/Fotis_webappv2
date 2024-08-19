// Footer.tsx
"use client";

const Footer = () => {
    return (
        <div className="bg-prim-color border-t-2 pt-20 pb-7 text-white">
            <div className="horizontal-padding">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 3xl:grid-cols-4 text-sm">
                    <div className="pb-5">
                        <Image width={80} src={Logo} alt="Fotis Logo" />
                        <p className="mt-5">+256 757 220113</p>
                        <p className="mt-3">fotisenterprises@gmail.com</p>
                        <p className="mt-3">10 Bukoto St, Kampala, Uganda <br /></p>
                    </div>
                    <div className="pb-5 pt-5">
                        <p className="text-prim-green font-bold mb-3">Company</p>
                        <ul className="gap-3 flex flex-col">
                            <li>
                                <Link className="hover:text-prim-green" href="/">Home</Link>
                            </li>
                            <li>
                                <Link className="hover:text-prim-green" href="/about">About</Link>
                            </li>
                            <li>
                                <Link className="hover:text-prim-green" href="/faq">FAQs</Link>
                            </li>
                            <li>
                                <Link className="hover:text-prim-green" href="/contact">Contact</Link>
                            </li>
                            <li>
                                <a className="hover:text-prim-green" href="/signup">Register</a>
                            </li>
                        </ul>
                    </div>
                    <div className="pb-5 pt-5">
                        <p className="text-prim-green font-bold mb-3">Community</p>
                        <ul className="gap-3 flex flex-col">
                            <li>
                                <Link className="hover:text-prim-green" href="/">LinkedIn</Link>
                            </li>
                            <li>
                                <Link className="hover:text-prim-green" href="/">Twitter</Link>
                            </li>
                            <li>
                                <Link className="hover:text-prim-green" href="/">Facebook</Link>
                            </li>
                            <li>
                                <Link className="hover:text-prim-green" href="/">YouTube</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="pb-5 pt-5">
                        <p className="text-prim-green font-bold mb-3">Partners</p>
                        <ul className="gap-3 flex flex-col">
                            <li>
                                <Link className="hover:text-prim-green" href="https://ugandacoffee.go.ug/" target="_blank" rel="noopener noreferrer">UCDA</Link>
                            </li>
                            <li>
                                <Link className="hover:text-prim-green" href="/">Nature Food Commodities</Link>
                            </li>
                            <li>
                                <Link className="hover:text-prim-green" href="/">Nile Agro</Link>
                            </li>
                            <li>
                                <Link className="hover:text-prim-green" href="https://www.amsaf.africa/" target="_blank" rel="noopener noreferrer">AMSAF</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="text-center mt-14 text-sm">© 2024 All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;
