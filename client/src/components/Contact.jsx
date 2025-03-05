export default function Contact() {
    return (
        <section className="bg-white py-12 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Me</h2>
                <p className="text-lg text-gray-600 mb-6">
                    Have a project in mind or just want to connect? Feel free to reach out to me!
                </p>
                <div className="mt-6">
                    <p className="text-lg text-gray-700"><strong>Email:</strong> your.email@example.com</p>
                    <p className="text-lg text-gray-700 mt-2"><strong>Phone:</strong> +91 98765 43210</p>
                    <p className="text-lg text-gray-700 mt-2"><strong>Location:</strong> Lucknow, India</p>
                </div>
                <div className="mt-6 flex justify-center space-x-6">
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
                    <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900">GitHub</a>
                    <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Twitter</a>
                </div>
            </div>
        </section>
    );
}