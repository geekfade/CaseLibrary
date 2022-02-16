// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [];

const asideMenuConfig = [
  {
    path: '/Web',
    name: 'Web Page',
    icon: '#el-icon-CaseLibrary-wangye',
    children: [
      {
        path: '/Css',
        name: 'Css',
        icon: '#el-icon-CaseLibrary-css',
      },
      {
        path: '/Js',
        name: 'Js',
        icon: '#el-icon-CaseLibrary-js',
      },
      {
        path: '/Jq',
        name: 'Jq',
        icon: '#el-icon-CaseLibrary-jQuery',
      },
      {
        path: '/3D',
        name: '3D',
        icon: '#el-icon-CaseLibrary-d',
      },
      {
        path: '/Three',
        name: 'Three',
        icon: '#el-icon-CaseLibrary-cloud_three-copy',
      },
      {
        path: '/Gasp',
        name: 'Gasp',
        icon: '#el-icon-CaseLibrary-greensock',
      },
    ],
  },
  {
    path: '/Vue',
    name: 'Vue',
    icon: '#el-icon-CaseLibrary-Vue',
    children: [
      {
        path: '/animation',
        name: 'animation',
        icon: '#el-icon-CaseLibrary-donghuapian',
      },
      {
        path: '/Special effects',
        name: 'effects',
        icon: '#el-icon-CaseLibrary-texiao',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
