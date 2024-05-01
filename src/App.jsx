import Divider from "./components/divider";
import { HomeIcon, MailIcon, PersonIcon, PhoneIcon } from "./icons";

function Cv() {


  return (
    <div className="mx-[7rem] ">
      <div className="flex p-[2em]">
        <div className="w-1/4 bg-gray-100 p-4">
          <div className="">
            <h2 className="text-center my-6">Sylvie Loiseau</h2>
            <div className="flex justify-center my-10">
              <img src="/Salem.jpg" className=" w-[7rem] h-[7rem] rounded-full border border-md border-white" alt="" />
            </div>
          </div>
          <Divider />
          <div>
            <h2>Informations personnelles</h2>
            <p className="flex items-center gap-2">
              <PersonIcon />
              Sylvie Loiseau
            </p>
            <p className="flex items-center gap-2">
              <MailIcon />
              fr@demo.com
            </p>
            <p className="flex items-center gap-2">
              <PhoneIcon />
              0623845102
            </p>
            <p className="flex items-center gap-2">
              <HomeIcon />
              14; rue des rosiers 37261 Tours
            </p>
          </div>
          <Divider />
          <div className="space-y-2">
            <h2>Compétences</h2>
            <div className="flex justify-between items-center">
              <h3>Soins visage</h3>
              <div className="dots">
                <div className="dot bg-blue"></div>
                <div className="dot bg-blue"></div>
                <div className="dot bg-blue"></div>
                <div className="dot bg-blue"></div>
                <div className="dot bg-blue"></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <h3>Modelage</h3>
              <div className="dots">
                <div className="dot bg-blue"></div>
                <div className="dot bg-blue"></div>
                <div className="dot bg-blue"></div>
                <div className="dot bg-blue"></div>
                <div className="dot bg-blue"></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <h3>vente</h3>
              <div className="dots">
                <div className="dot bg-blue"></div>
                <div className="dot bg-blue"></div>
                <div className="dot bg-blue"></div>
                <div className="dot bg-blue"></div>
                <div className="dot bg-secondary"></div>
              </div>
            </div>
          </div>
          <Divider />
          <div className="space-y-2">
            <h2>Qualités</h2>
            <div className="flex items-center gap-2">
              <div className="puce"></div>
              <h3>Dynamique</h3>
            </div>
            <div className="flex items-center gap-2">
              <div className="puce"></div>
              <h3>Ponctuelle</h3>
            </div>
            <div className="flex items-center gap-2">
              <div className="puce"></div>
              <h3>Souriante</h3>
            </div>
          </div>
          <Divider />
          <div className="space-y-2">
            <h2>Centres d'intérêt</h2>
            <div className="flex items-center gap-2">
              <div className="puce"></div>
              <h3>Yoga</h3>
            </div>
            <div className="flex items-center gap-2">
              <div className="puce"></div>
              <h3>Danse comtemporaine</h3>
            </div>
          </div>
        </div>
        <div className="w-3/4 p-4 my-6">
          <div>
            <h2>Profil</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia deserunt rerum eos nihil esse labore quaerat, exercitationem quisquam. Reiciendis vero tempore laudantium labore similique natus cumque soluta dolor assumenda blanditiis.</p>
          </div>
          <Divider />
          <div>
            <h2>Expérience professionnelle</h2>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3>Esthéticienne SPA</h3>
                    <span>Bellaerm, Tours</span>
                  </div>
                  <p> <span>de oct. 2010 à ce jour</span></p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eaque odit, atque esse ut sint architecto, rem nisi, eligendi nobis laborum deleniti? Similique at ullam, fuga nostrum perferendis magnam dolor.</p>
              </div>
              <div>
                <h3>Réalisation de soins esthétiques :</h3>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15"><path fill="currentColor" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"></path></svg>
                  <p>Soins minceurs</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15"><path fill="currentColor" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"></path></svg>
                  <p>Gommages</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15"><path fill="currentColor" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"></path></svg>
                  <p>Soins du visage</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15"><path fill="currentColor" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"></path></svg>
                  <p>Soins spécial maternité</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15"><path fill="currentColor" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"></path></svg>
                  <p>Modelages</p>
                </div>
              </div>
              <div>
                <h3>Activités commerciales :</h3>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15"><path fill="currentColor" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"></path></svg>
                  <p>Conseils et fidélisation des clientes</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15"><path fill="currentColor" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"></path></svg>
                  <p>Ventes de produits de soins</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15"><path fill="currentColor" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"></path></svg>
                  <p>Vente des prestations du spa</p>
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-center mt-3">
                  <div>
                    <h3>Esthéticienne</h3>
                    <span>Loire Beauté, Tours</span>
                  </div>
                  <p> <span>de sept. 2005 à sept. 2010</span></p>
                </div>
                <p>Chargée des soins et de la gestion de la clientèle d'un institut de beauté.</p>
              </div>
              <div >
                <h3>Soins effectués :</h3>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15"><path fill="currentColor" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"></path></svg>
                  <p>Réalisation de massages bien-être</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15"><path fill="currentColor" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"></path></svg>
                  <p>Soins visage et corps</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15"><path fill="currentColor" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"></path></svg>
                  <p>Maquillage</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15"><path fill="currentColor" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"></path></svg>
                  <p>Manicure</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15"><path fill="currentColor" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"></path></svg>
                  <p>Epilations</p>
                </div>
              </div>
              <div>
                <h3>Activités commerciales :</h3>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15"><path fill="currentColor" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"></path></svg>
                  <p>Accueil de la clientèle et prise de rendez-vous</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15"><path fill="currentColor" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"></path></svg>
                  <p>Mise en place des cabines</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15"><path fill="currentColor" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"></path></svg>
                  <p>Vente de produits cosmétiques et parfumerie</p>
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <div>
            <h2>Formations</h2>
            <div>
              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3>BTS esthétique-cosmétique-parfumerie</h3>
                    <span>Lycée polyvalent privé d'esthétique cosmétique de Touraine; Tours</span>
                  </div>
                  <p> <span>2005</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cv;