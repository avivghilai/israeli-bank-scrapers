import BeinleumiGroupBaseScraper from './base-beinleumi-group';

class OtsarHahayalScraper extends BeinleumiGroupBaseScraper {
  SUPPORTS_OTP = true;

  SUPPORTS_TRUSTED_DEVICE_REGISTRATION = true;

  BASE_URL = 'https://online.bankotsar.co.il';

  LOGIN_URL = `${this.BASE_URL}/MatafLoginService/MatafLoginServlet?bankId=OTSARPRTAL&site=Private&KODSAFA=HE`;

  TRANSACTIONS_URL = `${this.BASE_URL}/wps/myportal/FibiMenu/Online/OnAccountMngment/OnBalanceTrans/PrivateAccountFlow`;

  TRUSTED_DEVICE_REGISTRATION_URL = `${this.BASE_URL}/appsng/Resources/PortalNG/shell/#/Online/AuthServicesInfo/OnlnServicesForU/FibiGuard`;
}

export default OtsarHahayalScraper;
