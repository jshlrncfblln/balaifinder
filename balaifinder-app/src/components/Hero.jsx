function Hero (){
    return(
        <div class="items-center w-10/12 grid-cols-2 bg-whitesmoke mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5" data-aos="fade-right" data-aos-duration="800">
            <div class="pr-2 md:mb-14 py-14 md:py-0">
                <h1 class="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl"><span class="block w-full">Discover Your Perfect Match</span> with Our Advanced Matching Algorithm</h1>
                <p class="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
                Finding the right match can be challenging, whether you're looking for a partner, a job, or a place to live. Our platform simplifies this process by utilizing a sophisticated matching algorithm that takes into account your preferences, needs, and unique characteristics.
                </p>
                <div class="mt-4">
                    <a href="#contact" class="px-5 py-3 text-lg tracking-wider text-white bg-sky-700 rounded-lg md:px-8 hover:bg-sky-500 group"><span>Explore More</span> </a>
                </div>
            </div>

            <div class="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
                <img id="heroImg1" class="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0" src="./src/assets/searching-house.svg" alt="searching house hero image" width="500" height="488"/>
            </div>
      </div>
    )
}

export default Hero