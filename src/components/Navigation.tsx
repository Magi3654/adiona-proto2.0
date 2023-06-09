import { useAccount } from "@gear-js/react-hooks";
import { Carousel } from "./Carousel";
import { Account } from "./layout/header/account/Account";
import { Opiniones } from "./Opiniones";

function Navigation() {
	const { account } = useAccount();

  return (
  <>
    <div className="bienvenida d-flex flex-row">
      <div className="part1 w-50 bd-highlight" id="regreso">

        <div className="nav-logo">
          <img src="AdionaOscuro.png" alt="Logo adiona" className="logo" />
        </div>

        <div className="slogan_principal">
          <h1 className="m-2 text-xl font-extrabold tracking-tight text-white-900 md:text-2xl lg:text-6xl dark:text-white">Visit the destination of your dreams</h1>
          <p className="texto">Discover the word with us.</p>
        </div>

      </div>

      <div className="part2 w-50 bd-highlight d-inline-block">
        <nav className="w-100 h-25">
          <div className="w-100">
            <div className="w-100 d-inline-block" id="navbar-default">
              <ul className="flex flex-col font-medium p-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 light:bg-white dark:bg-gray-800">
                <li>
					<div className="dropdown show">
                  		<a href="/#" className=" dropdown-toggle block py-2 pl-3 pr-4 light:text-black  rounded md:bg-transparent md:p-0 dark:text-white"role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Booking</a>
						<div className="dropdown-menu dropdownContainer text-align-center" aria-labelledby="dropdownMenuLink">
							<a href="/Flights" className="dropdown-item dropdownButton">Flights</a>
							<a href="/#" className="dropdown-item dropdownButton">Cruises</a>
							<a href="/#" className="dropdown-item dropdownButton">Tours</a>
							<a href="/#" className="dropdown-item dropdownButton">Car rental</a>
						</div>
					</div>
                </li>
                <li>
                  <a href={account? "/Recompensas" : "/Principal"} className="block py-2 pl-3 pr-4 light:text-black rounded md:bg-transparent md:p-0 dark:text-white " aria-current="page">Rewards</a>
                </li>
                <li>
                  <a href={account? "/Perfil" : "/Principal"} className="block py-2 pl-3 pr-4 light:text-black rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">Profile</a>
                </li>
                <li className="ml-75">
                  <Account />
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Carousel />
      </div>
    </div>
    <Opiniones/>
  </>
  );
}
export { Navigation };
