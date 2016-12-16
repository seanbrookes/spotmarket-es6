export default ngModule => {
  require('./page-header')(ngModule);
  require('./main-nav')(ngModule);
  require('./home-content')(ngModule);
};