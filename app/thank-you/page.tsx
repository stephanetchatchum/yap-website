export default function ThankYou() {
    const whatsappMessage = encodeURIComponent(
        "Hello Yigil Academy, I just submitted an enrollment inquiry on your website and would like to discuss the next steps."
    );

    return (
        <main className="py-24 px-4 text-center">
            <div className="max-w-md mx-auto">
                <h1 className="font-heading text-3xl font-bold text-navy mb-4">
                Thank You!
                </h1>
                <p className="text-gray-600 mb-8">
                Your inquiry has been received. Our Admissions Director will be in touch shortly.
                </p>
                <a
                    href={`https://wa.me/250792400652?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 text-white font-semibold rounded-lg px-6 py-3 hover:bg-green-600 transition"
                >
                Click here to speak with our Admissions Director on WhatsApp now
                </a>
            </div>
        </main>
    );
}