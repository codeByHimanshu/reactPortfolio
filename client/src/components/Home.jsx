

export default function Home() {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="max-w-2xl text-center p-10 shadow-lg rounded-2xl animate__animated animate__fadeInUp animate__slow">
        <h1 className="text-6xl font-extrabold text-white mb-4 animate__animated animate__zoomIn animate__delay-1s">
          Hey! I'm <span className="text-orange-600">Himanshu Singh</span>
        </h1>
        <p className="text-xl text-gray-700 animate__animated animate__fadeIn animate__delay-2s">
          A passionate <span className="text-orange-500 font-semibold">Full-Stack Developer</span>
        </p>
        
      </div>
    </div>
  );
}