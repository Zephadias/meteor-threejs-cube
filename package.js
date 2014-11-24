Package.describe({
  name: 'zephadias:meteor-threejs-cube',
  summary: 'A 3D rotating cube in webgl.',
  version: '1.0.0',
  git: 'https://github.com/Zephadias/meteor-threejs-cube'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('threejs-cube.js');
  api.export('ThreeCube');
});
