import React, { useState } from 'react';
import Input from '../../shared/components/input';
import { PagesContext } from '../../shared/contexts/PagesContext';
import './Search.scss';
import OrganizationService from '../../shared/services/organization.service';

function onClickButtonAction({organizationName, setLoading}: any, context: any) {
  OrganizationService
    .fetchOrganization(organizationName)
    .then(
      (res) => {
        return res.data;
        }
      ).then(
        (organization) => {
          return { organization, repositoriesResponse: OrganizationService.fetchOrganizationRepository(organizationName) }
        }
      ).then(
        ({organization, repositoriesResponse}) => {
          repositoriesResponse.then(
            (res) => {
              context.setOrganization({
                ...organization,
                repositories: res.data
              })
              context.slickRef.slickGoTo(1)
              setTimeout(() => {
                setLoading(false)
              },2000)
              
            }
          )
        }
    )
    .catch(
      (err) => {
        setLoading(false);
      }
    )
}

function Search() {

  const [loading, setLoading] = useState<boolean>(false);

  const [organizationName, setOrganizationName] = useState<string>('');
  
  return (
    <PagesContext.Consumer>
      { (context) => {
        return (
          <div className="app__page">
            <Input
              onChangeInput={
                (e) => {
                  setOrganizationName(e.target.value)
                }
              }
              onClickButton={
                (e) => {
                  setLoading(true);
                  onClickButtonAction({organizationName, setLoading}, context);
                }
              }
              
              loading={ loading }
              selfValue={ organizationName }
            ></Input>
          </div>      
        )
      }}
    </PagesContext.Consumer>
    
  );
}

export default Search;
