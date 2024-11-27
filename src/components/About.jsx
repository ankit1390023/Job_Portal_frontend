export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                            fill="none"
                            className="w-full h-64 mx-auto"
                        >
                            <circle cx="32" cy="32" r="30" stroke="#4A90E2" strokeWidth="4" fill="none" />
                            <path
                                d="M19 27c3.5 5.5 10.5 5.5 14 0s7.5-5.5 14-5.5c0 8.5-8.5 12.5-14 12.5s-14-4-14-12.5z"
                                fill="#4A90E2"
                            />
                            <path
                                d="M12 32c3.5 5.5 10.5 5.5 14 0s7.5-5.5 14-5.5c0 8.5-8.5 12.5-14 12.5s-14-4-14-12.5z"
                                fill="#4A90E2"
                            />
                        </svg>
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React Development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
