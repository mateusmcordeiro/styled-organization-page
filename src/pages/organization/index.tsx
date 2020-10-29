import React, { useState } from 'react';
import { PagesContext } from '../../shared/contexts/PagesContext';
import './organization.scss';
import { FiMapPin, FiLink2, FiCheck, FiBook } from 'react-icons/fi';
import classNames from '../../shared/helpers/classNames';




function Organization() {
  const [repositoriesOpenned, setRepositoriesOpenned] = useState<boolean>(false);

  const [termSearching, setTermSearching] = useState<string>('');

  const searchChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermSearching(e.target.value);
  }
  return (
    <PagesContext.Consumer>
      {
        (context) => {
          return context.organization !== undefined ? (
            <div className="app__page divided">
              <section className={
                classNames({
                  subpage: true,
                  'subpage--slide': repositoriesOpenned,
                  primary: true,
                  full: !repositoriesOpenned
                })
              } id="organization-page">
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
                        <FiLink2 size={10} ></FiLink2> <a href={ context.organization.blog } target='_blank' rel='noopener noreferrer'>{ context.organization.blog }</a>
                      </div>
                      <div className="information__block success">
                        <FiCheck size={10} ></FiCheck> <span>Verified</span>
                      </div>
                    </div>
                  </div>
                  <div className="organization__actions">
                    <button onClick={
                      () => setRepositoriesOpenned(!repositoriesOpenned)
                      
                    }><FiBook size={10} ></FiBook>{repositoriesOpenned ? 'Close' : 'See'} repositories <span>{ context.organization.public_repos }</span></button>
                  </div>
                </header>
              </section>
              <section className={
                classNames({
                  subpage: true,
                  'subpage--slide': repositoriesOpenned
                })
              } id="repositories">
                <div className='repository'>
                  <header>
                    <input className='repository__filter' onChange={ searchChanged } placeholder='search...'/>
                  </header>
                  <article className='repository__content'>
                    <div className='repository__list items'>
                      {
                        context.organization.repositories.map(
                          (repo:any, key: number) => {
                            return (
                              <div className={
                                classNames({
                                  items__item: true,
                                  displaying: (termSearching.length > 0 && (repo.full_name.toLocaleLowerCase()).includes(termSearching.toLocaleLowerCase())) ||  termSearching.length === 0
                                })
                              } key={key}>
                                <div className='item__title'>
                                  <h2>{repo.full_name}</h2>
                                  <p>{repo.description}</p>
                                </div>
                              </div>
                            );
                          }
                        )
                      }
                    </div>
                    
                  </article>
                </div>
                
              </section>
            </div>
          ) : (<></>)
        }
      }
    </PagesContext.Consumer>
    
  );
}
export default Organization;