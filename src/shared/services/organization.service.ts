import ApiServiceProvider from '../../core/providers/api.service.provider';

const ApiService = ApiServiceProvider();

function fetchOrganization(organizationName: string) {
  return ApiService.get(`orgs/${organizationName}`);
}

function fetchOrganizationRepository(organizationName: string) {
  return ApiService.get(`orgs/${organizationName}/repos`);
}


export default { fetchOrganization, fetchOrganizationRepository };