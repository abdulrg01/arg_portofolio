import { CgIfDesign } from "react-icons/cg";
import { SiAltiumdesigner } from "react-icons/si";

export default function About() {
  return (
    <section className="bg-gray-200 dark:bg-[#020A13]" id="about">
      <div className="max-w-[1000px] mx-auto py-5 lg:py-14 relative">
        <h2 class="mb-12 head_text text-black dark:text-white title">
          About me
        </h2>
        <div className="content flex flex-row items-center gap-28">
          <img
            className="aboutImage rounded-lg w-[40%]"
            src="/about.png"
            alt="about_image"
          />
          <ul className="aboutItems flex flex-col gap-[40px]">
            <li className="aboutItem flex flex-row items-center rounded-3xl list-none p-[10px] gap-5">
              <CgIfDesign className="w-[70px] h-[70px]" />
              <div className="aboutItemText">
                <h3 className=" text-[25px] font-[600]">UX/UI Designer</h3>
                <p className="desc">
                  Designed alternate skin UI for Blocktank Widget of Bitfinex,
                  BTCpay server etc. Medium fidelity prototyping of user flows,
                  media headers.
                </p>
              </div>
            </li>
            <li className="aboutItem flex flex-row items-center rounded-3xl list-none p-[10px] gap-5">
              <SiAltiumdesigner className="w-[70px] h-[70px]" />
              <div className="aboutItemText">
                <h3 className=" text-[25px] font-[600]">Product Designer</h3>
                <p className="desc">
                  Designing and prototyping for the New and future features of
                  the app, Building solution to the users Problem, working
                  together with the Product team, Tech team
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
