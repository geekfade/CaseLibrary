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
        path: '/basic',
        name: '基础表格',
      },
      {
        path: '/fixed',
        name: '固定表格',
      },
    ],
  },
  {
    path: '/form',
    name: '表单页',
    icon: 'el-icon-edit-outline',
    children: [
      {
        path: '/basic',
        name: '典型表单',
      },
      {
        path: '/signup',
        name: '注册表单',
      },
    ],
  },
  {
    path: '/charts',
    name: '图表页',
    icon: 'el-icon-picture-outline',
    children: [
      {
        path: '/line',
        name: '折线图',
      },
      {
        path: '/histogram',
        name: '柱状图',
      },
      {
        path: '/bar',
        name: '条形图',
      },
    ],
  },
  {
    path: '/profile',
    name: '详情页',
    icon: 'el-icon-tickets',
    children: [
      {
        path: '/success',
        name: '基础详情页',
      },
      {
        path: '/fail',
        name: '失败',
      },
    ],
  },
  {
    path: '/result',
    name: '结果页',
    icon: 'el-icon-circle-check-outline',
    children: [
      {
        path: '/success',
        name: '成功',
      },
      {
        path: '/fail',
        name: '失败',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
