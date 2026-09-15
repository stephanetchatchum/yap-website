export default function Footer() {
    return (
        <footer className="bg-navy text-white mt-auto">
            <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

                {/* Column 1: Identity */}
                <div>
                    <h3 className="text-sm uppercase tracking-wide font-bold text-gold mb-3">Yigil Academy of Potentials (YAP) Ltd.</h3>
                    <p className="text-gray-300 text-xs leading-relaxed">
                        Registered under the Laws of Rwanda (RDB).<br/>
                        TIN: 156850598
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h3 className="text-sm uppercase tracking-wide font-bold text-gold mb-3">Quick Links</h3>
                    <ul className="space-y-1 text-gray-300 text-xs leading-relaxed">
                        <li><a href="/" className="hover:text-gold">Home</a></li>
                        <li><a href="/academics" className="hover:text-gold">Academic Programs</a></li>
                        <li><a href="/incubator" className="hover:text-gold">Talent Incubator</a></li>
                        <li><a href="/pricing" className="hover:text-gold">Pricing & Memberships</a></li>
                        <li><a href="/about" className="hover:text-gold">About Us</a></li>
                        <li><a href="/careers" className="hover:text-gold">Careers</a></li>
                    </ul>
                </div>

                {/* Column 3: Contact */}
                <div>
                    <h3 className="text-sm uppercase tracking-wide font-bold text-gold mb-3">Contact</h3>
                    <p className="text-gray-300 text-xs leading-relaxed">
                        Admissions: admissions@yigilacademy.com<br />
                        General: info@yigilacademy.com<br />
                        WhatsApp/Call: +250 792 400 652<br />
                        Kigali, Rwanda
                    </p>
                </div>

                {/* Column 4: Policy Note */}
                <div>
                <h3 className="text-sm uppercase tracking-wide font-bold text-gold mb-3">Payment Policy</h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                    Official payments are processed strictly via MTN MoMo Pay Merchant & Bank Transfer. Mentors never collect cash.
                </p>
                </div>
            </div>
        </footer>
    );
}