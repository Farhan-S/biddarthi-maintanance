export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FEC34A]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FEC34A]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FEC34A]/5 rounded-full blur-3xl"></div>
      </div>

      <main className="relative flex flex-col items-center justify-center px-6 py-12 text-center max-w-4xl">
        {/* Logo/Icon */}
        <div className="mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-[#FEC34A]/30 blur-2xl rounded-full"></div>
            <div className="relative bg-gradient-to-br from-[#FEC34A] to-[#f5b32f] rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <svg
                className="w-20 h-20 text-white drop-shadow-lg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl space-y-8 w-full">
          <div className="space-y-4 px-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FEC34A] drop-shadow-sm break-words">
              বিদ্যার্থী
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#FEC34A] to-transparent rounded-full"></div>
          </div>
          
          {/* Maintenance Notice in Bangla */}
          <div className="space-y-6 bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-[#FEC34A]/20">
            <div className="inline-block">
              <div className="flex items-center gap-3 px-5 py-2 bg-gradient-to-r from-[#FEC34A] to-[#f5b32f] rounded-full shadow-lg">
                <div className="relative">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-white rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-sm font-semibold text-white">রক্ষণাবেক্ষণ চলছে</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-relaxed">
              ওয়েবসাইট রক্ষণাবেক্ষণাধীন
            </h2>
            
            <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p className="font-medium">
                এই মুহূর্তে আমাদের ওয়েবসাইট রক্ষণাবেক্ষণাধীন রয়েছে।
              </p>
              <p className="text-gray-600">
                আপনার আরও ভালো সেবা প্রদানের জন্য আমরা আমাদের সিস্টেম উন্নত করছি।
              </p>
            </div>

            {/* Back Online Info */}
            <div className="pt-6">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FEC34A]/20 to-[#f5b32f]/20 rounded-2xl border-2 border-[#FEC34A]/30">
                <svg
                  className="w-6 h-6 text-[#FEC34A]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="text-left">
                  <p className="text-sm text-gray-600 font-medium">ফিরে আসছি</p>
                  <p className="text-2xl font-bold text-gray-800"> কিছুক্ষণের মধ্যেই</p>
                </div>
              </div>
            </div>

            <p className="text-gray-500 text-base pt-4">
              অসুবিধার জন্য আমরা আন্তরিকভাবে দুঃখিত। ধৈর্য ধরার জন্য ধন্যবাদ!
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:support@biddarthi.org"
              className="group flex items-center gap-3 px-6 py-3 bg-white hover:bg-[#FEC34A] text-gray-700 hover:text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-[#FEC34A]/30"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="font-semibold">যোগাযোগ করুন</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Biddarthi.org. সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </main>
    </div>
  );
}
