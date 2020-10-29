import React from 'react';
import { PagesContext } from '../../shared/contexts/PagesContext';
import './organization.scss';
import { FiMapPin, FiLink2, FiCheck, FiBook } from 'react-icons/fi';

function Organization() {
  return (
    <PagesContext.Consumer>
      {
        (context) => {
          return context.organization !== undefined ? (
            <div className="app__page" >
              <header className="organization">
                <div className="organization__picture">
                  <img src={context.organization.avatar_url} alt={`${context.organization.name} logo`}/>
                </div>
                <div className="organization__infos">
                  <div className="infos__identity">
                    <h1>{ context.organization.name }</h1>
                    <p>{ context.organization.description }.</p>
                  </div>
                  
                  <div className="infos__extra">
                    <div className="information__block">
                      <FiMapPin size={10} ></FiMapPin> <span>{ context.organization.location }</span>
                    </div>
                    <div className="information__block">
                      <FiLink2 size={10} ></FiLink2> <a href={ context.organization.blog } >{ context.organization.blog }</a>
                    </div>
                    <div className="information__block success">
                      <FiCheck size={10} ></FiCheck> <span>Verified</span>
                    </div>
                  </div>
                </div>
                <div className="organization__actions">
                  <button><FiBook size={10} ></FiBook>See repositories <span>{ context.organization.public_repos }</span></button>
                </div>
              </header>
              <section className="repositories">

              </section>
            </div>
          ) : (<></>)
        }
      }
    </PagesContext.Consumer>
    
  );
}
export default Organization;