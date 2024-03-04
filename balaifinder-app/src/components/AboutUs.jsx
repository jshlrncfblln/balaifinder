


export default function AboutUs(){
    return(
        <section className="bg-gray-200">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="mt-12 md:mt-0">
                        <img src="./src/assets/Landing-page-2.jpg" className="object-cover rounded-lg shadow-md" />
                    </div>
                    <div className="max-w-lg">
                        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">Who We Are?</h2>
                        <p className="mt-4 text-gray-600 text-lg">Hi there! we are Syntax Finders! We are a group of fourth-year students pursuing a Bachelor's degree in Computer Science at the University of Caloocan City. In our quest to apply our programming skills to real-world problems, we created BalaiFinder site for home buyers. Our platform is designed to help users find their ideal home by using our matching algorithm and matched them with properties that meet their specific criteria. Wether you're looking for a cozy apartment or a spacious house, our site simplifies the searching and matching process, making it easier for you to find your dream home. Join us on our mission to revolutionize the way people find homes!</p>
                        <div className="mt-8">
                            <button className="text-white bg-sky-700 px-4 py-2 rounded-lg hover:bg-sky-500 font-semibold">Learn more about us</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}