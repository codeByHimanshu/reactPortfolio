
export default function Projects() {
    return (
        <section className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 animate__animated animate__fadeInDown">My Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md animate__animated animate__zoomIn">
                        <h3 className="text-xl font-semibold text-gray-800">Project 1</h3>
                        <p className="text-gray-600 mt-2">Brief description of your project goes here.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md animate__animated animate__zoomIn animate__delay-1s">
                        <h3 className="text-xl font-semibold text-gray-800">Project 2</h3>
                        <p className="text-gray-600 mt-2">Brief description of your project goes here.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md animate__animated animate__zoomIn animate__delay-2s">
                        <h3 className="text-xl font-semibold text-gray-800">Project 3</h3>
                        <p className="text-gray-600 mt-2">Brief description of your project goes here.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}