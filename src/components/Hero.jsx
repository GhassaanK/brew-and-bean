import React from 'react'

const Hero = () => {
    return (
        <section
            id="home"
            className="relative bg-cover bg-center bg-no-repeat min-h-[585px] flex justify-center items-center px-4 text-center"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
            }}
        >
            {/* Dark semi-transparent overlay */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            {/* Content */}
            <div className="relative z-10 text-white p-8 max-w-3xl rounded-xl">
                <h1 className="text-4xl md:text-5xl font-serif mb-4">
                    Welcome to <span className="italic">
                        Brew & Bean
                    </span>
                </h1>
                <p className="text-base md:text-lg mb-6 font-light">
                    Your cozy escape in the heart of Karachi — where every cup tells a story 🍂
                </p>
                <div className="flex gap-4 flex-wrap justify-center">
                    <a
                        href="#menu"
                        className="bg-[#A8BDB0] text-white px-6 py-3 rounded-full font-medium hover:bg-[#91a89b] transition"
                    >
                        View Menu
                    </a>
                    <a
                        href="#contact"
                        className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#4B2E2B] transition"
                    >
                        Find Us
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
