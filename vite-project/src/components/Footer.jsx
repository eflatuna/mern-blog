import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
export default function FooterCom() {
	return (
		<Footer container className="border border-t-8 border-teal-500">
			<div className="w-full max-w-7xl mx-auto">
				<div className="grid w-full justify-between sm:flex md:grid-cols-1">
					<div className="mt-5">
						<Link
							to="/"
							className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
						>
							<span className="px-2 py-1 e">E -</span>
							Blog
						</Link>
					</div>
					<div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
						<div>
							<Footer.Title title="About" />
							<Footer.LinkGroup col>
								<Footer.Link
									href="/about"
									target="_blank"
									rel="noopener noreferrer"
								>
									GitHub
								</Footer.Link>
								<Footer.Link
									href="https://github.com/eflatuna"
									target="_blank"
									rel="noopener noreferrer"
								>
									E-Blog
								</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title="Follow Us" />
							<Footer.LinkGroup col>
								<Footer.Link
									href="https://www.linkedin.com/in/esra-baskaya/"
									target="_blank"
									rel="noopener noreferrer"
								>
									LinkedIn
								</Footer.Link>
								<Footer.Link
									href="/about"
									target="_blank"
									rel="noopener noreferrer"
								>
									Twitter
								</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title="Legal" />
							<Footer.LinkGroup col>
								<Footer.Link href="#">
									Privacy Policy
								</Footer.Link>
								<Footer.Link href="#">
									Terms &amp; Conditions
								</Footer.Link>
							</Footer.LinkGroup>
						</div>
					</div>
				</div>
				<Footer.Divider />
				<div className="w-full sm:flex sm:items-center sm:justify-between ">
					<Footer.Copyright
						href="#"
						by="Efla"
						year={new Date().getFullYear()}
					/>
					<div className="flex gap-6 sm:mt-0 mt-4 justify-center">
						<Footer.Icon href="#" icon={BsFacebook} />
						<Footer.Icon href="#" icon={BsInstagram} />
						<Footer.Icon
							href="https://github.com/eflatuna"
							icon={BsTwitter}
						/>
						<Footer.Icon href="#" icon={BsGithub} />
					</div>
				</div>
			</div>
		</Footer>
	);
}
