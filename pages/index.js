import Head from 'next/head'
import config from "../config"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function Home() {
	return (
		<div>
			<Head>
				<title>{config.name}</title>
			</Head>
			<Navbar />
			<section id="top" className="w-full bg-center bg-cover h-96" style={{ backgroundImage: "url('https://s.yimg.com/uu/api/res/1.2/zbLdoYpopqyGAXeS2dVaEA--~B/aD03MDE7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://o.aolcdn.com/hss/storage/midas/c4ffd6e734b74ca2a7afac615a9cc603/202504538/google-servers-2015-08-20-01.jpg')" }}>
				<div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
					<div className="text-center">
						<h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">Host your server with <span className="text-blue-400 underline">{config.name}</span></h1>
						<button onClick={() => window.location.href = "/dashboard"} className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start hosting</button>
					</div>
				</div>
			</section>
			<section id="facts" className="bg-white dark:bg-gray-900">
				<div className="container px-6 py-10 mx-auto">
					<h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Pros of <span className="underline decoration-blue-500">{config.name}</span></h1>

					<p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
						We try to serve you best nodes.
					</p>

					<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
						<div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
							<span className="inline-block text-blue-500 dark:text-blue-400">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
								</svg>
							</span>

							<h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Easy to deploy</h1>

							<p className="text-gray-500 dark:text-gray-300">
								With {config.name} you can easily deploy your server and use it to play with your friends or host your Discord bot!
							</p>


						</div>

						<div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
							<span className="inline-block text-blue-500 dark:text-blue-400">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
								</svg>
							</span>

							<h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Easy to use</h1>

							<p className="text-gray-500 dark:text-gray-300">
								{config.name} made it easier for users to deploy servers. Comfortable and easy UI will make sure you won't be confused!
							</p>


						</div>

						<div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
							<span className="inline-block text-blue-500 dark:text-blue-400">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
								</svg>
							</span>

							<h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Best performance</h1>

							<p className="text-gray-500 dark:text-gray-300">
								{config.name} tries to provide lag-free experience for you. We tested all nodes to make sure your experience will be smooth and fast!
							</p>


						</div>
					</div>
				</div>
			</section>
			<section className="dark:bg-gray-900">
				<div className="flex items-center justify-center">
					<div className="py-14 text-center px-5 sm:px-0">
						<h2 className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
							<span className="block">Don't waste your time</span>
							<span className="block">Start using {config.name} today.</span>
						</h2>
						<h2 className="text-gray-50 mt-5 tracking-wide text-sm sm:text-base">
							<span className="block">We stated enough facts for you</span>
							<span className="block">Isn't it time for you to start working with us?</span>
						</h2>
						<div className="shadow inline-flex mt-5">
							<a href="/dashboard" className="inline-flex items-center justify-center bg-white hover:bg-indigo-200 px-4 py-3 border border-transparent rounded-md text-indigo-500 font-medium">Start hosting</a>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	)
}